import { Metadata } from "next"
import { Headphones, BookOpen, Music, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Language Academy",
  description: `Learn Kashmiri through our comprehensive language learning resources — 48 audio lessons, 14 publications, and 21 music tracks. ${SITE_CONFIG.name}.`,
}

const lessons = [
  { part: 1, lessons: [
    { title: "Introduction", duration: "2:15" },
    { title: "Vowels", duration: "4:32" },
    { title: "Consonants", duration: "5:10" },
    { title: "Programme 1", duration: "8:45" },
    { title: "Programme 2", duration: "9:12" },
    { title: "Programme 3", duration: "7:33" },
  ]},
  { part: 2, lessons: [
    { title: "Demonstrative Pronouns", duration: "6:20" },
    { title: "Interrogative Pronoun", duration: "5:45" },
    { title: "Possessive Pronoun", duration: "6:10" },
    { title: "Personal Pronoun", duration: "5:55" },
    { title: "Adjectives", duration: "7:20" },
    { title: "Main Verbs", duration: "8:15" },
  ]},
]

const publications = [
  { title: "Primer", category: "Language Learning", file: "primer.pdf" },
  { title: "Reader", category: "Language Learning", file: "reader.pdf" },
  { title: "Dictionary of Proverbs", category: "Language Learning", file: "DictionaryProverbs.pdf" },
  { title: "Modern Kashmiri Grammar", category: "Language Learning", file: "ModernKashmiriGrammar.pdf" },
  { title: "Spoken Kashmiri", category: "Language Learning", file: "SpokenKashmiri.pdf" },
  { title: "A Course in Kashmiri Language", category: "Language Learning", file: "A-Course-In-Kashmiri-Language.pdf" },
  { title: "Koshur Cultural Reader", category: "Cultural Studies", file: "kashur-cultural-reader.pdf" },
  { title: "Leela Sagar", category: "Cultural Studies", file: "Leela-Sagar-new.pdf" },
]

export default function LanguageAcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-chinar to-chinar-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Learn Kashmiri
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Language Academy
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            A comprehensive language learning platform with 48 audio lessons,
            14 publications, and 21 music tracks to help you connect with the
            Kashmiri language.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ivory border-b border-stone/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Headphones className="h-8 w-8 text-chinar mx-auto mb-2" />
              <p className="font-display text-3xl font-bold text-walnut">48</p>
              <p className="text-sm text-walnut/60">Audio Lessons</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-chinar mx-auto mb-2" />
              <p className="font-display text-3xl font-bold text-walnut">14</p>
              <p className="text-sm text-walnut/60">Publications</p>
            </div>
            <div className="text-center">
              <Music className="h-8 w-8 text-chinar mx-auto mb-2" />
              <p className="font-display text-3xl font-bold text-walnut">21</p>
              <p className="text-sm text-walnut/60">Music Tracks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Course */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Spoken Kashmiri Course
            </h2>
            <p className="text-lg text-walnut/70">
              A comprehensive audio course covering vowels, consonants, grammar,
              and everyday conversations.
            </p>
          </div>

          {lessons.map((part) => (
            <div key={part.part} className="mb-12">
              <h3 className="font-display text-2xl font-bold text-walnut mb-6">
                Part {part.part}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {part.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chinar/10 text-chinar group-hover:bg-chinar group-hover:text-white transition-colors">
                      <Play className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-walnut">{lesson.title}</p>
                      <p className="text-sm text-walnut/50">{lesson.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Publications Library
            </h2>
            <p className="text-lg text-walnut/70">
              Download our language learning materials and cultural publications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-accent text-xs text-copper uppercase tracking-wider mb-2">
                  {pub.category}
                </p>
                <h3 className="font-display text-lg font-bold text-walnut mb-4">
                  {pub.title}
                </h3>
                <Link
                  href={`/pdfs/publications/${pub.file}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-chinar hover:text-chinar-dark font-medium"
                >
                  Download PDF
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Albums */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Music Albums
            </h2>
            <p className="text-lg text-walnut/70">
              Explore our collection of Kashmiri music albums.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((album) => (
              <div
                key={album}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-chinar/20 to-saffron/20 flex items-center justify-center">
                  <Music className="h-16 w-16 text-chinar/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-walnut mb-2">
                    Album {album}
                  </h3>
                  <p className="text-sm text-walnut/60 mb-4">
                    {album === 1 ? "6" : album === 2 ? "7" : "8"} tracks
                  </p>
                  <Link
                    href="/language-academy/music"
                    className="inline-flex items-center gap-2 text-sm text-chinar hover:text-chinar-dark font-medium"
                  >
                    View Tracks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
