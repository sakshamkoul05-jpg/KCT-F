import type { ReactNode } from "react"

/**
 * Standard top-of-page banner: lapis with the khatamband lattice, left-aligned
 * title, and a sozni-stitch rule along the bottom edge.
 */
export function PageHero({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-lapis pt-36 pb-16 text-white sm:pb-20">
      <div className="absolute inset-0 lattice lattice-fade" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {kicker && <p className="kicker on-dark mb-3">{kicker}</p>}
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {intro && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{intro}</div>
        )}
        {children}
      </div>
      <div className="sozni-rule absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  )
}
