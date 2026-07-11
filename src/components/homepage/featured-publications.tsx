"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-provider"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const publications = [
  {
    title: "Spoken Kashmiri",
    author: "Dr. Omkar N. Koul",
    category: "Language",
    year: "2016",
    description: "Audio-visual course for learning conversational Kashmiri.",
    image: "/images/publications/combined.jpg",
  },
  {
    title: "Primer in Kashmiri",
    author: "Dr. Omkar N. Koul",
    category: "Language",
    year: "2015",
    description: "A foundational guide to reading and writing Kashmiri.",
    image: "/images/publications/primer.jpg",
  },
  {
    title: "A Course in Kashmiri Language",
    author: "Dr. Omkar N. Koul",
    category: "Language",
    year: "2018",
    description: "Comprehensive language course for serious learners.",
    image: "/images/publications/kashmiri-hindi.jpg",
  },
]

export function FeaturedPublications() {
  const { t } = useI18n()

  return (
    <section className="relative py-32 bg-snow" aria-labelledby="publications-heading">
      <div className="absolute inset-0 lighting-heritage pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
              <span className="font-accent text-[11px] tracking-[0.3em] text-copper uppercase">
                Library
              </span>
              <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
            </div>
            <h2 id="publications-heading" className="editorial-heading text-4xl sm:text-5xl text-walnut">
              Featured Publications
            </h2>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 font-accent text-sm text-copper hover:text-chinar mt-6 sm:mt-0 group transition-colors"
            aria-label="View all publications"
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <StaggerItem key={pub.title}>
              <Link href="/publications" className="block">
                <article className="card-editorial group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={pub.image}
                      alt={`${pub.title} by ${pub.author}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-chinar text-[11px] font-accent font-semibold tracking-wider uppercase rounded-sm">
                        {pub.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="font-accent text-[11px] tracking-[0.2em] text-copper uppercase mb-2">
                      {pub.author} · {pub.year}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-walnut mb-3 group-hover:text-chinar transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="editorial-body text-sm text-walnut/70 leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
