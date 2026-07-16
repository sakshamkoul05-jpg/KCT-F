"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n-provider"
import { FadeUp } from "@/components/animations"

export function Newsletter() {
  const { t } = useI18n()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative py-32 bg-parchment texture-manuscript" aria-labelledby="newsletter-heading">
      <div className="absolute inset-0 lighting-warm pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
            <span className="font-accent text-[11px] tracking-[0.3em] text-copper uppercase">
              {t.newsletter.title}
            </span>
            <span className="h-[1px] w-8 bg-copper/40" aria-hidden="true" />
          </div>

          <h2 id="newsletter-heading" className="editorial-heading text-3xl sm:text-4xl text-walnut mb-4">
            Join Our Community
          </h2>

          <p className="editorial-body text-walnut/70 max-w-lg mx-auto mb-10">
            {t.newsletter.subtitle}
          </p>

          {status === "success" ? (
            <div role="status" aria-live="polite" className="flex items-center justify-center gap-2 text-forest">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
              <span className="font-body text-sm">Thank you for subscribing!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t.newsletter.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                required
                className="flex-1 px-5 py-3.5 bg-white border border-stone/30 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-heritage !py-3.5 !px-8 disabled:opacity-50"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "loading" ? "Submitting..." : t.newsletter.subscribe}
              </button>
            </form>
          )}

          {status === "error" && (
            <p role="alert" aria-live="assertive" className="font-accent text-[11px] text-red-600 mt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="font-accent text-[11px] text-walnut/65 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
