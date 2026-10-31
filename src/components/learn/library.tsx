"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { BookOpen, Download, Search } from "lucide-react"
import {
  LIBRARY_CATEGORIES,
  PUBLICATIONS,
  VAAKH_ISSUES,
  assetUrl,
  downloadName,
} from "@/lib/media"
import { cn } from "@/lib/utils"

type CategoryId = (typeof LIBRARY_CATEGORIES)[number]["id"]

export function Library() {
  const [category, setCategory] = useState<CategoryId>("all")
  const [query, setQuery] = useState("")

  const books = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PUBLICATIONS.filter(
      (b) =>
        (category === "all" || b.category === category) &&
        (!q || `${b.title} ${b.author ?? ""}`.toLowerCase().includes(q))
    )
  }, [category, query])

  const countFor = (id: CategoryId) =>
    id === "all" ? PUBLICATIONS.length : PUBLICATIONS.filter((b) => b.category === id).length

  return (
    <>
      {/* ── Books ── */}
      <section id="library" className="scroll-mt-24 border-t border-stone/50 bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-8">
            <p className="mb-2 font-accent text-sm font-semibold uppercase tracking-[0.2em] text-copper">
              Library
            </p>
            <h2 className="editorial-heading text-4xl text-walnut sm:text-5xl">Books &amp; Publications</h2>
            <p className="mt-3 max-w-2xl text-lg text-walnut/90">
              Primers, grammars, readers and research published by the Trust — free to read online or download.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter books">
              {LIBRARY_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={category === c.id}
                  onClick={() => setCategory(c.id)}
                  className={cn(
                    "rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors",
                    category === c.id
                      ? "border-walnut bg-walnut text-white"
                      : "border-stone bg-white text-walnut hover:border-walnut"
                  )}
                >
                  {c.label}
                  <span className={cn("ml-2 tabular-nums", category === c.id ? "text-[#F7C96B]" : "text-walnut/80")}>
                    {countFor(c.id)}
                  </span>
                </button>
              ))}
            </div>
            <label className="relative block w-full lg:w-80">
              <span className="sr-only">Search books</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-walnut/80" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or author"
                className="w-full rounded-full border-2 border-stone bg-white py-2.5 pl-10 pr-4 text-sm text-walnut placeholder:text-walnut/60 focus:border-walnut focus:outline-none"
              />
            </label>
          </div>

          {books.length === 0 ? (
            <p className="rounded-xl bg-white p-10 text-center text-walnut/80">No books match your search.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {books.map((book) => (
                <article
                  key={book.file}
                  className="group flex flex-col overflow-hidden rounded-xl border border-stone/60 bg-white shadow-soft transition-shadow hover:shadow-elevated"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
                    <Image
                      src={book.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-walnut shadow-sm">
                      {LIBRARY_CATEGORIES.find((c) => c.id === book.category)?.label ?? book.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold leading-snug text-walnut">{book.title}</h3>
                    {book.author && <p className="mt-1 text-sm text-walnut/80">{book.author}</p>}
                    <div className="mt-auto flex gap-2 pt-5">
                      <a
                        href={assetUrl(`/publications/${book.file}`)}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-chinar px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-chinar-dark"
                      >
                        <BookOpen className="h-4 w-4" /> Read
                      </a>
                      <a
                        href={assetUrl(`/publications/${book.file}`)}
                        download={downloadName(book.title)}
                        aria-label={`Download ${book.title}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md border-2 border-stone px-3 py-2 text-sm font-semibold text-walnut transition-colors hover:border-walnut"
                      >
                        <Download className="h-4 w-4" /> PDF
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Vaakh journal ── */}
      <section id="vaakh" className="scroll-mt-24 bg-snow py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-2 font-accent text-sm font-semibold uppercase tracking-[0.2em] text-copper">
                The Trust&apos;s journal
              </p>
              <h2 className="editorial-heading text-4xl text-walnut sm:text-5xl">Vaakh Literary Journal</h2>
              <p className="mt-3 max-w-2xl text-lg text-walnut/90">
                A journal of Kashmiri language, literature and culture — {VAAKH_ISSUES.length} issues to read and download.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {VAAKH_ISSUES.map((v) => (
              <a
                key={v.issue}
                href={assetUrl(`/publications/${v.file}`)}
                target="_blank"
                rel="noopener"
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-stone/60 bg-parchment shadow-soft transition-shadow group-hover:shadow-elevated">
                  {v.cover && (
                    <Image
                      src={v.cover}
                      alt={`Vaakh issue ${v.issue} cover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  )}
                  {v.current && (
                    <span className="absolute left-2 top-2 rounded-full bg-chinar px-2.5 py-1 text-xs font-bold text-white">
                      Latest
                    </span>
                  )}
                </div>
                <p className="mt-3 font-display text-lg font-bold text-walnut group-hover:text-chinar">
                  Issue {v.issue}
                </p>
                <p className="flex items-center justify-between text-sm text-walnut/80">
                  {v.period}
                  <Download className="h-4 w-4 text-chinar" aria-hidden />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
