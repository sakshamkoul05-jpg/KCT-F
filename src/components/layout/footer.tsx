"use client"

import Link from "next/link"
import { SITE_CONFIG, NAVIGATION, FOOTER_LINKS } from "@/lib/constants"
import { Mail, Phone, MapPin } from "lucide-react"
import { Mark } from "@/components/shared/mark"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com/kashmirculturaltrust", label: "Facebook" },
  { icon: TwitterIcon, href: "https://x.com/kctkashmir", label: "Twitter" },
  { icon: YoutubeIcon, href: "https://youtube.com/@kashmirculturaltrust", label: "YouTube" },
  { icon: InstagramIcon, href: "https://instagram.com/kashmirculturaltrust", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-lapis-deep text-white/90 overflow-hidden">
      <div className="sozni-rule" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Mark className="h-12 w-12 shrink-0" />
              <div>
                <div className="font-display text-lg font-semibold text-white">
                  Kashmir Cultural Trust
                </div>
                <div className="text-sm text-white/80">
                  Since 2000
                </div>
              </div>
            </Link>
            <p className="font-body text-sm text-white/85 leading-relaxed mb-6">
              Promoting, preserving and sharing the Kashmiri language, literature and culture — with the diaspora and the world.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:text-gold hover:bg-gold/10 hover:border-gold/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-light mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-white/90 hover:text-gold-light transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-light mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-white/90 hover:text-gold-light transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-light mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {SITE_CONFIG.offices.map((office) => (
                <li key={office.label} className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
                  <span className="font-body text-sm text-white/85 leading-relaxed">
                    <span className="block text-xs font-semibold text-white">{office.label}</span>
                    {office.address}
                  </span>
                </li>
              ))}
              {SITE_CONFIG.emails.map((email) => (
                <li key={email} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="font-body text-base text-white/90 hover:text-gold-light transition-colors break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phoneHref}`}
                  className="font-body text-base text-white/90 hover:text-gold-light transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-accent text-xs text-white/85">
            {SITE_CONFIG.copyright}
          </p>
          <p className="font-accent text-xs text-white/85">
            {SITE_CONFIG.registration}
          </p>
        </div>
      </div>
    </footer>
  )
}
