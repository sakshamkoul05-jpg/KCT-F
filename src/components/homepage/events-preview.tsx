"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const events = [
  {
    title: "Samanbal 2024",
    date: "January 9-10, 2024",
    location: "Jammu",
    description:
      "A literary and cultural meet celebrating Kashmiri art, music, theatre, language, and literature.",
    type: "Cultural Meet",
  },
  {
    title: "International Conference on Kashmiri Language",
    date: "January 6-7, 2019",
    location: "K.L. Saigal Hall, Jammu",
    description:
      "Two-day international conference on Kashmiri language, literature and culture organized with CIIL and Sahitya Academy.",
    type: "Conference",
  },
  {
    title: "Samanbal 2022",
    date: "March 25-26, 2022",
    location: "Jammu",
    description:
      "Literary and cultural meet with scholars, writers, and artists from across the country.",
    type: "Cultural Meet",
  },
]

export function EventsPreview() {
  return (
    <section className="py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Events & Programs
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Cultural Gatherings
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-chinar hover:text-chinar-dark font-medium mt-4 sm:mt-0 transition-colors"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-2 bg-gradient-to-r from-chinar to-saffron" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-chinar/10 text-chinar text-xs font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-walnut mb-3 group-hover:text-chinar transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-walnut/60 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-walnut/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
