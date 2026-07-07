"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const heroSlides = [
  { src: "/images/hero/slider1-new.jpg", alt: "Kashmir Heritage" },
  { src: "/images/hero/slider2-new.jpg", alt: "Kashmir Culture" },
  { src: "/images/hero/slider3-new.jpg", alt: "Kashmir Landscape" },
]

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10%",
        background: "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%)",
      }}
      animate={{
        y: [0, -900],
        x: [0, (Math.random() - 0.5) * 120],
        opacity: [0, 0.5, 0.2, 0],
        scale: [0.5, 1, 0.7],
      }}
      transition={{
        duration: 14 + Math.random() * 8,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={heroSlides[0].src}
          alt={heroSlides[0].alt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A]/80 via-[#2D1810]/70 to-[#3D2015]/80" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.12)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(123,45,38,0.08)_0%,transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,15,10,0.5)_100%)]" />
      </motion.div>

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
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 text-center"
        style={{ y: y2, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <span className="font-accent text-[11px] tracking-[0.35em] text-[#C9A96E]/80 uppercase">
              Established 2000 · Jammu &amp; Kashmir
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white mb-6 leading-[0.95] tracking-tight"
        >
          <span className="block">Kashmir</span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-[#C9A96E] via-[#D4BA85] to-[#C9A96E] bg-clip-text text-transparent">
              Cultural Trust
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-editorial text-xl sm:text-2xl md:text-[1.7rem] text-white/50 max-w-3xl mx-auto mb-14 leading-relaxed italic font-light"
        >
          Preserving the soul of Kashmiri civilization &mdash; promoting language,
          literature, and the rich cultural heritage of Kashmir for future
          generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
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
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-accent text-[9px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E]/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
