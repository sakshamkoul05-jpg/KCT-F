"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Pause, Play, SkipBack, SkipForward, X, Loader2 } from "lucide-react"
import { assetUrl, type Track } from "@/lib/media"
import { cn } from "@/lib/utils"

export type Queue = {
  /** Shown above the track title, e.g. "Spoken Kashmiri · Part 1". */
  label: string
  tracks: Track[]
}

type PlayerState = {
  queue: Queue | null
  index: number
  isPlaying: boolean
  isLoading: boolean
  /** `src` of the track currently loaded, or null. */
  currentSrc: string | null
  play: (queue: Queue, index: number) => void
  toggle: () => void
  next: () => void
  previous: () => void
  close: () => void
}

const AudioPlayerContext = createContext<PlayerState | null>(null)

export function useAudioPlayer(): PlayerState {
  const ctx = useContext(AudioPlayerContext)
  if (!ctx) {
    throw new Error("useAudioPlayer must be used inside <AudioPlayerProvider>")
  }
  return ctx
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [queue, setQueue] = useState<Queue | null>(null)
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const track = queue?.tracks[index] ?? null

  const play = useCallback(
    (nextQueue: Queue, nextIndex: number) => {
      const sameTrack =
        queue?.tracks[index]?.src === nextQueue.tracks[nextIndex]?.src
      if (sameTrack) {
        // Tapping the track that's already loaded toggles it.
        const el = audioRef.current
        if (!el) return
        if (el.paused) void el.play()
        else el.pause()
        return
      }
      setError(null)
      setQueue(nextQueue)
      setIndex(nextIndex)
      setIsPlaying(true)
    },
    [queue, index]
  )

  const toggle = useCallback(() => {
    const el = audioRef.current
    if (!el || !track) return
    if (el.paused) void el.play()
    else el.pause()
  }, [track])

  const next = useCallback(() => {
    if (!queue) return
    setIndex((i) => (i + 1 < queue.tracks.length ? i + 1 : i))
  }, [queue])

  const previous = useCallback(() => {
    const el = audioRef.current
    // Standard behaviour: restart the track unless we're in the first seconds.
    if (el && el.currentTime > 3) {
      el.currentTime = 0
      return
    }
    setIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  const close = useCallback(() => {
    audioRef.current?.pause()
    setQueue(null)
    setIndex(0)
    setIsPlaying(false)
    setElapsed(0)
    setTotal(0)
    setError(null)
  }, [])

  // Load and play whenever the selected track changes.
  useEffect(() => {
    const el = audioRef.current
    if (!el || !track) return
    el.src = assetUrl(track.src)
    el.load()
    setElapsed(0)
    setTotal(0)
    if (isPlaying) {
      void el.play().catch(() => {
        // Autoplay can be refused before any user gesture; surface it quietly.
        setIsPlaying(false)
      })
    }
    // `isPlaying` is deliberately excluded: including it would restart the
    // track on every pause/resume.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track?.src])

  const seek = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const el = audioRef.current
      if (!el || !total) return
      const rect = event.currentTarget.getBoundingClientRect()
      const ratio = (event.clientX - rect.left) / rect.width
      el.currentTime = Math.min(Math.max(ratio, 0), 1) * total
    },
    [total]
  )

  const value = useMemo<PlayerState>(
    () => ({
      queue,
      index,
      isPlaying,
      isLoading,
      currentSrc: track?.src ?? null,
      play,
      toggle,
      next,
      previous,
      close,
    }),
    [queue, index, isPlaying, isLoading, track?.src, play, toggle, next, previous, close]
  )

  const atStart = index === 0
  const atEnd = !queue || index >= queue.tracks.length - 1
  const progress = total > 0 ? (elapsed / total) * 100 : 0

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}

      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        onLoadedMetadata={(e) => setTotal(e.currentTarget.duration)}
        onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        onEnded={() => {
          if (!atEnd) next()
          else setIsPlaying(false)
        }}
        onError={() => {
          setIsLoading(false)
          setIsPlaying(false)
          setError("This recording could not be loaded.")
        }}
      />

      {/* Spacer so the fixed bar never covers the end of a page. */}
      {track && <div aria-hidden className="h-24" />}

      {track && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-walnut/95 backdrop-blur-md text-white shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
          {/* Seek bar */}
          <div
            role="slider"
            tabIndex={0}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.round(total)}
            aria-valuenow={Math.round(elapsed)}
            aria-valuetext={`${formatTime(elapsed)} of ${formatTime(total)}`}
            onClick={seek}
            onKeyDown={(e) => {
              const el = audioRef.current
              if (!el) return
              if (e.key === "ArrowRight") el.currentTime = Math.min(el.currentTime + 10, total)
              if (e.key === "ArrowLeft") el.currentTime = Math.max(el.currentTime - 10, 0)
            }}
            className="group h-1.5 w-full cursor-pointer bg-white/15 transition-[height] hover:h-2.5 focus:h-2.5 focus:outline-none"
          >
            <div
              className="h-full bg-gold transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1">
              <button
                onClick={previous}
                disabled={atStart && elapsed <= 3}
                aria-label="Previous track"
                className="rounded-full p-2 text-white/60 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <SkipBack className="h-4 w-4" />
              </button>

              <button
                onClick={toggle}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-chinar text-white transition-colors hover:bg-chinar-light"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : isPlaying ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="h-5 w-5 translate-x-[1px]" fill="currentColor" />
                )}
              </button>

              <button
                onClick={next}
                disabled={atEnd}
                aria-label="Next track"
                className="rounded-full p-2 text-white/60 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate font-body text-sm font-medium text-white">
                {track.title}
              </p>
              <p className="truncate font-accent text-[10px] uppercase tracking-[0.15em] text-white/40">
                {error ?? `${queue?.label} · ${index + 1} of ${queue?.tracks.length}`}
              </p>
            </div>

            <p className="hidden shrink-0 font-mono text-xs tabular-nums text-white/50 sm:block">
              {formatTime(elapsed)} / {formatTime(total || 0)}
            </p>

            <button
              onClick={close}
              aria-label="Close player"
              className="shrink-0 rounded-full p-2 text-white/40 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </AudioPlayerContext.Provider>
  )
}

/**
 * A single row in a track listing. Reflects whether it is the loaded track and
 * whether that track is currently playing.
 */
export function TrackRow({
  track,
  queue,
  index,
  subtitle,
}: {
  track: Track
  queue: Queue
  index: number
  subtitle?: string
}) {
  const { play, currentSrc, isPlaying, isLoading } = useAudioPlayer()
  const isCurrent = currentSrc === track.src
  const showPause = isCurrent && isPlaying

  return (
    <button
      onClick={() => play(queue, index)}
      aria-label={`${showPause ? "Pause" : "Play"} ${track.title}`}
      className={cn(
        "group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all",
        isCurrent
          ? "border-chinar/30 bg-chinar/5 shadow-sm"
          : "border-transparent bg-white shadow-sm hover:border-stone/30 hover:shadow-md"
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
          isCurrent
            ? "bg-chinar text-white"
            : "bg-chinar/10 text-chinar group-hover:bg-chinar group-hover:text-white"
        )}
      >
        {isCurrent && isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : showPause ? (
          <Pause className="h-4 w-4" fill="currentColor" />
        ) : (
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={cn(
            "block truncate font-body text-sm font-medium",
            isCurrent ? "text-chinar" : "text-walnut"
          )}
        >
          {track.title}
        </span>
        <span className="block truncate font-accent text-[10px] uppercase tracking-[0.15em] text-walnut/40">
          {subtitle ? `${subtitle} · ` : ""}
          {track.duration}
        </span>
      </span>
    </button>
  )
}
