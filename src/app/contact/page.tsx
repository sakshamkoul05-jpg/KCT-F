import { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { ContactForm } from "@/components/shared/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_CONFIG.name}. We'd love to hear from you.`,
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            Contact
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            We&apos;d love to hear from you. Whether you have questions about our
            work, want to collaborate, or simply want to connect — please reach
            out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-walnut mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chinar/10 text-chinar shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-walnut mb-1">Address</p>
                    <p className="text-walnut/60">
                      Kashmir Cultural Trust
                      <br />
                      471-Vinayak Nagar, Muthi
                      <br />
                      Jammu-181205
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chinar/10 text-chinar shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-walnut mb-1">Phone</p>
                    <a
                      href="tel:+919868555535"
                      className="text-walnut/60 hover:text-chinar transition-colors"
                    >
                      +91 9868 555 535
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chinar/10 text-chinar shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-walnut mb-1">Email</p>
                    <a
                      href="mailto:kashmirculturaltrust@gmail.com"
                      className="text-walnut/60 hover:text-chinar transition-colors block"
                    >
                      kashmirculturaltrust@gmail.com
                    </a>
                    <a
                      href="mailto:roopkbhat@gmail.com"
                      className="text-walnut/60 hover:text-chinar transition-colors block"
                    >
                      roopkbhat@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-ivory rounded-2xl flex items-center justify-center">
                <p className="text-walnut/40">Map integration</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-walnut mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
