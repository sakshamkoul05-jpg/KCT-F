"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { FadeUp } from "@/components/animations"

export function Newsletter() {
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
    <section className="relative py-24 bg-parchment texture-manuscript">
      <div className="absolute inset-0 lighting-warm pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-copper/40" />
            <span className="font-accent text-[10px] tracking-[0.3em] text-copper uppercase">
              Stay Connected
            </span>
            <span className="h-[1px] w-8 bg-copper/40" />
          </div>

          <h2 className="editorial-heading text-3xl sm:text-4xl text-walnut mb-4">
            Join Our Community
          </h2>

          <p className="editorial-body text-walnut/50 max-w-lg mx-auto mb-10">
            Subscribe for the latest on events, publications, and cultural
            initiatives from Kashmir Cultural Trust.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-forest">
              <CheckCircle className="h-5 w-5" />
              <span className="font-body text-sm">Thank you for subscribing!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-stone/30 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-heritage !py-3.5 !px-8 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="font-accent text-[10px] text-red-500 mt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="font-accent text-[10px] text-walnut/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
