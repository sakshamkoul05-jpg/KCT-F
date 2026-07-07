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
      "Two-day international conference organized with CIIL and Sahitya Academy on Kashmiri language and culture.",
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
    <section className="relative py-32 bg-ivory texture-parchment">
      <div className="absolute inset-0 lighting-warm pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-copper/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-copper uppercase">
                Gatherings
              </span>
              <span className="h-[1px] w-8 bg-copper/40" />
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-walnut">
              Cultural Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-accent text-sm text-copper hover:text-chinar mt-6 sm:mt-0 group transition-colors"
          >
            All Events
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <article className="card-editorial group">
                <div className="h-1 bg-gradient-to-r from-chinar via-copper to-gold" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-chinar-muted text-chinar text-[10px] font-accent font-semibold tracking-wider uppercase rounded-sm">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-walnut mb-3 group-hover:text-chinar transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="editorial-body text-sm text-walnut/50 mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-5 text-xs text-walnut/40 font-accent">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
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
