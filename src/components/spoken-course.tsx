"use client"

import { useState } from "react"
import { AudioPlayerProvider, TrackRow, type Queue } from "@/components/audio-player"
import { COURSE_PARTS, LESSONS } from "@/lib/media"
import { cn } from "@/lib/utils"

const PARTS = [1, 2] as const

export function SpokenCourse() {
  const [activePart, setActivePart] = useState<1 | 2>(1)

  const lessons = LESSONS.filter((l) => l.part === activePart)
  const meta = COURSE_PARTS[activePart]

  // The queue is the active part, so "next track" walks through that part.
  const queue: Queue = {
    label: `Spoken Kashmiri · Part ${activePart}`,
    tracks: lessons,
  }

  return (
    <AudioPlayerProvider>
      <div className="mb-8 flex flex-wrap gap-2">
        {PARTS.map((part) => {
          const count = LESSONS.filter((l) => l.part === part).length
          return (
            <button
              key={part}
              onClick={() => setActivePart(part)}
              className={cn(
                "rounded-full px-5 py-2.5 font-accent text-[11px] uppercase tracking-[0.15em] transition-colors",
                activePart === part
                  ? "bg-chinar text-white"
                  : "bg-white text-walnut/60 shadow-sm hover:text-chinar"
              )}
            >
              Part {part}
              <span className="ml-2 opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="mb-8">
        <h3 className="mb-2 font-display text-2xl font-bold text-walnut">
          {meta.title}
        </h3>
        <p className="max-w-2xl text-walnut/60">{meta.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson, i) => (
          <TrackRow
            key={lesson.src}
            track={lesson}
            queue={queue}
            index={i}
            subtitle={`Lesson ${i + 1}`}
          />
        ))}
      </div>
    </AudioPlayerProvider>
  )
}
