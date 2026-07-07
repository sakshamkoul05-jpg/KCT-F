"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const publications = [
  {
    title: "Cultural Heritage of Kashmir",
    author: "Dr. Roop Krishen Bhat",
    category: "Heritage",
    year: "2018",
    description: "A comprehensive exploration of Kashmir's living cultural traditions.",
  },
  {
    title: "Kashmiri Grammar",
    author: "Dr. Omkar N. Koul",
    category: "Language",
    year: "2019",
    description: "The definitive guide to Kashmiri linguistic structure.",
  },
  {
    title: "Spoken Kashmiri",
    author: "Dr. Omkar N. Koul",
    category: "Language",
    year: "2016",
    description: "Audio-visual course for learning conversational Kashmiri.",
  },
]

export function FeaturedPublications() {
  return (
    <section className="relative py-32 bg-snow">
      <div className="absolute inset-0 lighting-heritage pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-copper/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-copper uppercase">
                Library
              </span>
              <span className="h-[1px] w-8 bg-copper/40" />
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-walnut">
              Featured Publications
            </h2>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 font-accent text-sm text-copper hover:text-chinar mt-6 sm:mt-0 group transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <StaggerItem key={pub.title}>
              <article className="card-editorial group">
                {/* Image area */}
                <div className="relative h-56 bg-gradient-to-br from-parchment to-ivory overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-6xl font-bold text-stone/15 group-hover:text-chinar/15 transition-colors duration-700">
                      KCT
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-chinar text-[10px] font-accent font-semibold tracking-wider uppercase rounded-sm">
                      {pub.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-accent text-[10px] tracking-[0.2em] text-copper uppercase mb-2">
                    {pub.author} · {pub.year}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-walnut mb-3 group-hover:text-chinar transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="editorial-body text-sm text-walnut/50 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
