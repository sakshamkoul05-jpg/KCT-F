"use client"

import { Calendar, MapPin } from "lucide-react"
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
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A0F0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A] via-[#2D1810] to-[#3D2015]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.08)_0%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-[#C9A96E]/80 uppercase">
                Gatherings
              </span>
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              Events &amp; Programs
            </h1>
            <p className="font-editorial text-xl text-white/40 italic max-w-2xl leading-relaxed">
              Cultural events, literary meets, and conferences organized by Kashmir Cultural Trust.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Events List */}
      <section className="relative py-32 bg-ivory texture-parchment">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
          <StaggerChildren className="space-y-8">
            {events.map((event, i) => (
              <StaggerItem key={i}>
                <article className="card-editorial group">
                  <div className="h-1 bg-gradient-to-r from-chinar via-copper to-gold" />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-chinar-muted text-chinar text-[10px] font-accent font-semibold tracking-wider uppercase rounded-sm">
                            {event.type}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-walnut mb-3 group-hover:text-chinar transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="editorial-body text-walnut/50 leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((h) => (
                            <span key={h} className="px-2 py-0.5 bg-cream text-walnut/50 text-[10px] font-accent tracking-wider uppercase rounded-sm border border-stone/10">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:text-right shrink-0">
                        <div className="flex items-center gap-2 text-walnut/40 font-accent text-xs mb-1 lg:justify-end">
                          <Calendar className="h-3.5 w-3.5" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-walnut/40 font-accent text-xs lg:justify-end">
                          <MapPin className="h-3.5 w-3.5" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
