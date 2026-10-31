"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SITE_CONFIG } from "@/lib/constants"
import { ContactForm } from "@/components/shared/contact-form"
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/animations"

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact"
        title={"Get in touch"}
        intro={"Questions about our work, publications or programmes, or an idea for working together — write to us or call."}
      />

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
                <div className="space-y-5">
                  {SITE_CONFIG.offices.map((office) => (
                    <div key={office.label} className="flex items-start gap-4 rounded-lg border border-stone/40 bg-white p-5 shadow-soft">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-chinar text-white shrink-0">
                        <MapPin className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-accent text-xs font-semibold text-copper mb-1">
                          {office.label}
                        </p>
                        <p className="font-body text-base text-walnut leading-relaxed">{office.address}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-4 rounded-lg border border-stone/40 bg-white p-5 shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-chinar text-white shrink-0">
                      <Mail className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-accent text-xs font-semibold text-copper mb-1">
                        Email
                      </p>
                      {SITE_CONFIG.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="block font-body text-base text-walnut hover:text-chinar transition-colors break-all">
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border border-stone/40 bg-white p-5 shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-chinar text-white shrink-0">
                      <Phone className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-accent text-xs font-semibold text-copper mb-1">
                        Mobile
                      </p>
                      <a href={`tel:${SITE_CONFIG.phoneHref}`} className="font-body text-base text-walnut hover:text-chinar transition-colors">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
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
