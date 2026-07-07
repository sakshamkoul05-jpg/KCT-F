import { Metadata } from "next"
import { BookOpen, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Publications",
  description: `Browse our collection of publications including the Vaakh literary journal, language learning materials, and cultural studies. ${SITE_CONFIG.name}.`,
}

const publications = [
  { title: "A Course in Kashmiri Language", author: "Dr. Roop Krishen Bhat", category: "Language Learning", file: "A-Course-In-Kashmiri-Language.pdf" },
  { title: "Koshur Cultural Reader", author: "Dr. Roop Krishen Bhat", category: "Cultural Studies", file: "kashur-cultural-reader.pdf" },
  { title: "Leela Sagar", author: "Dr. Roop Krishen Bhat", category: "Cultural Studies", file: "Leela-Sagar-new.pdf" },
  { title: "Primer", author: "KCT", category: "Language Learning", file: "primer.pdf" },
  { title: "Reader", author: "KCT", category: "Language Learning", file: "reader.pdf" },
  { title: "Dictionary of Proverbs", author: "KCT", category: "Language Learning", file: "DictionaryProverbs.pdf" },
  { title: "Modern Kashmiri Grammar", author: "KCT", category: "Language Learning", file: "ModernKashmiriGrammar.pdf" },
  { title: "Spoken Kashmiri", author: "KCT", category: "Language Learning", file: "SpokenKashmiri.pdf" },
  { title: "Kashmiri Administrative Terminology", author: "KCT", category: "Scholarly Works", file: "Kashmiri-Admn-Terminology.pdf" },
  { title: "Kashmiri Bibliography", author: "KCT", category: "Scholarly Works", file: "KashmiriBibliography.pdf" },
  { title: "Punjabi-Kashmiri Common Vocabulary", author: "KCT", category: "Language Learning", file: "Kash-Pbi-CVocab.pdf" },
  { title: "Communal Harmony in Kashmiri Literature", author: "KCT", category: "Cultural Studies", file: "Communal-Harmony-in-Kmri-lit.pdf" },
  { title: "Kaeshri Adbaek Gaashi Taarakh", author: "KCT", category: "Scholarly Works", file: "Gaashi-taarakh-final.pdf" },
  { title: "Kashmiri Hindi Kashmiri Pustak", author: "KCT", category: "Language Learning", file: "kashmiri-hindi-kashmiri-pustak.pdf" },
]

const vaakhIssues = [
  { issue: 61, period: "Jan-Jun 2025", current: true },
  { issue: 59, period: "Jan-Dec 2023" },
  { issue: 58, period: "Jul-Dec 2022" },
  { issue: 57, period: "Jan-Jun 2022" },
  { issue: 56, period: "Jul-Dec 2021" },
  { issue: 55, period: "Jan-Jun 2021" },
  { issue: 54, period: "Jul-Dec 2020" },
  { issue: 53, period: "Jan-Jun 2020" },
  { issue: 52, period: "Jul-Dec 2019" },
  { issue: 50, period: "Jan-Jun 2019" },
  { issue: 48, period: "Oct-Dec 2017" },
  { issue: 47, period: "Jul-Sep 2017" },
]

export default function PublicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Publications
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Our Publications
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Books, journals, and scholarly works documenting and promoting
            Kashmiri language, literature, and culture.
          </p>
        </div>
      </section>

      {/* Vaakh Journal */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Literary Journal
            </p>
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Vaakh
            </h2>
            <p className="text-lg text-walnut/70">
              Our flagship literary journal featuring poetry, essays, and cultural
              commentary from leading Kashmiri writers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vaakhIssues.map((vaakh) => (
              <Link
                key={vaakh.issue}
                href={`/publications/vaakh`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-chinar/10 to-saffron/10 flex items-center justify-center relative">
                  <div className="text-center">
                    <p className="font-display text-4xl font-bold text-chinar/30">
                      {vaakh.issue}
                    </p>
                  </div>
                  {vaakh.current && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-chinar text-white text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-display font-semibold text-walnut">
                    Vaakh {vaakh.issue}
                  </p>
                  <p className="text-sm text-walnut/50">{vaakh.period}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Books Catalog */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Books & Monographs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-3 py-1 bg-chinar/10 text-chinar text-xs font-medium rounded-full mb-3">
                  {pub.category}
                </span>
                <h3 className="font-display text-lg font-bold text-walnut mb-1">
                  {pub.title}
                </h3>
                <p className="text-sm text-walnut/50 mb-4">{pub.author}</p>
                <Link
                  href={`/pdfs/publications/${pub.file}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-chinar hover:text-chinar-dark font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
