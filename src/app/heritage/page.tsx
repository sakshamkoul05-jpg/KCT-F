import { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cultural Heritage of Kashmir",
  description: `Explore the rich cultural heritage of Kashmir — a civilization that has contributed to Indian culture for over 5000 years. ${SITE_CONFIG.name}.`,
}

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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-walnut via-chinar-dark to-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Heritage
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Cultural Heritage<br />of Kashmir
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            According to Sir Aurel Stein, &quot;Kashmir has distinction of being
            the only region of India which possesses an uninterrupted series of
            written record of its history.&quot;
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Through the Ages
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Heritage Timeline
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone/30 -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-chinar rounded-full -translate-x-1/2 z-10 ring-4 ring-ivory" />
                  <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <p className="font-accent text-sm text-copper uppercase tracking-wider mb-1">{item.period}</p>
                    <h3 className="font-display text-2xl font-bold text-walnut mb-2">{item.title}</h3>
                    <p className="text-walnut/70 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section id="figures" className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Key Figures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFigures.map((figure) => (
              <div key={figure.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <p className="font-accent text-xs text-copper uppercase tracking-wider mb-2">{figure.era}</p>
                <h3 className="font-display text-2xl font-bold text-walnut mb-3">{figure.name}</h3>
                <p className="text-walnut/70 leading-relaxed">{figure.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-walnut">The Heritage Essay</h2>
            <p className="text-walnut/70 leading-relaxed">
              The archaeological excavations of Bourzahama 15 kms from Srinagar
              establish its antiquity to beyond 3000 BC. It has been established
              that Nagas were the original inhabitants of Kashmir and Kashmiris
              built their cultural traditions on the habits and customs of Nagas.
            </p>
            <p className="text-walnut/70 leading-relaxed">
              The interaction between vedic and Kashmiri traditions did develop in
              course of time but in Kashmir&apos;s religious literature the supremacy of
              Shiva over Vedic supreme God Indra has often been asserted. Buddhists
              and Jews have left tremendous influence on Kashmir history and culture.
            </p>
            <p className="text-walnut/70 leading-relaxed">
              The amalgamation of Shaivism and Islamic thoughts resulted in yet
              another school of thought called as Sufism, which flourished for
              hundreds of years. Both Shaivism and Sufism are the prominent schools
              of thought which developed in Kashmir and left indelible mark on the
              psyche of Kashmiris.
            </p>
            <blockquote className="border-l-4 border-chinar pl-6 italic text-walnut/80">
              &quot;Kashmir has remained a clearing house of several civilizations,
              it has made monumental contribution to Indian culture. There is
              hardly any branch of human knowledge to which ancient Kashmir did
              not make a pioneering and substantial contribution.&quot;
            </blockquote>
            <p className="text-walnut/70 leading-relaxed">
              According to Pandit Jawahar Lal Nehru, &quot;Kashmir dominated the
              intellectual scene of India for almost 2000 years.&quot; Kashmir has a
              distinction of being a place where people from all walks of life and
              from all across the world have been coming to seek peace, knowledge
              and spiritual enlightenment.
            </p>
            <p className="text-walnut/70 leading-relaxed">
              The recent past quarter of the century has shattered the years old
              faith but has posed a great challenge before all Kashmiris
              irrespective of religion whether to collectively defeat the
              divisive forces and maintain the ancestral heritage.
            </p>
          </article>
          <div className="mt-8 text-center">
            <p className="text-sm text-walnut/50 italic">— Dr. Roop Krishen Bhat, Managing Trustee</p>
          </div>
        </div>
      </section>
    </>
  )
}
