"use client"

import { Globe, BookOpen, Users } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const pillars = [
  {
    icon: Globe,
    title: "Promote",
    subtitle: "Living Traditions",
    description:
      "Promoting the performing arts, languages, and literature of Kashmir through events, workshops, and cultural programs that bring heritage to life.",
  },
  {
    icon: BookOpen,
    title: "Preserve",
    subtitle: "Ancient Knowledge",
    description:
      "Documenting and preserving the rich cultural heritage, tribal arts, and folk traditions of Kashmir for generations yet to come.",
  },
  {
    icon: Users,
    title: "Disseminate",
    subtitle: "Global Reach",
    description:
      "Publishing periodicals, books, and digital content to spread knowledge about Kashmiri culture across the world.",
  },
]

export function Mission() {
  return (
    <section className="relative py-32 bg-cream texture-wood">
      {/* Ambient light */}
      <div className="absolute inset-0 lighting-warm pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-copper/40" />
            <span className="font-accent text-[10px] tracking-[0.3em] text-copper uppercase">
              Our Purpose
            </span>
            <span className="h-[1px] w-8 bg-copper/40" />
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-walnut mb-6">
            Three Pillars of Purpose
          </h2>
          <p className="editorial-body text-lg text-walnut/50 max-w-2xl mx-auto">
            Since 2000, the Kashmir Cultural Trust has been dedicated to the
            promotion, preservation, and dissemination of the rich cultural
            heritage of Kashmir.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative">
                {/* Number */}
                <div className="font-display text-[120px] font-bold text-stone/10 leading-none mb-4 group-hover:text-chinar/10 transition-colors duration-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-chinar-muted border border-chinar/10 text-chinar mb-6 group-hover:bg-chinar group-hover:text-white group-hover:border-chinar transition-all duration-500">
                  <pillar.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Subtitle */}
                <p className="font-accent text-[10px] tracking-[0.25em] text-copper uppercase mb-2">
                  {pillar.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-walnut mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="editorial-body text-walnut/50 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 h-[1px] w-12 bg-gradient-to-r from-copper/40 to-transparent group-hover:w-20 transition-all duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
