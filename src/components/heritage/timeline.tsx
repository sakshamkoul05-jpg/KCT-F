"use client"

import { useEffect, useRef, useState } from "react"
import { ERAS } from "@/lib/heritage"
import { cn } from "@/lib/utils"
import { SCENES } from "./scenes"

const N = ERAS.length

/** Opacity for era `i` at timeline position `t` (0…N), with a short crossfade at each boundary. */
function eraOpacity(i: number, t: number): number {
  if (i === 0 && t < 0.5) return 1
  if (i === N - 1 && t > N - 0.5) return 1
  const d = Math.abs(t - (i + 0.5))
  return Math.min(1, Math.max(0, 1 - Math.max(0, d - 0.42) / 0.16))
}

/**
 * A scroll-driven journey through Kashmir's history. The section is N
 * screens tall; a full-screen stage sticks in place while the visitor scrolls,
 * and each era's illustration plays out as they move through it.
 */
export function HeritageTimeline() {
  const outer = useRef<HTMLDivElement>(null)
  const scenes = useRef<(HTMLDivElement | null)[]>([])
  const texts = useRef<(HTMLDivElement | null)[]>([])
  const bar = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    let last = -1
    const update = () => {
      raf = 0
      const el = outer.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const t = Math.min(Math.max(-r.top / total, 0), 1) * N
      for (let i = 0; i < N; i++) {
        const p = Math.min(Math.max(t - i, 0), 1)
        const o = eraOpacity(i, t)
        const s = scenes.current[i]
        if (s) {
          s.style.setProperty("--p", p.toFixed(4))
          s.style.opacity = o.toFixed(3)
          s.style.visibility = o > 0 ? "visible" : "hidden"
        }
        const tx = texts.current[i]
        if (tx) {
          tx.style.opacity = o.toFixed(3)
          tx.style.transform = `translateY(${((1 - o) * (t < i + 0.5 ? 24 : -24)).toFixed(1)}px)`
        }
      }
      if (bar.current) bar.current.style.transform = `scaleY(${(t / N).toFixed(4)})`
      const idx = Math.min(N - 1, Math.floor(t))
      if (idx !== last) {
        last = idx
        setActive(idx)
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const jumpTo = (i: number) => {
    const el = outer.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const total = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + total * ((i + 0.5) / N), behavior: "smooth" })
  }

  return (
    <section id="timeline" aria-label="Timeline of Kashmir's history">
      <div ref={outer} className="relative" style={{ height: `${N * 110}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-lapis-deep">
          {/* scenes */}
          {SCENES.map((Scene, i) => (
            <div
              key={ERAS[i].id}
              ref={(el) => {
                scenes.current[i] = el
              }}
              className="absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0, ["--p" as string]: 0 }}
            >
              <Scene />
            </div>
          ))}

          {/* legibility wash behind the text */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060A24]/90 via-[#060A24]/45 to-transparent md:bg-gradient-to-r md:from-[#060A24]/85 md:via-[#060A24]/40 md:to-transparent" />

          {/* heading */}
          <div className="absolute inset-x-0 top-24 mx-auto hidden max-w-7xl px-6 sm:px-8 md:block">
            <p className="kicker on-dark">Through the ages</p>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Five thousand years of Kashmir</h2>
          </div>

          {/* era text */}
          <div className="absolute inset-x-0 top-28 mx-auto max-w-7xl px-6 sm:px-8 md:top-auto md:bottom-24">
            <div className="relative h-[300px] max-w-xl sm:h-[320px]">
              {ERAS.map((era, i) => (
                <div
                  key={era.id}
                  ref={(el) => {
                    texts.current[i] = el
                  }}
                  className="absolute inset-x-0 top-0 md:top-auto md:bottom-0"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                  aria-hidden={i !== active}
                >
                  <p className="font-display text-4xl font-semibold leading-none text-gold-light sm:text-6xl">{era.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-4xl">{era.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/90 sm:mt-4 sm:text-lg">{era.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* era rail */}
          <nav aria-label="Jump to an era" className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block xl:right-12">
            <div className="relative pl-6">
              <div className="absolute left-[5px] top-1 bottom-1 w-px bg-white/25" />
              <div ref={bar} className="absolute left-[5px] top-1 bottom-1 w-px origin-top bg-gold" style={{ transform: "scaleY(0)" }} />
              <ol className="space-y-5">
                {ERAS.map((era, i) => (
                  <li key={era.id} className="relative">
                    <button onClick={() => jumpTo(i)} className="group flex items-center gap-3 text-left">
                      <span
                        className={cn(
                          "absolute -left-6 top-1.5 h-[11px] w-[11px] rounded-full border-2 transition-colors",
                          i <= active ? "border-gold bg-gold" : "border-white/60 bg-lapis-deep"
                        )}
                      />
                      <span className={cn("text-sm transition-colors", i === active ? "font-semibold text-white" : "text-white/75 group-hover:text-white")}>
                        <span className="block font-display">{era.period}</span>
                        <span className="block">{era.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* mobile progress */}
          <div className="absolute inset-x-6 bottom-6 flex gap-1.5 lg:hidden">
            {ERAS.map((era, i) => (
              <span key={era.id} className={cn("h-1 flex-1 rounded-full", i <= active ? "bg-gold" : "bg-white/25")} />
            ))}
          </div>
        </div>
      </div>
      {/* screen readers and no-JS get the plain list */}
      <ol className="sr-only">
        {ERAS.map((era) => (
          <li key={era.id}>
            {era.period}: {era.title}. {era.text}
          </li>
        ))}
      </ol>
    </section>
  )
}
