"use client"

import { Calendar, MapPin } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SITE_CONFIG } from "@/lib/constants"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const events = [
  {
    title: "Samanbal 2024",
    date: "January 9-10, 2024",
    location: "Jammu",
    type: "Cultural Meet",
    description: "A literary and cultural meet celebrating Kashmiri art, music, theatre, language, and literature with scholars and practitioners from across the country.",
    highlights: ["Book releases", "Cultural performances", "Literary discussions"],
  },
  {
    title: "Samanbal 2022",
    date: "March 25-26, 2022",
    location: "Jammu",
    type: "Cultural Meet",
    description: "Literary and cultural meet with scholars, writers, intellectuals, artists, and media personalities from across the country.",
    highlights: ["Art exhibitions", "Music performances", "Panel discussions"],
  },
  {
    title: "International Conference on Kashmiri Language",
    date: "January 6-7, 2019",
    location: "K.L. Saigal Hall, Jammu",
    type: "Conference",
    description: "Two-day international conference on Kashmiri language, literature and culture organized with CIIL Mysore and Sahitya Academy.",
    highlights: ["International scholars", "Research papers", "Cultural showcase"],
  },
  {
    title: "Samanbal 2018",
    date: "March 2018",
    location: "Jammu",
    type: "Cultural Meet",
    description: "Annual literary and cultural gathering celebrating Kashmiri heritage and traditions.",
    highlights: ["Heritage discussions", "Music", "Poetry"],
  },
  {
    title: "Kashmiri Language Workshop",
    date: "2017",
    location: "Jammu",
    type: "Workshop",
    description: "Workshop focused on teaching and promoting the Kashmiri language among younger generations.",
    highlights: ["Language lessons", "Cultural immersion", "Interactive sessions"],
  },
  {
    title: "Heritage Preservation Seminar",
    date: "2016",
    location: "Jammu",
    type: "Seminar",
    description: "Seminar discussing strategies for preserving Kashmiri cultural heritage in the diaspora.",
    highlights: ["Expert panels", "Community dialogue", "Action plans"],
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHero kicker="Events & programmes"
        title={"Samanbal, seminars and conferences"}
        intro={"Literary meets, conferences and cultural gatherings organised by the Trust since 2000."}
      />

      {/* Events List */}
      <section className="bg-snow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ol className="border-t-2 border-walnut">
            {events.map((event) => (
              <li key={event.title} className="grid grid-cols-1 gap-3 border-b border-stone py-10 md:grid-cols-[180px_1fr_240px] md:gap-10">
                <div>
                  <p className="font-display text-4xl font-semibold leading-none text-chinar">
                    {event.date.match(/\d{4}/)?.[0]}
                  </p>
                  <p className="mt-2 text-base font-semibold text-walnut">{event.type}</p>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-walnut">{event.title}</h2>
                  <p className="mt-3 max-w-2xl text-lg text-walnut/80">{event.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-base text-walnut">
                    {event.highlights.map((h) => (
                      <li key={h} className="before:mr-2 before:text-gold before:content-['◆']">{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1 text-base text-walnut md:text-right">
                  <p className="flex items-center gap-2 md:justify-end"><Calendar className="h-4 w-4 text-chinar" />{event.date}</p>
                  <p className="flex items-center gap-2 md:justify-end"><MapPin className="h-4 w-4 text-chinar" />{event.location}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
