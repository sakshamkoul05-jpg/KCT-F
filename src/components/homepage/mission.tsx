"use client"

import { Globe, BookOpen, Users } from "lucide-react"
import { useI18n } from "@/lib/i18n-provider"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

const pillarIcons = [Globe, BookOpen, Users]
const pillarKeys = ["preservation", "education", "community"] as const
const pillarSubtitles = ["Living Traditions", "Ancient Knowledge", "Global Reach"]

export function Mission() {
  const { t } = useI18n()

  return (
    <section className="relative py-32 bg-cream texture-wood" aria-labelledby="mission-heading">
      {/* Ambient light */}
      <div className="absolute inset-0 lighting-warm pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
            <span className="font-accent text-[11px] tracking-[0.3em] text-copper uppercase">
              Our Purpose
            </span>
            <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
          </div>
          <h2 id="mission-heading" className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-walnut mb-6">
            Three Pillars of Purpose
          </h2>
          <p className="editorial-body text-lg text-walnut/70 max-w-2xl mx-auto">
            Since 2000, the Kashmir Cultural Trust has been dedicated to the
            promotion, preservation, and dissemination of the rich cultural
            heritage of Kashmir.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillarKeys.map((key, index) => {
            const Icon = pillarIcons[index]
            const pillar = t.mission.pillars[key]
            return (
              <StaggerItem key={key}>
                <div className="group relative">
                  {/* Number */}
                  <div className="font-display text-[120px] font-bold text-stone/15 leading-none mb-4 group-hover:text-chinar/15 transition-colors duration-700" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-chinar-muted border border-chinar/10 text-chinar mb-6 group-hover:bg-chinar group-hover:text-white group-hover:border-chinar transition-all duration-500">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Subtitle */}
                  <p className="font-accent text-[11px] tracking-[0.25em] text-copper uppercase mb-2">
                    {pillarSubtitles[index]}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold text-walnut mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="editorial-body text-walnut/70 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-8 h-[1px] w-12 bg-gradient-to-r from-copper/40 to-transparent group-hover:w-20 transition-all duration-500" aria-hidden="true" />
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
