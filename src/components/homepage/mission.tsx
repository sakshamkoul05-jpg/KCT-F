"use client"

import { Globe, BookOpen, Users } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const pillars = [
  {
    icon: Globe,
    title: "Promote",
    description:
      "Promoting performing arts, languages, and literature of Kashmir through events, workshops, and cultural programs.",
  },
  {
    icon: BookOpen,
    title: "Preserve",
    description:
      "Documenting and preserving the rich cultural heritage, tribal arts, and folk traditions of Kashmir.",
  },
  {
    icon: Users,
    title: "Disseminate",
    description:
      "Publishing periodicals, books, and digital content to spread knowledge about Kashmiri culture worldwide.",
  },
]

export function Mission() {
  return (
    <section className="py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
            Our Mission
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut mb-6">
            Three Pillars of Purpose
          </h2>
          <p className="text-lg text-walnut/70 max-w-2xl mx-auto">
            Since 2000, the Kashmir Cultural Trust has been dedicated to the
            promotion, preservation and dissemination of the rich cultural
            heritage of Kashmir.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-chinar/10 text-chinar mb-6 group-hover:bg-chinar group-hover:text-white transition-colors">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-walnut mb-4">
                  {pillar.title}
                </h3>
                <p className="text-walnut/70 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="absolute top-6 right-6 font-display text-6xl font-bold text-stone/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
