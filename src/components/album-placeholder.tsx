import { Disc3 } from "lucide-react"

/**
 * Stand-in for album artwork. The archive shipped the recordings without
 * cover images; this keeps the grid looking deliberate until real art exists.
 */
export function AlbumPlaceholder({ title }: { title: string }) {
  return (
    <div
      role="img"
      aria-label={`${title} — no cover artwork`}
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-walnut via-[#2D1810] to-chinar-dark"
    >
      <Disc3 className="h-10 w-10 text-gold/50" strokeWidth={1.25} />
      <span className="px-4 text-center font-accent text-[10px] uppercase tracking-[0.2em] text-white/40">
        {title}
      </span>
    </div>
  )
}
