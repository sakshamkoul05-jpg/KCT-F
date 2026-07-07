"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const categories = ["All", "Heritage", "Culture", "Landscape", "Events", "Community", "Craft"]

const photos = [
  { src: "/images/gallery/g1.jpg", alt: "Heritage Festival", category: "Heritage" },
  { src: "/images/gallery/g5.jpg", alt: "Traditional Dance", category: "Culture" },
  { src: "/images/gallery/g10-new.png", alt: "Dal Lake", category: "Landscape" },
  { src: "/images/gallery/k1.jpg", alt: "Ancient Temple", category: "Heritage" },
  { src: "/images/gallery/a1.jpg", alt: "Copper Artistry", category: "Craft" },
  { src: "/images/gallery/g15.jpg", alt: "Chinar Forest", category: "Landscape" },
  { src: "/images/gallery/g2.jpg", alt: "Book Release", category: "Events" },
  { src: "/images/gallery/g3.jpg", alt: "Kashmiri Embroidery", category: "Craft" },
  { src: "/images/gallery/k2.jpg", alt: "Community Gathering", category: "Community" },
  { src: "/images/gallery/g20.jpg", alt: "Mughal Gardens", category: "Landscape" },
  { src: "/images/gallery/a3.jpg", alt: "Walnut Carving", category: "Craft" },
  { src: "/images/gallery/g25.jpg", alt: "Himalayan Peaks", category: "Landscape" },
  { src: "/images/gallery/g8.jpg", alt: "Samanbal Festival", category: "Events" },
  { src: "/images/gallery/k3.jpg", alt: "Shikara Ride", category: "Landscape" },
  { src: "/images/gallery/a5.jpg", alt: "Papier-mache Art", category: "Craft" },
  { src: "/images/gallery/g30.jpg", alt: "Valley View", category: "Landscape" },
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
              <StaggerItem key={photo.src}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
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
