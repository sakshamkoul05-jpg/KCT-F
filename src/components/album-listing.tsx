"use client"

import Image from "next/image"
import { AlbumPlaceholder } from "@/components/album-placeholder"
import { AudioPlayerProvider, TrackRow, type Queue } from "@/components/audio-player"
import { ALBUMS } from "@/lib/media"

export function AlbumListing() {
  return (
    <AudioPlayerProvider>
      <div className="space-y-16">
        {ALBUMS.map((album) => {
          const queue: Queue = { label: album.title, tracks: album.tracks }
          return (
            <section key={album.slug} id={album.slug} className="scroll-mt-28">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
                <div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-parchment shadow-sm">
                    {album.cover ? (
                      <Image
                        src={album.cover}
                        alt={album.title}
                        fill
                        className="object-cover"
                        sizes="240px"
                      />
                    ) : (
                      <AlbumPlaceholder title={album.title} />
                    )}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-walnut">
                    {album.title}
                  </h2>
                  <p className="font-accent text-[10px] uppercase tracking-[0.15em] text-walnut/40">
                    {album.tracks.length} tracks
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:content-start">
                  {album.tracks.map((track, i) => (
                    <TrackRow
                      key={track.src}
                      track={track}
                      queue={queue}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </AudioPlayerProvider>
  )
}
