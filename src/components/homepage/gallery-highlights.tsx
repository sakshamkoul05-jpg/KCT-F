"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const highlights = [
  { title: "Heritage Festival", category: "Events" },
  { title: "Traditional Dance", category: "Culture" },
  { title: "Dal Lake", category: "Landscape" },
  { title: "Ancient Temple", category: "Heritage" },
  { title: "Copper Artistry", category: "Craft" },
  { title: "Chinar Forest", category: "Nature" },
]

export function GalleryHighlights() {
  return (
    <section className="relative py-32 bg-snow">
      <div className="absolute inset-0 lighting-heritage pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-copper/40" />
            <span className="font-accent text-[10px] tracking-[0.3em] text-copper uppercase">
              Visual Archive
            </span>
            <span className="h-[1px] w-8 bg-copper/40" />
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-walnut mb-4">
            Glimpses of Kashmir
          </h2>
          <p className="editorial-body text-walnut/50 max-w-xl mx-auto">
            A visual journey through the heritage, culture, and community of Kashmir.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {highlights.map((item, i) => (
            <StaggerItem key={item.title}>
              <div
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-parchment to-stone-light ${
                    i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-4xl md:text-5xl font-bold text-stone/20 group-hover:text-chinar/20 transition-colors duration-700">
                      {item.category.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/70 via-[#1A0F0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-accent text-[9px] tracking-[0.2em] text-[#C9A96E] uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A96E]/20 rounded-lg transition-colors duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-accent text-sm text-copper hover:text-chinar group transition-colors"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
