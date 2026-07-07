import { Metadata } from "next"
import Image from "next/image"
import { Headphones, BookOpen, Music, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Language Academy",
  description: `Learn Kashmiri through our comprehensive language learning resources — 48 audio lessons, 14 publications, and 21 music tracks. ${SITE_CONFIG.name}.`,
}

const allLessons = [
  { part: 1, title: "Introduction & Phonology", lessons: [
    { title: "Introduction to Kashmiri", duration: "2:15" },
    { title: "Vowels", duration: "4:32" },
    { title: "Consonants", duration: "5:10" },
    { title: "Programme 1", duration: "8:45" },
    { title: "Programme 2", duration: "9:12" },
    { title: "Programme 3", duration: "7:33" },
    { title: "Programme 4", duration: "8:20" },
    { title: "Programme 5", duration: "7:55" },
  ]},
  { part: 2, title: "Grammar Fundamentals", lessons: [
    { title: "Demonstrative Pronouns", duration: "6:20" },
    { title: "Interrogative Pronoun", duration: "5:45" },
    { title: "Possessive Pronoun", duration: "6:10" },
    { title: "Personal Pronoun", duration: "5:55" },
    { title: "Adjectives", duration: "7:20" },
    { title: "Main Verbs", duration: "8:15" },
    { title: "Auxiliary Verbs", duration: "6:40" },
    { title: "Verb Tenses", duration: "7:50" },
  ]},
  { part: 3, title: "Sentence Structure", lessons: [
    { title: "Simple Sentences", duration: "6:30" },
    { title: "Compound Sentences", duration: "7:15" },
    { title: "Complex Sentences", duration: "8:00" },
    { title: "Questions & Negation", duration: "5:45" },
    { title: "Postpositions", duration: "6:20" },
    { title: "Conjunctions", duration: "5:55" },
    { title: "Numbers & Counting", duration: "7:10" },
    { title: "Time Expressions", duration: "6:45" },
  ]},
  { part: 4, title: "Everyday Conversations", lessons: [
    { title: "Greetings & Politeness", duration: "5:30" },
    { title: "Family & Relationships", duration: "6:40" },
    { title: "Food & Dining", duration: "7:20" },
    { title: "Shopping & Numbers", duration: "6:15" },
    { title: "Travel & Directions", duration: "8:00" },
    { title: "Health & Body", duration: "6:55" },
    { title: "Weather & Seasons", duration: "5:45" },
    { title: "Daily Routines", duration: "7:30" },
  ]},
  { part: 5, title: "Cultural Context", lessons: [
    { title: "Festivals & Celebrations", duration: "7:15" },
    { title: "Traditional Occupations", duration: "6:40" },
    { title: "Arts & Crafts", duration: "8:10" },
    { title: "Music & Dance", duration: "6:55" },
    { title: "Literature & Poetry", duration: "7:45" },
    { title: "History & Heritage", duration: "8:30" },
    { title: "Modern Kashmiri", duration: "6:20" },
    { title: "Idioms & Expressions", duration: "7:00" },
  ]},
  { part: 6, title: "Advanced Topics", lessons: [
    { title: "Formal Writing", duration: "7:30" },
    { title: "News & Media", duration: "8:15" },
    { title: "Business Kashmiri", duration: "6:45" },
    { title: "Academic Kashmiri", duration: "7:55" },
    { title: "Debate & Discussion", duration: "8:00" },
    { title: "Storytelling", duration: "6:30" },
    { title: "Final Review", duration: "9:00" },
    { title: "Course Summary", duration: "5:20" },
  ]},
]

const publications = [
  { title: "Primer in Kashmiri", category: "Language Learning", file: "primer.pdf", image: "/images/publications/primer.jpg" },
  { title: "Kashmiri Reader", category: "Language Learning", file: "reader.pdf", image: "/images/publications/combined.jpg" },
  { title: "Dictionary of Proverbs", category: "Language Learning", file: "DictionaryProverbs.pdf", image: "/images/publications/lila.jpg" },
  { title: "Modern Kashmiri Grammar", category: "Language Learning", file: "ModernKashmiriGrammar.pdf", image: "/images/publications/gaashi.jpg" },
  { title: "Spoken Kashmiri", category: "Language Learning", file: "SpokenKashmiri.pdf", image: "/images/publications/combined.jpg" },
  { title: "A Course in Kashmiri Language", category: "Language Learning", file: "A-Course-In-Kashmiri-Language.pdf", image: "/images/publications/kashmiri-hindi.jpg" },
  { title: "Koshur Cultural Reader", category: "Cultural Studies", file: "kashur-cultural-reader.pdf", image: "/images/publications/harmony1.jpg" },
  { title: "Leela Sagar", category: "Cultural Studies", file: "Leela-Sagar-new.pdf", image: "/images/publications/liila.jpg" },
  { title: "Kashmiri-Hindi Primer", category: "Bilingual", file: "kashmiri-hindi.pdf", image: "/images/publications/kashmiri-hindi.jpg" },
  { title: "Urdu-Kashmiri Reader", category: "Bilingual", file: "urdu-reader.pdf", image: "/images/publications/urdu-reader.jpg" },
  { title: "Kashmiri Swayamshikshak", category: "Self-Learning", file: "kashmiri-svayamshikshak.pdf", image: "/images/publications/sawamshikshak.jpg" },
  { title: "Harmony of Cultures", category: "Cultural Studies", file: "harmony.pdf", image: "/images/publications/harmony.jpg" },
  { title: "Punjabi-Kashmiri Primer", category: "Bilingual", file: "punjabi.pdf", image: "/images/publications/punjabi.jpg" },
  { title: "Tests & Exercises", category: "Practice", file: "tests.pdf", image: "/images/publications/tests.jpg" },
]

const albums = [
  { title: "Kashmiri Folk Songs", tracks: 6, image: "/images/vaakh/c-vaakh47.png" },
  { title: "Sufi Devotional Music", tracks: 7, image: "/images/vaakh/c-vaakh50.png" },
  { title: "Classical Kashmiri", tracks: 8, image: "/images/vaakh/c-vaakh53.png" },
]

export default function LanguageAcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-chinar to-chinar-dark text-white overflow-hidden">
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
              and everyday conversations. 48 lessons across 6 parts.
            </p>
          </div>

          {allLessons.map((part) => (
            <div key={part.part} className="mb-12">
              <h3 className="font-display text-2xl font-bold text-walnut mb-2">
                Part {part.part}: {part.title}
              </h3>
              <p className="text-sm text-walnut/50 mb-6">{part.lessons.length} lessons</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {part.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chinar/10 text-chinar group-hover:bg-chinar group-hover:text-white transition-colors shrink-0">
                      <Play className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-walnut text-sm truncate">{lesson.title}</p>
                      <p className="text-xs text-walnut/50">Lesson {((part.part - 1) * 8) + i + 1} · {lesson.duration}</p>
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
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
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
            {albums.map((album) => (
              <div
                key={album.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square relative bg-parchment">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex items-center gap-2 text-white">
                      <Play className="h-5 w-5" fill="white" />
                      <span className="font-accent text-sm tracking-wider">Play Album</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-walnut mb-2">
                    {album.title}
                  </h3>
                  <p className="text-sm text-walnut/60 mb-4">
                    {album.tracks} tracks
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
