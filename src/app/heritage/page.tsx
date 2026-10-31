"use client"

import { SITE_CONFIG } from "@/lib/constants"
import { PageHero } from "@/components/shared/page-hero"
import { FadeUp, StaggerChildren, StaggerItem, SlideInLeft, SlideInRight } from "@/components/animations"

const timeline = [
  { period: "3000+ BC", title: "Ancient Origins", description: "Bourzahama excavations establish Kashmir's antiquity beyond 3000 BC. Nagas were the original inhabitants." },
  { period: "1st-5th C AD", title: "Philosophical Golden Age", description: "Abhinav Gupta claims primacy of agamas over Vedas. Kashmir Shaivism emerges as a distinct philosophical tradition." },
  { period: "Medieval", title: "Buddhism & Shaivism", description: "Smooth transition from Nagas to Buddhism. Vasugupta and Abhinavgupta synthesize local beliefs into Trikha philosophy." },
  { period: "1300s", title: "Sufism Flourishes", description: "Lal Ded and Nundrishi translate religion into Kashmir's spiritual idiom. The Rishi order emerges." },
  { period: "1586-1752", title: "Mughal & Afghan Rule", description: "Alien rulers challenge Kashmiri traditions. Community struggles to maintain cultural identity." },
  { period: "1990", title: "Mass Displacement", description: "Tragic exodus of Kashmiri Hindus. Community searches for social security and cultural preservation in diaspora." },
  { period: "2000-Present", title: "Heritage Preservation", description: "KCT and similar organizations work to preserve Kashmiri language, literature, and culture for future generations." },
]

const keyFigures = [
  { name: "Lal Ded", era: "14th Century", contribution: "Mystic poet and spiritual leader. Foundation of Kashmiri Shaivism and Rishi order." },
  { name: "Abhinav Gupta", era: "950-1016 AD", contribution: "Philosopher, aesthetician, and scholar. Primacy of agamas over Vedas." },
  { name: "Nundrishi", era: "14th Century", contribution: "Spiritual leader who carried Lal Ded's message in the form of Rishi order." },
  { name: "Kalhana", era: "12th Century", contribution: "Author of Rajatarangini, the celebrated history of Kashmir." },
  { name: "Vasugupta", era: "9th Century", contribution: "Founded Kashmir Shaivism and discovered the Shiva Sutras." },
]

export default function HeritagePage() {
  return (
    <>
      <PageHero kicker="Heritage"
        title={<>Cultural Heritage<br />of Kashmir</>}
        intro={<>&ldquo;Kashmir has the distinction of being the only region of India which possesses an uninterrupted series of written records of its history.&rdquo; <span className="whitespace-nowrap text-gold-light">— Sir Aurel Stein</span></>}
      />

      {/* Timeline */}
      <section id="timeline" className="relative py-32 bg-ivory texture-parchment">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="text-center mb-16">
            <p className="kicker mb-4">Through the ages</p>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-walnut">
              Heritage Timeline
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-stone/30 to-transparent -translate-x-1/2" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-copper rounded-full -translate-x-1/2 z-10 ring-4 ring-ivory" />
                    <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <p className="font-accent text-xs text-copper mb-2">
                        {item.period}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-walnut mb-3">
                        {item.title}
                      </h3>
                      <p className="editorial-body text-walnut/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section id="figures" className="relative py-32 bg-snow">
        <div className="absolute inset-0 lighting-heritage pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="text-center mb-16">
            <p className="kicker mb-4">Pioneers</p>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-walnut">
              Key Figures
            </h2>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFigures.map((figure) => (
              <StaggerItem key={figure.name}>
                <div className="card-editorial p-8 group">
                  <p className="font-accent text-xs text-copper mb-3">
                    {figure.era}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-walnut mb-4 group-hover:text-chinar transition-colors duration-300">
                    {figure.name}
                  </h3>
                  <p className="editorial-body text-sm text-walnut/80 leading-relaxed">
                    {figure.contribution}
                  </p>
                  <div className="mt-6 h-[1px] w-8 bg-gradient-to-r from-copper/40 to-transparent group-hover:w-16 transition-all duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

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
