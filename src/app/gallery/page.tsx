"use client"

import { useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const categories = ["All", "Landscapes", "Events", "Culture", "Architecture", "Community", "Traditional Crafts"]

const photos = [
  { alt: "Dal Lake", category: "Landscapes" },
  { alt: "Shikara Ride", category: "Landscapes" },
  { alt: "Mughal Gardens", category: "Architecture" },
  { alt: "Temple Architecture", category: "Architecture" },
  { alt: "Samanbal 2024", category: "Events" },
  { alt: "Book Release", category: "Events" },
  { alt: "Kashmiri Embroidery", category: "Traditional Crafts" },
  { alt: "Papier-mache", category: "Traditional Crafts" },
  { alt: "Community Gathering", category: "Community" },
  { alt: "Chinar Trees", category: "Landscapes" },
  { alt: "Walnut Carving", category: "Traditional Crafts" },
  { alt: "Himalayan Peaks", category: "Landscapes" },
]

export default function GalleryPage() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A0F0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A] via-[#2D1810] to-[#3D2015]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.08)_0%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-[#C9A96E]/80 uppercase">
                Visual Archive
              </span>
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              Gallery
            </h1>
            <p className="font-editorial text-xl text-white/40 italic max-w-2xl leading-relaxed">
              A visual journey through the heritage, culture, and community of Kashmir.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="relative py-32 bg-snow">
        <div className="absolute inset-0 lighting-heritage pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          {/* Filter */}
          <FadeUp className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 font-accent text-[11px] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 ${
                  active === cat
                    ? "bg-chinar text-white"
                    : "bg-white border border-stone/20 text-walnut/50 hover:border-chinar/30 hover:text-chinar"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Grid */}
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <StaggerItem key={photo.alt}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <div className={`bg-gradient-to-br from-parchment to-stone-light ${i % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="font-display text-3xl font-bold text-stone/15 group-hover:text-chinar/15 transition-colors duration-700">
                        {photo.category.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="font-accent text-[8px] tracking-[0.2em] text-[#C9A96E] uppercase">
                        {photo.category}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-white mt-0.5">
                        {photo.alt}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A96E]/20 rounded-lg transition-colors duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
