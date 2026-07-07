"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement actual subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-chinar to-chinar-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Newsletter
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Subscribe to our newsletter for updates on cultural events,
            publications, and heritage preservation efforts.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-saffron">
              <CheckCircle className="h-6 w-6" />
              <p className="font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-white font-medium rounded-lg hover:bg-saffron-light transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
