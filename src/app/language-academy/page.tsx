import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Headphones, BookOpen, Music, ArrowRight, Download } from "lucide-react"
import { AlbumPlaceholder } from "@/components/album-placeholder"
import { SpokenCourse } from "@/components/spoken-course"
import { SITE_CONFIG } from "@/lib/constants"
import {
  ALBUMS,
  LESSON_COUNT,
  PUBLICATIONS,
  PUBLICATION_COUNT,
  TRACK_COUNT,
  assetUrl,
  downloadName,
} from "@/lib/media"

export const metadata: Metadata = {
  title: "Language Academy",
  description: `Learn Kashmiri through our language learning resources — ${LESSON_COUNT} audio lessons, ${PUBLICATION_COUNT} publications, and ${TRACK_COUNT} music tracks. ${SITE_CONFIG.name}.`,
}

const stats = [
  { icon: Headphones, value: LESSON_COUNT, label: "Audio Lessons" },
  { icon: BookOpen, value: PUBLICATION_COUNT, label: "Publications" },
  { icon: Music, value: TRACK_COUNT, label: "Music Tracks" },
]

export default function LanguageAcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chinar to-chinar-dark pb-20 pt-32 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero/slider2-new.jpg"
            alt=""
            fill
            className="object-cover"
            quality={60}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-accent text-sm uppercase tracking-[0.2em] text-saffron">
            Learn Kashmiri
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold sm:text-6xl">
            Language Academy
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            {`A comprehensive language learning platform with ${LESSON_COUNT} audio lessons, ${PUBLICATION_COUNT} publications, and ${TRACK_COUNT} music tracks to help you connect with the Kashmiri language.`}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-stone/20 bg-ivory py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-8 w-8 text-chinar" />
                <p className="font-display text-3xl font-bold text-walnut">
                  {stat.value}
                </p>
                <p className="text-sm text-walnut/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Course */}
      <section className="bg-snow py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 font-display text-4xl font-bold text-walnut">
              Spoken Kashmiri Course
            </h2>
            <p className="max-w-2xl text-lg text-walnut/70">
              {`A complete audio course covering vowels, consonants, grammar and everyday conversation — ${LESSON_COUNT} recordings across two parts.`}
            </p>
          </div>

          <SpokenCourse />
        </div>
      </section>

      {/* Publications */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 font-display text-4xl font-bold text-walnut">
              Publications Library
            </h2>
            <p className="text-lg text-walnut/70">
              Download our language learning materials and cultural publications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.file}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-40 bg-parchment">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 font-accent text-xs uppercase tracking-wider text-copper">
                    {pub.category}
                  </p>
                  <h3 className="mb-4 font-display text-lg font-bold text-walnut">
                    {pub.title}
                  </h3>
                  <a
                    href={assetUrl(`/publications/${pub.file}`)}
                    download={downloadName(pub.title)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-chinar hover:text-chinar-dark"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Albums */}
      <section className="bg-snow py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 font-display text-4xl font-bold text-walnut">
              Music Albums
            </h2>
            <p className="text-lg text-walnut/70">
              {`Explore our collection of Kashmiri music — ${TRACK_COUNT} tracks across ${ALBUMS.length} albums.`}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ALBUMS.map((album) => (
              <Link
                key={album.slug}
                href={`/language-academy/music#${album.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-square bg-parchment">
                  {album.cover ? (
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <AlbumPlaceholder title={album.title} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-walnut">
                    {album.title}
                  </h3>
                  <p className="mb-4 text-sm text-walnut/60">
                    {album.tracks.length} tracks
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-chinar group-hover:text-chinar-dark">
                    View Tracks
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
