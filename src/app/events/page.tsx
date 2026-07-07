import { Metadata } from "next"
import { Calendar, MapPin, Users, BookOpen } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Events & Programs",
  description: `Cultural events, literary meets, and conferences organized by ${SITE_CONFIG.name}.`,
}

const events = [
  {
    title: "Samanbal 2024",
    date: "January 9-10, 2024",
    location: "Jammu",
    type: "Cultural Meet",
    description:
      "A literary and cultural meet celebrating Kashmiri art, music, theatre, language, and literature with scholars and practitioners from across the country.",
    highlights: ["Book releases", "Cultural performances", "Literary discussions"],
  },
  {
    title: "Samanbal 2022",
    date: "March 25-26, 2022",
    location: "Jammu",
    type: "Cultural Meet",
    description:
      "Literary and cultural meet with scholars, writers, intellectuals, artists, and media personalities from across the country.",
    highlights: ["Art exhibitions", "Music performances", "Panel discussions"],
  },
  {
    title: "International Conference on Kashmiri Language",
    date: "January 6-7, 2019",
    location: "K.L. Saigal Hall, Jammu",
    type: "Conference",
    description:
      "Two-day international conference organized in collaboration with CIIL Mysore, Sahitya Academy, and J&K Academy of Art, Culture and Languages.",
    highlights: ["International scholars", "Research presentations", "Book releases"],
  },
  {
    title: "Samanbal 4",
    date: "March 20-21, 2018",
    location: "Jammu",
    type: "Cultural Meet",
    description:
      "Literary and cultural meet with participation from writers, artists, and cultural workers.",
    highlights: ["Literary sessions", "Cultural programs"],
  },
  {
    title: "Samanbal 2018 (Delhi)",
    date: "February 10, 2018",
    location: "Delhi",
    type: "Cultural Meet",
    description:
      "Delhi edition of the Samanbal literary and cultural meet.",
    highlights: ["Community gathering", "Cultural performances"],
  },
  {
    title: "National Seminar on Trauma of Migration",
    date: "March 13, 2016",
    location: "Jammu",
    type: "Seminar",
    description:
      "National seminar addressing the trauma and challenges faced by the Kashmiri community during migration.",
    highlights: ["Academic papers", "Community voices"],
  },
  {
    title: "Samanbal 2016",
    date: "February 12-13, 2016",
    location: "Jammu",
    type: "Cultural Meet",
    description:
      "Literary and cultural meet at J&K Academy of Art, Culture and Languages.",
    highlights: ["Art displays", "Literary readings"],
  },
  {
    title: "Samanbal 2015",
    date: "March 14-16, 2015",
    location: "Kashmir Pandit Sabha, Jammu",
    type: "Cultural Meet",
    description:
      "Inaugurated by Dr. Nirmal Singh, Deputy Chief Minister of J&K. About seventy scholars and practitioners participated. Four books were released.",
    highlights: [
      "Book exhibition: Kashmiri Literature in Exile",
      "Four book releases",
      "Seventy scholars participated",
      "Wide media coverage",
    ],
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Events & Programs
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Cultural Gatherings
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Literary meets, conferences, seminars, and cultural programs
            organized by the Kashmir Cultural Trust.
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {events.map((event, i) => (
              <article
                key={i}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chinar/10 text-chinar shrink-0">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-chinar/10 text-chinar text-xs font-medium rounded-full mb-2">
                      {event.type}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-walnut">
                      {event.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-walnut/50 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
                <p className="text-walnut/70 leading-relaxed mb-4">
                  {event.description}
                </p>
                {event.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-ivory text-walnut/60 text-xs rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
