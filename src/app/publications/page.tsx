"use client"

import { Download } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

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
  { issue: 61, period: "Jan-Jun 2025", current: true, file: "Vaakh 61.pdf" },
  { issue: 59, period: "Jan-Dec 2023", file: "Vaakh59-60.pdf" },
  { issue: 58, period: "Jul-Dec 2022", file: "Vaakh58.pdf" },
  { issue: 56, period: "Jan-Jun 2021", file: "Vaakh-56.pdf" },
  { issue: 55, period: "Jul-Dec 2020", file: "vaakh55.pdf" },
  { issue: 54, period: "Jan-Jun 2020", file: "vaakh-54.pdf" },
  { issue: 53, period: "Jul-Dec 2019", file: "vaakh-53.pdf" },
  { issue: 52, period: "Jan-Jun 2019", file: "vaakh-52.pdf" },
  { issue: 51, period: "Jul-Dec 2018", file: "vaakh-51.pdf" },
  { issue: 50, period: "Jan-Jun 2018", file: "vaakh-50.pdf" },
  { issue: 48, period: "Jan-Jun 2017", file: "vaakh-48.pdf" },
  { issue: 47, period: "Jul-Dec 2016", file: "vaakh-47.pdf" },
]

export default function PublicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A0F0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A] via-[#2D1810] to-[#3D2015]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.08)_0%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-[#C9A96E]/80 uppercase">
                Library
              </span>
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              Publications
            </h1>
            <p className="font-editorial text-xl text-white/40 italic max-w-2xl leading-relaxed">
              Books, journals, and research publications on Kashmir&apos;s rich heritage.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="relative py-32 bg-snow">
        <div className="absolute inset-0 lighting-heritage pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="mb-12">
            <h2 className="editorial-heading text-3xl text-walnut mb-2">Books &amp; Monographs</h2>
            <div className="h-[1px] w-16 bg-gradient-to-r from-copper/40 to-transparent mt-4" />
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <StaggerItem key={pub.title}>
                <div className="card-editorial group p-6">
                  <span className="px-2 py-0.5 bg-chinar-muted text-chinar text-[9px] font-accent font-semibold tracking-wider uppercase rounded-sm">
                    {pub.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-walnut mt-3 mb-2 group-hover:text-chinar transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="font-accent text-[10px] tracking-[0.15em] text-walnut/40 uppercase mb-4">
                    {pub.author}
                  </p>
                  <a
                    href={`/publications/${pub.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-accent text-[10px] tracking-[0.15em] text-copper hover:text-chinar uppercase transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download PDF
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vaakh Journal */}
      <section className="relative py-32 bg-ivory texture-manuscript">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="mb-12">
            <h2 className="editorial-heading text-3xl text-walnut mb-2">Vaakh Literary Journal</h2>
            <p className="editorial-body text-walnut/50 mt-2">
              A biannual journal of Kashmiri language, literature, and culture.
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-r from-copper/40 to-transparent mt-4" />
          </FadeUp>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {vaakhIssues.map((v) => (
              <StaggerItem key={v.issue}>
                <a
                  href={`/publications/${v.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-editorial p-5 text-center group cursor-pointer block"
                >
                  <div className="font-display text-3xl font-bold text-chinar/20 group-hover:text-chinar/40 transition-colors duration-500 mb-2">
                    {v.issue}
                  </div>
                  <p className="font-accent text-[10px] tracking-[0.15em] text-walnut/40 uppercase">
                    {v.period}
                  </p>
                  {v.current && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-[#C9A96E]/10 text-[#C9A96E] text-[8px] font-accent tracking-wider uppercase rounded-sm">
                      Latest
                    </span>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 font-accent text-[9px] tracking-[0.15em] text-copper group-hover:text-chinar uppercase transition-colors">
                    <Download className="h-3 w-3" />
                    Download
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
