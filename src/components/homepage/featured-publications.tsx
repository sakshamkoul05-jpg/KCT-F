import Link from "next/link"
import { ArrowRight } from "lucide-react"

const publications = [
  {
    title: "A Course in Kashmiri Language",
    author: "Dr. Roop Krishen Bhat",
    category: "Language Learning",
    cover: "/images/publications/course-kashmiri.jpg",
  },
  {
    title: "Koshur Cultural Reader",
    author: "Dr. Roop Krishen Bhat",
    category: "Cultural Studies",
    cover: "/images/publications/koshur-reader.jpg",
  },
  {
    title: "Modern Kashmiri Grammar",
    author: "Dr. Roop Krishen Bhat",
    category: "Language Learning",
    cover: "/images/publications/modern-grammar.jpg",
  },
]

export function FeaturedPublications() {
  return (
    <section className="py-24 bg-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Publications
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Featured Works
            </h2>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-chinar hover:text-chinar-dark font-medium mt-4 sm:mt-0 transition-colors"
          >
            View All Publications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Link
              key={pub.title}
              href="/publications"
              className="group block"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-parchment mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="font-accent text-xs tracking-wider text-copper uppercase mb-2">
                      {pub.category}
                    </p>
                    <p className="font-display text-xl font-bold text-walnut leading-tight">
                      {pub.title}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-display text-lg font-semibold text-walnut group-hover:text-chinar transition-colors">
                {pub.title}
              </p>
              <p className="text-sm text-walnut/60 mt-1">{pub.author}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
