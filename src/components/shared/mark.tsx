import Image from "next/image"

/** The Trust's chinar-leaf logo on a white tile, so it reads on any background. */
export function Mark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <span className={`relative block rounded-sm bg-white ${className}`}>
      <Image src="/images/site/logo-240.png" alt="" fill sizes="48px" className="object-contain p-1" priority />
    </span>
  )
}
