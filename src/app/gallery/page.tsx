"use client"

import { useState } from "react"
import { PageHero } from "@/components/shared/page-hero"
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
      <PageHero kicker="Gallery"
        title={"From our gatherings"}
        intro={"Photographs from Samanbal, conferences, book releases and the community the Trust brings together."}
      />

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
                className={`px-4 py-2 font-accent text-[13px] rounded-sm transition-all duration-300 ${
                  active === cat
                    ? "bg-chinar text-white"
                    : "bg-white border border-stone/20 text-walnut/80 hover:border-chinar/30 hover:text-chinar"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-lapis/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="font-accent text-xs text-gold">
                        {photo.category}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-white mt-0.5">
                        {photo.alt}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 rounded-lg transition-colors duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
