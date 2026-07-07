import { Hero } from "@/components/homepage/hero"
import { Mission } from "@/components/homepage/mission"
import { FeaturedPublications } from "@/components/homepage/featured-publications"
import { LanguagePreview } from "@/components/homepage/language-preview"
import { EventsPreview } from "@/components/homepage/events-preview"
import { GalleryHighlights } from "@/components/homepage/gallery-highlights"
import { Newsletter } from "@/components/homepage/newsletter"
import { DonationCTA } from "@/components/homepage/donation-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <FeaturedPublications />
      <LanguagePreview />
      <EventsPreview />
      <GalleryHighlights />
      <Newsletter />
      <DonationCTA />
    </>
  )
}
