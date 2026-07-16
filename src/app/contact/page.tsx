"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { ContactForm } from "@/components/shared/contact-form"
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/animations"

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A0F0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F0A] via-[#2D1810] to-[#3D2015]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.08)_0%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
              <span className="font-accent text-[10px] tracking-[0.3em] text-[#D4BA85] uppercase">
                Contact
              </span>
              <span className="h-[1px] w-8 bg-[#C9A96E]/40" />
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              Get in Touch
            </h1>
            <p className="font-editorial text-xl text-white/75 italic max-w-2xl leading-relaxed">
              We&apos;d love to hear from you. Whether you have questions about our
              work, want to collaborate, or simply want to connect.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-32 bg-ivory texture-parchment">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <SlideInLeft>
              <div>
                <h2 className="editorial-heading text-3xl text-walnut mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: "Address", value: SITE_CONFIG.address },
                    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                    { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-chinar-muted border border-chinar/10 text-chinar shrink-0">
                        <item.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-accent text-[10px] tracking-[0.2em] text-copper uppercase mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="font-body text-walnut/70 hover:text-chinar transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-walnut/70">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            {/* Form */}
            <SlideInRight>
              <div className="bg-white p-8 lg:p-10 rounded-lg border border-stone/15 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-walnut mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </>
  )
}
