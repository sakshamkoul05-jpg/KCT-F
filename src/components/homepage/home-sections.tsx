import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Download } from "lucide-react"
import {
  LEARNING_STAGES,
  LESSONS,
  LESSON_COUNT,
  PUBLICATIONS,
  VAAKH_ISSUES,
  assetUrl,
  downloadName,
} from "@/lib/media"

/* ─────────────────────────────── Hero ───────────────────────────────
   The one memorable moment: the name of the language, Koshur, written in
   the three scripts Kashmiri has been written in. */

const SCRIPTS = [
  { word: "کٲشُر", font: "font-nastaliq", dir: "rtl" as const, lang: "ks-Arab", name: "Perso-Arabic", note: "the official script today" },
  { word: "कॉशुर", font: "font-devanagari", dir: "ltr" as const, lang: "ks-Deva", name: "Devanagari", note: "used widely across the diaspora" },
  { word: "𑆑𑆯𑆶𑆫", font: "font-sharada", dir: "ltr" as const, lang: "ks-Shrd", name: "Sharada", note: "the script of Kashmir’s manuscripts" },
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-lapis text-white">
      <div className="absolute inset-0 lattice lattice-fade" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pt-36 pb-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20 lg:pt-44 lg:pb-28">
        <div className="hero-animate" style={{ animationDelay: "0.05s" }}>
          <h1 className="font-display text-[3.4rem] font-semibold leading-[0.95] text-white sm:text-7xl xl:text-[6.2rem]">
            Kashmir
            <br />
            Cultural Trust
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/90">
            Keeping the Kashmiri language, its literature and its culture alive —
            for Kashmiris everywhere, and for anyone who wants to know them.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/learn-kashmiri" className="btn-heritage !px-7 !py-4">
              Start learning Kashmiri
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-sm border border-white/50 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-lapis"
            >
              Read our story
            </Link>
          </div>
          <p className="mt-12 text-base text-white/80">
            A registered charitable trust in Jammu and New Delhi, working since 2000.
          </p>
        </div>

        <figure className="border-t border-gold/50">
          {SCRIPTS.map((s, i) => (
            <div
              key={s.name}
              className="hero-animate flex items-center justify-between gap-6 border-b border-gold/50 py-5"
              style={{ animationDelay: `${0.35 + i * 0.35}s` }}
            >
              <span
                lang={s.lang}
                dir={s.dir}
                className={`${s.font} text-5xl leading-[1.6] text-gold-light sm:text-6xl`}
              >
                {s.word}
              </span>
              <span className="text-right">
                <span className="block font-display text-lg font-semibold text-white">{s.name}</span>
                <span className="block text-sm text-white/80">{s.note}</span>
              </span>
            </div>
          ))}
          <figcaption className="hero-animate pt-4 text-sm text-white/80" style={{ animationDelay: "1.4s" }}>
            <em className="font-display not-italic text-white">Koshur</em>, the Kashmiri language, in the three scripts it has been written in.
          </figcaption>
        </figure>
      </div>
      <div className="sozni-rule absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  )
}

/* ─────────────────────────── What we do ─────────────────────────── */

const WORK = [
  {
    title: "Teaching the language",
    text: `A free spoken course of ${LESSON_COUNT} audio lessons, with primers, readers and a grammar to read along.`,
    href: "/learn-kashmiri",
    link: "Learn Kashmiri",
  },
  {
    title: "Publishing",
    text: "Over forty-five books on Kashmiri language and culture, and Vaakh, the Trust’s literary journal.",
    href: "/learn-kashmiri#library",
    link: "Browse the library",
  },
  {
    title: "Bringing people together",
    text: "Samanbal literary meets, seminars and international conferences on the Kashmiri language.",
    href: "/events",
    link: "See our events",
  },
  {
    title: "Recording heritage",
    text: "Documenting Kashmir’s history, saints, poets and crafts for the generations growing up away from the valley.",
    href: "/heritage",
    link: "Explore heritage",
  },
]

export function HomeWork() {
  return (
    <section className="bg-snow py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="kicker mb-4">Our purpose</p>
          <p className="font-display text-3xl font-medium leading-[1.25] text-walnut sm:text-[2.6rem]">
            Kashmir Cultural Trust is a charitable trust created to work for the promotion,
            preservation and dissemination of National Cultural Heritage and Kashmiri language,
            literature and culture among the Kashmiri diaspora and others globally.
          </p>
        </div>
        <ul className="border-t-2 border-walnut">
          {WORK.map((w) => (
            <li key={w.title} className="border-b border-stone py-7">
              <h3 className="font-display text-2xl font-semibold text-walnut">{w.title}</h3>
              <p className="mt-2 max-w-lg text-lg text-walnut/80">{w.text}</p>
              <Link
                href={w.href}
                className="mt-3 inline-flex items-center gap-1 font-semibold text-chinar underline-offset-4 hover:underline"
              >
                {w.link}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ─────────────────────────── Learning path ─────────────────────────── */

export function HomeLearn() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="kicker mb-4">Learn Kashmiri</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-walnut sm:text-5xl">
              From your first sounds to real conversations, in five stages
            </h2>
          </div>
          <Link href="/learn-kashmiri" className="btn-heritage self-start lg:self-end">
            Start lesson 1
          </Link>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-5">
          {LEARNING_STAGES.map((stage, i) => {
            const lessons = LESSONS.slice(stage.range[0], stage.range[1])
            return (
              <li key={stage.id} className="flex flex-col bg-white p-6">
                <span className="font-display text-5xl font-semibold leading-none text-chinar">{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-walnut">{stage.title}</h3>
                <p className="mt-2 flex-1 text-base text-walnut/80">{stage.goal}</p>
                <p className="mt-5 text-sm font-semibold text-walnut">{lessons.length} lessons</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/* ─────────────────────────── Vaakh shelf ─────────────────────────── */

export function HomeVaakh() {
  const [latest, ...rest] = VAAKH_ISSUES
  return (
    <section className="relative overflow-hidden bg-lapis-deep py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[380px_1fr] lg:items-center">
        <div>
          <p className="kicker on-dark mb-4">Literary journal</p>
          <h2 className="font-display text-5xl font-semibold text-white">Vaakh</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            The Trust’s journal of Kashmiri language, literature and culture, carrying
            poetry, prose, criticism and research. Every issue is free to read.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={assetUrl(`/publications/${latest.file}`)}
              target="_blank"
              rel="noopener"
              className="btn-heritage"
            >
              <BookOpen className="h-4 w-4" />
              Read issue {latest.issue}
            </a>
            <Link
              href="/learn-kashmiri#vaakh"
              className="inline-flex items-center rounded-sm border border-white/50 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-lapis"
            >
              All {VAAKH_ISSUES.length} issues
            </Link>
          </div>
        </div>

        <div className="flex items-end gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {[latest, ...rest.slice(0, 5)].map((v, i) => (
            <a
              key={v.issue}
              href={assetUrl(`/publications/${v.file}`)}
              target="_blank"
              rel="noopener"
              className="group shrink-0"
              style={{ width: i === 0 ? 210 : 140 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-dramatic ring-1 ring-white/20">
                {v.cover && (
                  <Image
                    src={v.cover}
                    alt={`Vaakh issue ${v.issue}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes={i === 0 ? "210px" : "140px"}
                  />
                )}
              </div>
              <p className="mt-3 text-sm text-white/90">
                <span className="font-semibold text-white">Issue {v.issue}</span>
                <br />
                {v.period}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Books ─────────────────────────── */

const FEATURED = ["A-Course-In-Kashmiri-Language.pdf", "ModernKashmiriGrammar.pdf", "koshur-cultural-reader.pdf", "DictionaryProverbs.pdf"]

export function HomeBooks() {
  const books = FEATURED.map((f) => PUBLICATIONS.find((p) => p.file === f)!).filter(Boolean)
  return (
    <section className="bg-snow py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker mb-4">From the library</p>
            <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">Books to read and download</h2>
          </div>
          <Link
            href="/learn-kashmiri#library"
            className="inline-flex items-center gap-1 text-lg font-semibold text-chinar underline-offset-4 hover:underline"
          >
            All {PUBLICATIONS.length} books
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.file}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-stone bg-parchment">
                <Image src={b.image} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-walnut">{b.title}</h3>
              {b.author && <p className="mt-1 text-base text-walnut/80">{b.author}</p>}
              <div className="mt-3 flex gap-5">
                <a
                  href={assetUrl(`/publications/${b.file}`)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-semibold text-chinar hover:underline"
                >
                  <BookOpen className="h-4 w-4" /> Read
                </a>
                <a
                  href={assetUrl(`/publications/${b.file}`)}
                  download={downloadName(b.title)}
                  className="inline-flex items-center gap-1.5 font-semibold text-walnut hover:underline"
                >
                  <Download className="h-4 w-4" /> PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Events ─────────────────────────── */

const EVENTS = [
  { year: "2024", date: "9–10 January", title: "Samanbal 2024", text: "A literary and cultural meet celebrating Kashmiri art, music, theatre, language and literature.", place: "Jammu" },
  { year: "2022", date: "25–26 March", title: "Samanbal 2022", text: "Scholars, writers and artists from across the country, gathered for two days of Kashmiri literature.", place: "Jammu" },
  { year: "2019", date: "6–7 January", title: "International Conference on the Kashmiri Language", text: "Organised with CIIL and Sahitya Akademi on the state and future of Kashmiri.", place: "K.L. Saigal Hall, Jammu" },
]

export function HomeEvents() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker mb-4">Gatherings</p>
            <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">Samanbal and conferences</h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-1 text-lg font-semibold text-chinar underline-offset-4 hover:underline">
            All events <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <ol className="border-t-2 border-walnut">
          {EVENTS.map((e) => (
            <li key={e.title} className="grid grid-cols-1 gap-2 border-b border-stone py-8 md:grid-cols-[160px_1fr_220px] md:gap-8">
              <p className="font-display text-4xl font-semibold leading-none text-chinar">{e.year}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-walnut">{e.title}</h3>
                <p className="mt-2 max-w-2xl text-lg text-walnut/80">{e.text}</p>
              </div>
              <p className="text-base text-walnut md:text-right">
                {e.date}
                <br />
                <span className="text-walnut/80">{e.place}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ─────────────────────────── Photos ─────────────────────────── */

const PHOTOS = [
  { src: "/images/gallery/g1.jpg", alt: "Guests and speakers at a Trust gathering" },
  { src: "/images/gallery/a1.jpg", alt: "A session at Samanbal" },
  { src: "/images/gallery/g5.jpg", alt: "Members of the community at a Trust event" },
  { src: "/images/gallery/k1.jpg", alt: "A Trust programme in progress" },
]

export function HomePhotos() {
  return (
    <section className="bg-snow py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold text-walnut sm:text-5xl">From our gatherings</h2>
          <Link href="/gallery" className="inline-flex items-center gap-1 text-lg font-semibold text-chinar underline-offset-4 hover:underline">
            Open the gallery <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className={`relative overflow-hidden rounded-sm bg-parchment ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"} ${i === 3 ? "md:col-span-2 md:aspect-[8/3]" : ""}`}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes={i === 0 ? "50vw" : "25vw"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Support ─────────────────────────── */

export function HomeSupport() {
  return (
    <section className="bg-chinar py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">Help keep Kashmiri alive</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Donations pay for printing books, recording lessons and holding Samanbal. The Trust is a
            registered NGO and gifts qualify for tax benefits under section 80G.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/donate" className="inline-flex items-center rounded-sm bg-white px-7 py-4 font-semibold text-chinar transition-colors hover:bg-gold-light hover:text-walnut">
            Donate
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-sm border border-white/60 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10">
            Become a life member
          </Link>
        </div>
      </div>
    </section>
  )
}
