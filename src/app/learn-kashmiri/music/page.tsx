import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { AlbumListing } from "@/components/album-listing"
import { SITE_CONFIG } from "@/lib/constants"
import { ALBUMS, TRACK_COUNT } from "@/lib/media"

export const metadata: Metadata = {
  title: "Music Albums",
  description: `Listen to ${TRACK_COUNT} tracks across ${ALBUMS.length} albums of Kashmiri music from the ${SITE_CONFIG.name} archive.`,
}

export default function MusicPage() {
  return (
    <>
      <PageHero
        kicker="Learn Kashmiri"
        title="Kashmiri Music"
        intro={`${TRACK_COUNT} recordings across ${ALBUMS.length} albums from the Trust's archive. Choose any track to start listening.`}
      >
        <Link href="/learn-kashmiri" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-light hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to the course
        </Link>
      </PageHero>

      <section className="bg-snow py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlbumListing />
        </div>
      </section>
    </>
  )
}
