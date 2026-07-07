"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      })
      if (!res.ok) throw new Error("Failed to submit")
      setStatus("success")
      form.reset()
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
        <CheckCircle className="h-16 w-16 text-forest mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-walnut mb-2">
          Message Sent!
        </h3>
        <p className="text-walnut/60">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-walnut mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-walnut mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-walnut mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-walnut mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent resize-none"
          placeholder="Write your message..."
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-chinar text-white font-medium rounded-lg hover:bg-chinar-dark transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}
