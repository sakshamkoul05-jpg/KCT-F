import Link from "next/link"
import { ArrowRight } from "lucide-react"

const highlights = [
  { alt: "Kashmir Valley", category: "Landscapes" },
  { alt: "Cultural Performance", category: "Events" },
  { alt: "Traditional Architecture", category: "Architecture" },
  { alt: "Community Gathering", category: "Community" },
  { alt: "Kashmiri Craft", category: "Traditional Crafts" },
  { alt: "Dal Lake", category: "Landscapes" },
]

export function GalleryHighlights() {
  return (
    <section className="py-24 bg-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Visual Archive
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Gallery Highlights
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-chinar hover:text-chinar-dark font-medium mt-4 sm:mt-0 transition-colors"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <Link
              key={index}
              href="/gallery"
              className={`group relative aspect-square rounded-xl overflow-hidden bg-parchment ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-lg text-walnut/40">{item.alt}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{item.alt}</p>
                <p className="text-white/60 text-xs">{item.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
