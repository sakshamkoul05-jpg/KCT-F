import Link from "next/link"
import { ArrowRight, Headphones, BookOpen, Music } from "lucide-react"

export function LanguagePreview() {
  return (
    <section className="py-24 bg-walnut text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
              Language Academy
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Learn <span className="text-saffron">Kashmiri</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Explore our comprehensive language learning resources including a
              48-lesson audio course, grammar guides, cultural readers, and
              music albums — all designed to help you connect with the Kashmiri
              language.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Headphones className="h-8 w-8 text-saffron mx-auto mb-2" />
                <p className="font-display text-2xl font-bold">48</p>
                <p className="text-xs text-white/60">Audio Lessons</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <BookOpen className="h-8 w-8 text-saffron mx-auto mb-2" />
                <p className="font-display text-2xl font-bold">14</p>
                <p className="text-xs text-white/60">Publications</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Music className="h-8 w-8 text-saffron mx-auto mb-2" />
                <p className="font-display text-2xl font-bold">21</p>
                <p className="text-xs text-white/60">Music Tracks</p>
              </div>
            </div>

            <Link
              href="/language-academy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-chinar text-white font-medium rounded-lg hover:bg-chinar-dark transition-colors"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Preview card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-chinar flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Spoken Kashmiri Course</p>
                  <p className="text-sm text-white/60">Part 1 · Lesson 1</p>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Vowels in Kashmiri
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Learn the fundamental vowel sounds of the Kashmiri language.
              </p>
              {/* Waveform placeholder */}
              <div className="flex items-end gap-1 h-12 mb-4">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-saffron/40 rounded-full"
                    style={{
                      height: `${20 + Math.random() * 80}%`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>0:00</span>
                <span>4:32</span>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-chinar/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
