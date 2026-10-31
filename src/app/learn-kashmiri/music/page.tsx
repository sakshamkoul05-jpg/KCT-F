import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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
      <section className="bg-[#0B1730] pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/learn-kashmiri"
            className="mb-8 inline-flex items-center gap-2 font-accent text-xs uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Learn Kashmiri
          </Link>
          <h1 className="editorial-heading mb-4 text-5xl text-white sm:text-6xl">
            Music Albums
          </h1>
          <p className="max-w-2xl text-lg text-white/85">
            {`${TRACK_COUNT} recordings across ${ALBUMS.length} albums from the Trust's archive. Select any track to begin listening.`}
          </p>
        </div>
      </section>

      <section className="bg-snow py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlbumListing />
        </div>
      </section>
    </>
  )
}
