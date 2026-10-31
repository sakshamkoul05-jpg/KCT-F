"use client"

import { useState } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { Heart, BookOpen, Mic, Calendar, Users } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { useI18n } from "@/lib/i18n-provider"
import { FadeUp, StaggerChildren, StaggerItem, SlideInLeft, SlideInRight } from "@/components/animations"

const impacts = [
  { icon: BookOpen, labelKey: "publications", value: "14+", description: "Books and monographs published" },
  { icon: Mic, labelKey: "lessons", value: "48", description: "Structured language lessons" },
  { icon: Calendar, labelKey: "events", value: "8+", description: "Cultural events organized" },
  { icon: Users, labelKey: "years", value: "24+", description: "Years of cultural service" },
]

const amounts = ["1000", "2500", "5000", "10000"]

export default function DonatePage() {
  const { t } = useI18n()
  const [selected, setSelected] = useState("2500")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setStatus("loading")
    // Simulate donation processing
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
  }

  return (
    <>
      <PageHero kicker="Donate"
        title={t.donate.title}
        intro={t.donate.subtitle}
      />

      {/* Donation Form + Impact */}
      <section className="relative py-32 bg-ivory texture-parchment">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <SlideInLeft>
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 rounded-lg border border-stone/15 shadow-soft">
                <h2 className="font-display text-2xl font-semibold text-walnut mb-6">
                  Make a Donation
                </h2>

                {/* Amount presets */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelected(amt)}
                      aria-pressed={selected === amt}
                      className={`py-3 rounded-sm font-accent text-sm transition-all duration-300 ${
                        selected === amt
                          ? "bg-chinar text-white shadow-medium"
                          : "bg-cream border border-stone/20 text-walnut hover:border-chinar/30"
                      }`}
                    >
                      ₹{Number(amt).toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="donor-name" className="font-accent text-[13px] text-walnut mb-1 block">
                      Full Name *
                    </label>
                    <input
                      id="donor-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-email" className="font-accent text-[13px] text-walnut mb-1 block">
                      Email Address *
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="donor-message" className="font-accent text-[13px] text-walnut mb-1 block">
                      Message (Optional)
                    </label>
                    <textarea
                      id="donor-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-cream border border-stone/20 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>

                  {status === "success" && (
                    <div role="status" aria-live="polite" className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-700 font-body text-sm">
                      Thank you for your donation of ₹{Number(selected).toLocaleString()}! Your generosity helps preserve Kashmir&apos;s cultural heritage.
                    </div>
                  )}

                  {status === "error" && (
                    <div role="alert" aria-live="assertive" className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 font-body text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-heritage w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Heart className="h-4 w-4" aria-hidden="true" />
                        Donate ₹{Number(selected).toLocaleString()}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </SlideInLeft>

            {/* Impact */}
            <SlideInRight>
              <div>
                <h2 className="font-display text-2xl font-semibold text-walnut mb-8">
                  Your Impact
                </h2>
                <StaggerChildren className="grid grid-cols-2 gap-6">
                  {impacts.map((item) => (
                    <StaggerItem key={item.labelKey}>
                      <div className="bg-white p-6 rounded-lg border border-stone/10 shadow-soft group hover:shadow-medium hover:border-chinar/10 transition-all duration-400">
                        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-chinar-muted border border-chinar/10 text-chinar mb-4 group-hover:bg-chinar group-hover:text-white group-hover:border-chinar transition-all duration-400">
                          <item.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="font-display text-3xl font-bold text-walnut mb-1">
                          {item.value}
                        </div>
                        <p className="font-accent text-[13px] text-copper mb-1">
                          {item.labelKey === "publications" ? "Publications" : item.labelKey === "lessons" ? "Audio Lessons" : item.labelKey === "events" ? "Events" : "Years of Service"}
                        </p>
                        <p className="font-body text-xs text-walnut/80">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                {/* Trust indicators */}
                <div className="mt-10 flex flex-wrap gap-6">
                  {["Registered NGO", "80G Tax Benefits", "Transparent Usage"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-copper/60" aria-hidden="true" />
                        <span className="font-accent text-[13px] text-walnut/80">
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
