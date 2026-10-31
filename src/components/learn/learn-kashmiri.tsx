"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Download,
  Ear,
  Headphones,
  Loader2,
  Mic,
  Music,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react"
import { AudioPlayerProvider, useAudioPlayer, type Queue } from "@/components/audio-player"
import { AlbumPlaceholder } from "@/components/album-placeholder"
import { Library } from "@/components/learn/library"
import {
  ALBUMS,
  LEARNING_STAGES,
  LESSONS,
  LESSON_COUNT,
  PUBLICATIONS,
  TRACK_COUNT,
  assetUrl,
  downloadName,
  durationToSeconds,
  formatMinutes,
  type LearningStage,
  type Lesson,
} from "@/lib/media"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "kct-learn-progress-v1"

/* ───────────────────────── progress (per browser) ───────────────────────── */

function useProgress() {
  const [done, setDone] = useState<Set<string>>(new Set())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(new Set(JSON.parse(raw) as string[]))
    } catch {
      /* storage unavailable — progress simply isn't remembered */
    }
    setLoaded(true)
  }, [])

  const persist = useCallback((next: Set<string>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
    } catch {
      /* ignore */
    }
  }, [])

  const setLesson = useCallback(
    (src: string, value: boolean) => {
      setDone((prev) => {
        if (prev.has(src) === value) return prev
        const next = new Set(prev)
        if (value) next.add(src)
        else next.delete(src)
        persist(next)
        return next
      })
    },
    [persist]
  )

  const reset = useCallback(() => {
    setDone(new Set())
    persist(new Set())
  }, [persist])

  return { done, loaded, setLesson, reset }
}

function stageLessons(stage: LearningStage): Lesson[] {
  return LESSONS.slice(stage.range[0], stage.range[1])
}

function stageQueue(stage: LearningStage, index: number): Queue {
  return {
    label: `Stage ${index + 1} · ${stage.title}`,
    tracks: stageLessons(stage),
  }
}

const bookByFile = new Map(PUBLICATIONS.map((p) => [p.file, p]))

/* ─────────────────────────────── page ─────────────────────────────── */

export function LearnKashmiri() {
  const progress = useProgress()

  return (
    <AudioPlayerProvider onTrackEnded={(t) => progress.setLesson(t.src, true)}>
      <LearnKashmiriInner {...progress} />
    </AudioPlayerProvider>
  )
}

function LearnKashmiriInner({
  done,
  loaded,
  setLesson,
  reset,
}: ReturnType<typeof useProgress>) {
  const { play } = useAudioPlayer()
  const [active, setActive] = useState(0)

  // Where the learner should pick up: the first lesson not yet completed.
  const nextLessonIndex = useMemo(
    () => LESSONS.findIndex((l) => !done.has(l.src)),
    [done]
  )
  const nextStageIndex =
    nextLessonIndex === -1
      ? LEARNING_STAGES.length - 1
      : LEARNING_STAGES.findIndex(
          (s) => nextLessonIndex >= s.range[0] && nextLessonIndex < s.range[1]
        )

  // Open the learner's current stage once their saved progress has loaded.
  useEffect(() => {
    if (loaded) setActive(nextStageIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])

  const completed = done.size
  const percent = Math.round((completed / LESSON_COUNT) * 100)
  const started = completed > 0

  const continueLearning = () => {
    const stageIdx = nextStageIndex
    const stage = LEARNING_STAGES[stageIdx]
    setActive(stageIdx)
    document.getElementById("path")?.scrollIntoView({ behavior: "smooth" })
    if (nextLessonIndex !== -1) {
      play(stageQueue(stage, stageIdx), nextLessonIndex - stage.range[0])
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-lapis pt-36 pb-20 text-white">
        <div className="absolute inset-0 lattice lattice-fade" aria-hidden="true" />
        <div className="sozni-rule absolute inset-x-0 bottom-0" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 flex items-baseline gap-4">
              <span lang="ks" dir="rtl" className="font-nastaliq text-4xl leading-[1.8] text-gold-light">کٲشُر</span>
              <span className="kicker on-dark">Koshur, the Kashmiri language</span>
            </p>
            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1] text-white sm:text-6xl md:text-7xl">
              Learn Kashmiri
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/90">
              A free, step-by-step course from the Trust. Follow five stages of
              audio lessons in order, read along with our books, and track your
              progress as you go.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={continueLearning} className="btn-heritage !px-7 !py-4 !text-sm">
                <Play className="h-4 w-4" fill="currentColor" />
                {!started
                  ? "Start lesson 1"
                  : nextLessonIndex === -1
                    ? "Review the course"
                    : `Continue: ${LESSONS[nextLessonIndex].title}`}
              </button>
              <a
                href="#library"
                className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-7 py-4 font-accent text-sm font-semibold text-white transition-colors hover:bg-white hover:text-lapis"
              >
                <BookOpen className="h-4 w-4" />
                Books & publications
              </a>
            </div>
          </div>

          {/* Progress card */}
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="font-accent text-xs font-semibold text-gold-light">
                  Your progress
                </p>
                <p className="mt-1 font-display text-4xl font-bold text-white">
                  {loaded ? `${percent}%` : "—"}
                </p>
              </div>
              <p className="text-right text-sm text-white/85">
                {completed} of {LESSON_COUNT}
                <br />
                lessons done
              </p>
            </div>
            <div className="mb-6 h-2.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full rounded-full bg-gold transition-[width] duration-500" style={{ width: `${percent}%` }} />
            </div>
            <ol className="space-y-2.5">
              {LEARNING_STAGES.map((stage, i) => {
                const lessons = stageLessons(stage)
                const n = lessons.filter((l) => done.has(l.src)).length
                const complete = n === lessons.length
                return (
                  <li key={stage.id} className="flex items-center gap-3 text-sm">
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        complete ? "bg-gold text-lapis" : "bg-white/15 text-white"
                      )}
                    >
                      {complete ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
                    </span>
                    <span className="flex-1 text-white">{stage.title}</span>
                    <span className="tabular-nums text-white/85">
                      {n}/{lessons.length}
                    </span>
                  </li>
                )
              })}
            </ol>
            <p className="mt-5 text-xs text-white/85">Progress is saved on this device.</p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-b border-stone/50 bg-ivory py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <h2 className="mb-6 font-accent text-sm font-semibold text-copper">
            How to learn with this course
          </h2>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Headphones, title: "Listen", text: "Play the lessons in order — each one builds on the last." },
              { icon: Mic, title: "Repeat aloud", text: "Pause and say every word yourself. Speaking is how it sticks." },
              { icon: BookOpen, title: "Read along", text: "Open the stage's companion book to see the words written." },
              { icon: CheckCircle2, title: "Tick it off", text: "Lessons mark themselves done when finished, or tick them yourself." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lapis text-gold">
                  <step.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-walnut">
                    {i + 1}. {step.title}
                  </p>
                  <p className="text-sm leading-relaxed text-walnut/80">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Learning path ── */}
      <section id="path" className="scroll-mt-24 bg-snow py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-accent text-sm font-semibold text-copper">
                The learning path
              </p>
              <h2 className="editorial-heading text-4xl text-walnut sm:text-5xl">Five stages, {LESSON_COUNT} lessons</h2>
            </div>
            {started && (
              <button
                onClick={() => {
                  if (window.confirm("Clear your saved progress on this device?")) reset()
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-walnut/80 underline-offset-4 hover:text-chinar hover:underline"
              >
                <RotateCcw className="h-4 w-4" />
                Reset progress
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
            {/* Stage list */}
            <nav aria-label="Course stages" className="lg:sticky lg:top-24 lg:self-start">
              <ol className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                {LEARNING_STAGES.map((stage, i) => {
                  const lessons = stageLessons(stage)
                  const n = lessons.filter((l) => done.has(l.src)).length
                  const complete = n === lessons.length
                  const isActive = i === active
                  return (
                    <li key={stage.id} className="min-w-[230px] lg:min-w-0">
                      <button
                        onClick={() => setActive(i)}
                        aria-current={isActive ? "step" : undefined}
                        className={cn(
                          "flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all",
                          isActive
                            ? "border-chinar bg-white shadow-medium"
                            : "border-stone/50 bg-white hover:border-walnut/40"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold",
                            complete
                              ? "bg-forest text-white"
                              : isActive
                                ? "bg-chinar text-white"
                                : "bg-ivory text-walnut"
                          )}
                        >
                          {complete ? <Check className="h-5 w-5" strokeWidth={3} /> : i + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-accent text-xs font-semibold text-copper">
                            Stage {i + 1}
                          </span>
                          <span className="block font-display text-base font-bold text-walnut">{stage.title}</span>
                          <span className="mt-1.5 flex items-center gap-2">
                            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone/50">
                              <span
                                className={cn("block h-full rounded-full", complete ? "bg-forest" : "bg-chinar")}
                                style={{ width: `${(n / lessons.length) * 100}%` }}
                              />
                            </span>
                            <span className="text-xs tabular-nums text-walnut/80">
                              {n}/{lessons.length}
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ol>
            </nav>

            <StagePanel
              key={active}
              index={active}
              done={done}
              setLesson={setLesson}
              onNext={() => {
                setActive((a) => Math.min(a + 1, LEARNING_STAGES.length - 1))
                document.getElementById("path")?.scrollIntoView({ behavior: "smooth" })
              }}
            />
          </div>
        </div>
      </section>

      <Library />

      {/* ── Music ── */}
      <section className="bg-walnut py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-accent text-sm font-semibold text-gold-light">
                Listen &amp; enjoy
              </p>
              <h2 className="editorial-heading text-4xl text-white sm:text-5xl">Kashmiri Music</h2>
              <p className="mt-3 max-w-xl text-white/90">
                {`Hearing the language sung is one of the best ways to tune your ear — ${TRACK_COUNT} recordings across ${ALBUMS.length} albums.`}
              </p>
            </div>
            <Link
              href="/learn-kashmiri/music"
              className="inline-flex items-center gap-2 font-accent text-sm font-semibold text-gold-light hover:text-white"
            >
              All albums <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ALBUMS.map((album) => (
              <Link
                key={album.slug}
                href={`/learn-kashmiri/music#${album.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.06] p-4 transition-colors hover:border-gold/60 hover:bg-white/10"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                  {album.cover ? (
                    <Image src={album.cover} alt={album.title} fill className="object-cover" sizes="80px" />
                  ) : (
                    <AlbumPlaceholder title={album.title} />
                  )}
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">{album.title}</p>
                  <p className="flex items-center gap-1.5 text-sm text-white/85">
                    <Music className="h-3.5 w-3.5" /> {album.tracks.length} tracks
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────── stage panel ─────────────────────────── */

function StagePanel({
  index,
  done,
  setLesson,
  onNext,
}: {
  index: number
  done: Set<string>
  setLesson: (src: string, value: boolean) => void
  onNext: () => void
}) {
  const stage = LEARNING_STAGES[index]
  const lessons = stageLessons(stage)
  const queue = stageQueue(stage, index)
  const total = lessons.reduce((s, l) => s + durationToSeconds(l.duration), 0)
  const n = lessons.filter((l) => done.has(l.src)).length
  const isLast = index === LEARNING_STAGES.length - 1
  const books = stage.books.map((f) => bookByFile.get(f)).filter((b) => b !== undefined)

  return (
    <div className="overflow-hidden rounded-2xl border border-stone/60 bg-white shadow-medium">
      {/* Header */}
      <div className="border-b border-stone/50 bg-ivory p-6 sm:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-chinar px-3 py-1 font-accent text-xs font-semibold text-white">
            Stage {index + 1} of {LEARNING_STAGES.length}
          </span>
          <span className="inline-flex items-center gap-1.5 text-walnut/80">
            <Headphones className="h-4 w-4" /> {lessons.length} lessons
          </span>
          <span className="inline-flex items-center gap-1.5 text-walnut/80">
            <Clock className="h-4 w-4" /> about {formatMinutes(total)}
          </span>
        </div>
        <h3 className="editorial-heading mb-3 text-3xl text-walnut sm:text-4xl">{stage.title}</h3>
        <p className="mb-5 max-w-2xl text-lg text-walnut/90">{stage.goal}</p>
        <div>
          <p className="mb-2 font-accent text-xs font-semibold text-copper">
            In this stage you will learn
          </p>
          <ul className="flex flex-wrap gap-2">
            {stage.outcomes.map((o) => (
              <li key={o} className="inline-flex items-center gap-1.5 rounded-full border border-stone/60 bg-white px-3 py-1.5 text-sm text-walnut">
                <Ear className="h-3.5 w-3.5 text-chinar" /> {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lessons */}
      <ol className="divide-y divide-stone/40">
        {lessons.map((lesson, i) => (
          <LessonRow
            key={lesson.src}
            lesson={lesson}
            number={stage.range[0] + i + 1}
            queue={queue}
            index={i}
            isDone={done.has(lesson.src)}
            onToggle={(v) => setLesson(lesson.src, v)}
          />
        ))}
      </ol>

      {/* Companion books */}
      {books.length > 0 && (
        <div className="border-t border-stone/50 bg-cream p-6 sm:p-8">
          <p className="mb-4 font-accent text-xs font-semibold text-copper">
            Read along — companion {books.length > 1 ? "books" : "book"} for this stage
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {books.map((book) => (
              <div key={book.file} className="flex gap-4 rounded-xl border border-stone/50 bg-white p-4">
                <div className="relative h-24 w-[72px] shrink-0 overflow-hidden rounded-md bg-parchment shadow-sm">
                  <Image src={book.image} alt="" fill className="object-cover" sizes="72px" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <p className="font-display text-base font-bold leading-snug text-walnut">{book.title}</p>
                  {book.author && <p className="mb-2 text-sm text-walnut/80">{book.author}</p>}
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1">
                    <a
                      href={assetUrl(`/publications/${book.file}`)}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-chinar hover:text-chinar-dark"
                    >
                      <BookOpen className="h-4 w-4" /> Read
                    </a>
                    <a
                      href={assetUrl(`/publications/${book.file}`)}
                      download={downloadName(book.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-walnut hover:text-chinar"
                    >
                      <Download className="h-4 w-4" /> Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone/50 p-6 sm:px-8">
        <p className="text-sm text-walnut/80">
          {n === lessons.length
            ? "Stage complete — well done!"
            : `${n} of ${lessons.length} lessons completed in this stage.`}
        </p>
        {!isLast ? (
          <button onClick={onNext} className="btn-heritage">
            Next: {LEARNING_STAGES[index + 1].title}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <a href="#library" className="btn-heritage">
            Keep reading in the library
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

function LessonRow({
  lesson,
  number,
  queue,
  index,
  isDone,
  onToggle,
}: {
  lesson: Lesson
  number: number
  queue: Queue
  index: number
  isDone: boolean
  onToggle: (value: boolean) => void
}) {
  const { play, currentSrc, isPlaying, isLoading } = useAudioPlayer()
  const isCurrent = currentSrc === lesson.src
  const showPause = isCurrent && isPlaying

  return (
    <li className={cn("flex items-center gap-4 px-5 py-3.5 sm:px-8 transition-colors", isCurrent && "bg-chinar-muted")}>
      <span className="w-8 shrink-0 text-right font-accent text-sm font-semibold tabular-nums text-walnut/80">
        {number}
      </span>
      <button
        onClick={() => play(queue, index)}
        aria-label={`${showPause ? "Pause" : "Play"} lesson ${number}: ${lesson.title}`}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
          isCurrent ? "bg-chinar text-white" : "bg-lapis text-white hover:bg-chinar"
        )}
      >
        {isCurrent && isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : showPause ? (
          <Pause className="h-4 w-4" fill="currentColor" />
        ) : (
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        )}
      </button>
      <button onClick={() => play(queue, index)} className="min-w-0 flex-1 text-left">
        <span className={cn("block truncate text-base font-semibold", isCurrent ? "text-chinar" : "text-walnut")}>
          {lesson.title}
        </span>
        <span className="block text-sm text-walnut/80">
          {lesson.part === 1 ? "Part 1" : "Part 2"} · {lesson.duration}
        </span>
      </button>
      <label className="flex shrink-0 cursor-pointer items-center gap-2 text-sm font-medium text-walnut/80 select-none">
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => onToggle(e.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-chinar",
            isDone ? "border-forest bg-forest text-white" : "border-stone-dark bg-white"
          )}
        >
          {isDone && <Check className="h-4 w-4" strokeWidth={3} />}
        </span>
        <span className="hidden sm:inline">{isDone ? "Done" : "Mark done"}</span>
      </label>
    </li>
  )
}
