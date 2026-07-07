"use client"

import { useState } from "react"
import { Heart, BookOpen, Mic, Calendar, Users } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { FadeUp, StaggerChildren, StaggerItem, SlideInLeft, SlideInRight } from "@/components/animations"

const impacts = [
  { icon: BookOpen, label: "Publications", value: "14+", description: "Books and monographs published" },
  { icon: Mic, label: "Audio Lessons", value: "48", description: "Structured language lessons" },
  { icon: Calendar, label: "Events", value: "8+", description: "Cultural events organized" },
  { icon: Users, label: "Years", value: "24+", description: "Years of cultural service" },
]

const amounts = ["1000", "2500", "5000", "10000"]

export default function DonatePage() {
  const [selected, setSelected] = useState("2500")

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chinar-dark via-chinar to-walnut" />
        <div className="absolute inset-0 texture-wood opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.12)_0%,transparent_70%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-opacity='0.5' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 border border-white/20 mb-8">
              <Heart className="h-7 w-7 text-[#C9A96E]" strokeWidth={1.5} />
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              Support Our Mission
            </h1>
            <p className="font-editorial text-xl text-white/40 italic max-w-2xl mx-auto leading-relaxed">
              Your contribution helps us continue preserving and promoting the rich
              cultural heritage of Kashmir for future generations.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Donation Form + Impact */}
      <section className="relative py-32 bg-ivory texture-parchment">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <SlideInLeft>
              <div className="bg-white p-8 lg:p-10 rounded-lg border border-stone/15 shadow-soft">
                <h2 className="font-display text-2xl font-semibold text-walnut mb-6">
                  Make a Donation
                </h2>

                {/* Amount presets */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSelected(amt)}
                      className={`py-3 rounded-sm font-accent text-sm tracking-wider transition-all duration-300 ${
                        selected === amt
                          ? "bg-chinar text-white shadow-medium"
                          : "bg-cream border border-stone/20 text-walnut/60 hover:border-chinar/30"
                      }`}
                    >
                      ₹{Number(amt).toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-accent text-[10px] tracking-[0.15em] text-walnut/50 uppercase mb-1 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-accent text-[10px] tracking-[0.15em] text-walnut/50 uppercase mb-1 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-accent text-[10px] tracking-[0.15em] text-walnut/50 uppercase mb-1 block">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  <button className="btn-heritage w-full !py-4">
                    <Heart className="h-4 w-4" />
                    Donate ₹{Number(selected).toLocaleString()}
                  </button>
                </div>
              </div>
            </SlideInLeft>

            {/* Impact */}
            <SlideInRight>
              <div>
                <h2 className="font-display text-2xl font-semibold text-walnut mb-8">
                  Your Impact
                </h2>
                <StaggerChildren className="grid grid-cols-2 gap-6">
                  {impacts.map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="bg-white p-6 rounded-lg border border-stone/10 shadow-soft group hover:shadow-medium hover:border-chinar/10 transition-all duration-400">
                        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-chinar-muted border border-chinar/10 text-chinar mb-4 group-hover:bg-chinar group-hover:text-white group-hover:border-chinar transition-all duration-400">
                          <item.icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div className="font-display text-3xl font-bold text-walnut mb-1">
                          {item.value}
                        </div>
                        <p className="font-accent text-[10px] tracking-[0.15em] text-copper uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="font-body text-xs text-walnut/40">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                {/* Trust indicators */}
                <div className="mt-10 flex flex-wrap gap-6 text-walnut/30">
                  {["Registered NGO", "80G Tax Benefits", "Transparent Usage"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-copper/40" />
                        <span className="font-accent text-[10px] tracking-[0.15em] uppercase">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </>
  )
}
