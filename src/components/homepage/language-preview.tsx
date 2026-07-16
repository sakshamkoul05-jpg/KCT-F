"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/animations"

export function LanguagePreview() {
  return (
    <section className="relative py-32 bg-walnut overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-wood opacity-30" />

      {/* Atmospheric lights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <SlideInLeft>
            <div className="text-white">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
                <span className="font-accent text-[10px] tracking-[0.3em] text-[#D4BA85] uppercase">
                  Language Academy
                </span>
                <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
              </div>

              <h2 className="editorial-heading text-4xl sm:text-5xl mb-6 text-white">
                Learn Kashmiri
              </h2>

              <p className="font-editorial text-lg text-white/75 italic leading-relaxed mb-8">
                Master the Kashmiri language through our comprehensive audio
                lessons, grammar guides, and cultural immersion programs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "48", label: "Audio Lessons" },
                  { value: "2", label: "Parts" },
                  { value: "12", label: "Publications" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-bold text-[#D4BA85]">
                      {stat.value}
                    </div>
                    <div className="font-accent text-[9px] tracking-[0.2em] text-white/60 uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/language-academy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A96E]/15 text-[#D4BA85] border border-[#C9A96E]/30 font-accent text-[11px] tracking-[0.12em] uppercase rounded-sm hover:bg-[#C9A96E]/25 transition-all duration-400"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SlideInLeft>

          {/* Right — Audio Preview */}
          <SlideInRight>
            <div className="relative">
              {/* Waveform visualization */}
              <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <button className="h-12 w-12 rounded-full bg-[#C9A96E] flex items-center justify-center hover:scale-105 transition-transform">
                    <Play className="h-5 w-5 text-walnut ml-0.5" fill="currentColor" />
                  </button>
                  <div className="flex-1">
                    <p className="text-white font-body text-sm font-medium">
                      Part 1 · Lesson 1
                    </p>
                    <p className="text-white/60 font-accent text-xs">
                      Introduction to Kashmiri Vowels
                    </p>
                  </div>
                  <span className="text-white/50 font-accent text-xs">5:30</span>
                </div>

                {/* Waveform bars */}
                <div className="flex items-end gap-[2px] h-16">
                  {Array.from({ length: 60 }).map((_, i) => {
                    const height = 20 + Math.sin(i * 0.3) * 15 + Math.random() * 20
                    const isActive = i < 20
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-full transition-all duration-300"
                        style={{
                          height: `${height}%`,
                          backgroundColor: isActive
                            ? "rgba(201,169,110,0.8)"
                            : "rgba(255,255,255,0.1)",
                        }}
                      />
                    )
                  })}
                </div>

                <div className="flex justify-between mt-3">
                  <span className="text-white/50 font-accent text-[10px]">1:42</span>
                  <span className="text-white/50 font-accent text-[10px]">5:30</span>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,rgba(201,169,110,0.15)_0%,transparent_70%)] rounded-full blur-xl" />
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
