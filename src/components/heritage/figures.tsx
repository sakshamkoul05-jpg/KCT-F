"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { FIGURES, type Figure } from "@/lib/heritage"

/** Key figures: a ruled list; choosing one opens their story in a dialog. */
export function KeyFigures() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [figure, setFigure] = useState<Figure | null>(null)

  useEffect(() => {
    if (figure) dialog.current?.showModal()
  }, [figure])

  return (
    <section id="figures" className="bg-snow py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="kicker mb-4">Pioneers</p>
          <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">Key figures</h2>
          <p className="mt-4 text-lg text-walnut/80">
            The saints, poets and thinkers who shaped Kashmir’s culture. Choose a name to read their story.
          </p>
        </div>

        <ul className="grid grid-cols-1 border-t-2 border-walnut md:grid-cols-2 md:gap-x-12">
          {FIGURES.map((f) => (
            <li key={f.id} className="border-b border-stone">
              <button
                onClick={() => setFigure(f)}
                aria-haspopup="dialog"
                className="group flex w-full items-start justify-between gap-6 py-7 text-left"
              >
                <span>
                  <span className="block text-base font-semibold text-chinar">{f.era}</span>
                  <span className="mt-1 block font-display text-3xl font-semibold text-walnut transition-colors group-hover:text-chinar">
                    {f.name}
                  </span>
                  <span className="mt-2 block max-w-md text-lg text-walnut/80">{f.summary}</span>
                </span>
                <span className="mt-8 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-walnut text-walnut transition-colors group-hover:border-chinar group-hover:bg-chinar group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setFigure(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close()
        }}
        aria-labelledby="figure-name"
        className="m-auto w-[min(720px,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-sm bg-white p-0 text-walnut shadow-dramatic backdrop:bg-[#060A24]/75 backdrop:backdrop-blur-sm"
      >
        {figure && (
          <article>
            <header className="relative overflow-hidden bg-lapis px-8 pt-10 pb-8 text-white sm:px-10">
              <div className="absolute inset-0 lattice lattice-fade" aria-hidden="true" />
              <div className="relative">
                <p className="kicker on-dark">{figure.role}</p>
                <h2 id="figure-name" className="mt-1 font-display text-4xl font-semibold text-white sm:text-5xl">
                  {figure.name}
                </h2>
                <p className="mt-2 text-lg text-white/90">
                  {figure.era}
                  {figure.also && <> — also known as {figure.also}</>}
                </p>
              </div>
              <button
                onClick={() => dialog.current?.close()}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="sozni-rule absolute inset-x-0 bottom-0" aria-hidden="true" />
            </header>
            <div className="space-y-5 px-8 py-8 text-lg leading-relaxed sm:px-10">
              {figure.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="border-l-4 border-gold bg-ivory px-5 py-4 font-display text-xl leading-snug">{figure.legacy}</p>
            </div>
          </article>
        )}
      </dialog>
    </section>
  )
}
