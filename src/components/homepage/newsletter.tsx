"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { FadeUp } from "@/components/animations"

export function Newsletter() {
  const [email, setEmail] = useState("")

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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-white border border-stone/30 rounded-sm font-body text-sm text-walnut placeholder:text-stone-dark focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all"
            />
            <button
              type="submit"
              className="btn-heritage !py-3.5 !px-8"
            >
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>

          <p className="font-accent text-[10px] text-walnut/30 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
