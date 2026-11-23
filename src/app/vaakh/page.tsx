import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Archive, BookOpen, Download, ExternalLink, Mail } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { VAAKH_ISSUES, assetUrl, downloadName } from "@/lib/media"

export const metadata: Metadata = {
  title: "Vaakh — Literary Journal",
  description: `Vaakh, the journal of Kashmiri language, literature and culture from ${SITE_CONFIG.name}. Read or download all ${VAAKH_ISSUES.length} issues free.`,
}

const issueName = (v: (typeof VAAKH_ISSUES)[number]) => `Issue ${v.label ?? v.issue}`

const ARCHIVE_ORG_VAAKH = "https://archive.org/search?query=subject%3A%22Vaakh-Magazine%22"

export default function VaakhPage() {
  const [latest, ...older] = VAAKH_ISSUES
  return (
    <>
      {/* ── Masthead ── */}
      <section className="relative overflow-hidden bg-lapis text-white">
        <div className="absolute inset-0 lattice lattice-fade" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-36 pb-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
          <div>
            <p className="kicker on-dark mb-2">The literary journal of Kashmir Cultural Trust</p>
            <h1 className="flex items-baseline gap-6 font-display font-semibold leading-none text-white">
              <span className="text-8xl sm:text-9xl">Vaakh</span>
              <span lang="ks-Deva" className="font-devanagari text-6xl text-gold-light sm:text-7xl">वाख</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/90">
              Poetry, stories, essays, criticism and research in and about the Kashmiri
              language — gathered twice a year, and free for anyone to read.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              In Kashmiri, <em className="font-display not-italic text-white">vaakh</em> means
              speech, and it is the name given to the four-line verses of Lal Ded, the
              valley’s first great poet.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={assetUrl(`/publications/${latest.file}`)} target="_blank" rel="noopener" className="btn-heritage !px-7 !py-4">
                <BookOpen className="h-5 w-5" />
                Read the latest issue
              </a>
              <a href="#archive" className="inline-flex items-center rounded-sm border border-white/50 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-lapis">
                Browse all {VAAKH_ISSUES.length} issues
              </a>
              <a href={ARCHIVE_ORG_VAAKH} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-sm border border-white/50 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-lapis">
                <Archive className="h-5 w-5" />
                Vaakh on Archive.org
              </a>
            </div>
          </div>

          {/* Latest issue, displayed like a magazine on a stand */}
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute -inset-6 rotate-3 rounded-sm bg-gold/20" aria-hidden="true" />
            <a href={assetUrl(`/publications/${latest.file}`)} target="_blank" rel="noopener" className="group relative block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-dramatic ring-1 ring-white/30">
                <Image src={latest.cover!} alt={`Vaakh ${issueName(latest)} cover`} fill priority className="object-cover" sizes="400px" />
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl font-semibold text-white">{issueName(latest)}</p>
                  <p className="text-white/85">{latest.period}</p>
                </div>
                <span className="rounded-full bg-chinar px-3 py-1 text-sm font-semibold text-white">Latest</span>
              </div>
            </a>
          </div>
        </div>
        <div className="sozni-rule absolute inset-x-0 bottom-0" aria-hidden="true" />
      </section>

      {/* ── What's inside ── */}
      <section className="bg-snow py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">In every issue</h2>
          <ul className="grid grid-cols-1 border-t-2 border-walnut sm:grid-cols-2 sm:gap-x-10">
            {[
              ["Poetry", "New verse from Kashmiri poets, at home and across the diaspora."],
              ["Prose", "Short stories and personal writing in Kashmiri."],
              ["Essays & criticism", "Writing on Kashmiri literature, its writers and its traditions."],
              ["Language & research", "Studies of Kashmiri grammar, vocabulary, scripts and history."],
            ].map(([title, text]) => (
              <li key={title} className="border-b border-stone py-6">
                <h3 className="font-display text-2xl font-semibold text-walnut">{title}</h3>
                <p className="mt-1 text-lg text-walnut/80">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Digital archive on Archive.org ── */}
      <section className="bg-snow pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-start gap-6 rounded-sm border border-stone bg-white p-8 shadow-soft sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="kicker mb-2">Digital Vaakh</p>
              <h2 className="font-display text-3xl font-semibold text-walnut sm:text-4xl">Read Vaakh on Archive.org</h2>
              <p className="mt-3 max-w-2xl text-lg text-walnut/80">
                Vaakh is also published digitally on the Internet Archive, where you can
                search, read and borrow issues in the Vaakh Magazine collection.
              </p>
            </div>
            <a href={ARCHIVE_ORG_VAAKH} target="_blank" rel="noopener" className="btn-heritage shrink-0 !px-7 !py-4">
              <ExternalLink className="h-5 w-5" />
              Open the digital archive
            </a>
          </div>
        </div>
      </section>

      {/* ── Archive ── */}
      <section id="archive" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12">
            <p className="kicker mb-3">Archive</p>
            <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">Every issue, free to read</h2>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                  {older.map((v) => (
                    <li key={v.issue}>
                      <a href={assetUrl(`/publications/${v.file}`)} target="_blank" rel="noopener" className="group block">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-stone bg-parchment shadow-soft transition-shadow group-hover:shadow-elevated">
                          {v.cover && (
                            <Image src={v.cover} alt={`Vaakh ${issueName(v)} cover`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 22vw" />
                          )}
                        </div>
                        <p className="mt-3 font-display text-xl font-semibold text-walnut group-hover:text-chinar">{issueName(v)}</p>
                      </a>
                      <p className="text-base text-walnut/80">{v.period}</p>
                      <div className="mt-2 flex gap-4 text-base font-semibold">
                        <a href={assetUrl(`/publications/${v.file}`)} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-chinar hover:underline">
                          <BookOpen className="h-4 w-4" /> Read
                        </a>
                        <a href={assetUrl(`/publications/${v.file}`)} download={downloadName(`Vaakh ${issueName(v)}`)} className="inline-flex items-center gap-1.5 text-walnut hover:underline">
                          <Download className="h-4 w-4" /> PDF
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
        </div>
      </section>

      {/* ── Contribute ── */}
      <section className="bg-lapis-deep py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">Write for Vaakh</h2>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              To send poems, stories, essays or research on Kashmiri language and culture,
              or to ask about printed copies, write to the Trust.
            </p>
          </div>
          <ul className="space-y-3">
            {SITE_CONFIG.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}?subject=Vaakh`} className="flex items-center gap-3 rounded-sm border border-white/25 px-5 py-4 text-lg font-semibold text-white transition-colors hover:border-gold hover:bg-white/5">
                  <Mail className="h-5 w-5 text-gold" />
                  {email}
                </a>
              </li>
            ))}
            <li>
              <Link href="/contact" className="inline-block pt-2 font-semibold text-gold-light hover:text-white">
                Or use the contact form
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
