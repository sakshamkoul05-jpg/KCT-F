import { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Gallery",
  description: `Visual archive of Kashmiri cultural heritage — landscapes, events, traditional crafts, and community gatherings. ${SITE_CONFIG.name}.`,
}

const categories = ["All", "Landscapes", "Events", "Culture", "Architecture", "Community", "Traditional Crafts"]

const photos = [
  { alt: "Dal Lake", category: "Landscapes", description: "The iconic Dal Lake of Srinagar" },
  { alt: "Shikara Ride", category: "Landscapes", description: "Traditional boat on Dal Lake" },
  { alt: "Mughal Gardens", category: "Architecture", description: "Nishat Bagh Mughal Garden" },
  { alt: "Temple Architecture", category: "Architecture", description: "Ancient temple in Kashmir" },
  { alt: "Samanbal 2024", category: "Events", description: "Cultural meet in Jammu" },
  { alt: "Book Release", category: "Events", description: "Book release ceremony" },
  { alt: "Kashmiri Embroidery", category: "Traditional Crafts", description: "Traditional Kashmiri embroidery work" },
  { alt: "Papier-mâché", category: "Traditional Crafts", description: "Traditional papier-mâché art" },
  { alt: "Community Gathering", category: "Community", description: "Community cultural gathering" },
  { alt: "Chinar Trees", category: "Landscapes", description: "Ancient Chinar trees of Kashmir" },
  { alt: "Walnut Carving", category: "Traditional Crafts", description: "Intricate walnut wood carving" },
  { alt: "Himalayan Peaks", category: "Landscapes", description: "Snow-covered Himalayan peaks" },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Visual Archive
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Explore the visual heritage of Kashmir through our curated collection
            of landscapes, cultural events, traditional crafts, and community
            gatherings.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-8 bg-ivory border-b border-stone/20 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-white text-walnut hover:bg-chinar hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square bg-parchment rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-walnut/30 text-sm text-center px-4">{photo.alt}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{photo.alt}</p>
                  <p className="text-white/60 text-xs">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
