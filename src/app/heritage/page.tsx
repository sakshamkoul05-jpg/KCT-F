"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { PageHero } from "@/components/shared/page-hero"
import { HeritageTimeline } from "@/components/heritage/timeline"
import { KeyFigures } from "@/components/heritage/figures"
import { FadeUp, StaggerChildren, StaggerItem, SlideInLeft, SlideInRight } from "@/components/animations"

export default function HeritagePage() {
  return (
    <>
      <PageHero kicker="Heritage"
        title={<>Cultural Heritage<br />of Kashmir</>}
        intro={<>&ldquo;Kashmir has the distinction of being the only region of India which possesses an uninterrupted series of written records of its history.&rdquo; <span className="whitespace-nowrap text-gold-light">— Sir Aurel Stein</span></>}
      />

      <HeritageTimeline />

      <KeyFigures />

      {/* Heritage Essay */}
      <section className="relative py-32 bg-ivory texture-manuscript">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <FadeUp>
            <p className="kicker mb-4">Essay</p>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-walnut mb-8">
              The Heritage Essay
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <article className="space-y-6">
              <p className="editorial-body text-walnut/80 leading-[1.9]">
                The archaeological excavations of Bourzahama 15 kms from Srinagar
                establish its antiquity to beyond 3000 BC. It has been established
                that Nagas were the original inhabitants of Kashmir and Kashmiris
                built their cultural traditions on the habits and customs of Nagas.
              </p>
              <p className="editorial-body text-walnut/80 leading-[1.9]">
                The interaction between vedic and Kashmiri traditions did develop in
                course of time but in Kashmir&apos;s religious literature the supremacy of
                Shiva over Vedic supreme God Indra has often been asserted. Buddhists
                and Jews have left tremendous influence on Kashmir history and culture.
              </p>
              <p className="editorial-body text-walnut/80 leading-[1.9]">
                The amalgamation of Shaivism and Islamic thoughts resulted in yet
                another school of thought called as Sufism, which flourished for
                hundreds of years. Both Shaivism and Sufism are the prominent schools
                of thought which developed in Kashmir and left indelible mark on the
                psyche of Kashmiris.
              </p>
              <blockquote className="relative py-6 pl-8 border-l-2 border-copper/40 my-10">
                <p className="font-body text-xl text-walnut/80 leading-relaxed">
                  &quot;Kashmir has remained a clearing house of several civilizations,
                  it has made monumental contribution to Indian culture. There is
                  hardly any branch of human knowledge to which ancient Kashmir did
                  not make a pioneering and substantial contribution.&quot;
                </p>
              </blockquote>
              <p className="editorial-body text-walnut/80 leading-[1.9]">
                According to Pandit Jawahar Lal Nehru, &quot;Kashmir dominated the
                intellectual scene of India for almost 2000 years.&quot; Kashmir has a
                distinction of being a place where people from all walks of life and
                from all across the world have been coming to seek peace, knowledge
                and spiritual enlightenment.
              </p>
              <p className="editorial-body text-walnut/80 leading-[1.9]">
                The recent past quarter of the century has shattered the years old
                faith but has posed a great challenge before all Kashmiris
                irrespective of religion whether to collectively defeat the
                divisive forces and maintain the ancestral heritage.
              </p>
            </article>
            <div className="mt-10 pt-6 border-t border-stone/15">
              <p className="font-accent text-xs text-copper/60">
                — Dr. Roop Krishen Bhat, Managing Trustee
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
