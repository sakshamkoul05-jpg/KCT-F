"use client"

import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { FadeUp } from "@/components/animations"

export function DonationCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-chinar-dark via-chinar to-walnut" />
      <div className="absolute inset-0 texture-wood opacity-20" />

      {/* Atmospheric lights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Heritage pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-opacity='0.5' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <FadeUp>
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 border border-white/20 mb-8">
            <Heart className="h-7 w-7 text-[#C9A96E]" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Support Our Mission
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-white/50 italic max-w-2xl mx-auto mb-12 leading-relaxed">
            Your generous contribution helps preserve Kashmir&apos;s cultural
            heritage for future generations. Every donation sustains our mission
            of education, preservation, and cultural exchange.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#1A0F0A] font-accent text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-[#D4BA85] transition-all duration-400 shadow-[0_4px_20px_rgba(201,169,110,0.3)]"
            >
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-accent text-[11px] tracking-[0.12em] uppercase rounded-sm hover:bg-white/20 transition-all duration-400"
            >
              Learn More
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/30">
            {["Registered NGO", "80G Tax Benefits", "Transparent Usage"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]/50" />
                  <span className="font-accent text-[10px] tracking-[0.15em] uppercase">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
