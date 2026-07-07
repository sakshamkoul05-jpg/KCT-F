"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10%",
        background: "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%)",
        animation: `float-up ${14 + delay}s ease-out ${delay}s infinite`,
      }}
    />
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = Math.min(scrollY * 0.3, 100)
  const fadeOut = Math.max(1 - scrollY / 600, 0)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0"
        style={{ transform: `scale(${1 + scrollY * 0.0001})` }}
      >
        <Image
          src="/images/hero/slider1-new.jpg"
          alt="Kashmir Heritage"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A]/90 via-[#2D1810]/85 to-[#3D2015]/90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.15)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(123,45,38,0.1)_0%,transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,15,10,0.7)_100%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 1.5}
            x={8 + ((i * 7) % 80)}
            size={3 + (i % 3) * 2}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 text-center"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: fadeOut,
        }}
      >
        {/* Badge - visible immediately */}
        <div
          className="mb-8 hero-animate"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <span className="font-accent text-[11px] tracking-[0.35em] text-[#C9A96E]/80 uppercase">
              Established 2000 · Jammu &amp; Kashmir
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>
        </div>

        {/* Heading - visible immediately */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white mb-6 leading-[0.95] tracking-tight hero-animate"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="block">Kashmir</span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-[#C9A96E] via-[#D4BA85] to-[#C9A96E] bg-clip-text text-transparent">
              Cultural Trust
            </span>
          </span>
        </h1>

        {/* Subtitle - visible immediately */}
        <p
          className="font-editorial text-xl sm:text-2xl md:text-[1.7rem] text-white/60 max-w-3xl mx-auto mb-14 leading-relaxed italic font-light hero-animate"
          style={{ animationDelay: "0.6s" }}
        >
          Preserving the soul of Kashmiri civilization &mdash; promoting language,
          literature, and the rich cultural heritage of Kashmir for future
          generations.
        </p>

        {/* CTA Buttons - visible immediately */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center hero-animate"
          style={{ animationDelay: "0.8s" }}
        >
          <Link href="/heritage" className="btn-heritage">
            Explore Heritage
          </Link>
          <Link
            href="/language-academy"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white/80 border border-white/15 font-accent text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-500"
          >
            Learn Kashmiri
          </Link>
        </div>

        {/* Stats - visible immediately */}
        <div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto hero-animate"
          style={{ animationDelay: "1s" }}
        >
          {[
            { value: "24+", label: "Years" },
            { value: "45+", label: "Books" },
            { value: "1,200+", label: "Members" },
            { value: "48", label: "Lessons" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#C9A96E]">
                {stat.value}
              </div>
              <div className="font-accent text-[10px] tracking-[0.2em] text-white/40 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hero-animate"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="font-accent text-[9px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E]/40 to-transparent scroll-bounce" />
      </div>
    </section>
  )
}
