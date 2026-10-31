"use client"

import { ReactNode } from "react"

/*
 * Scroll-triggered entrance effects were removed on purpose: content should
 * always be visible and still. The homepage hero has the site's one
 * orchestrated reveal. These wrappers are kept so existing pages keep working.
 */

type AnimationProps = {
  children: ReactNode
  className?: string
  delay?: number
}

function Plain({ children, className }: AnimationProps) {
  return <div className={className}>{children}</div>
}

export const FadeUp = Plain
export const FadeIn = Plain
export const ScaleIn = Plain
export const SlideInLeft = Plain
export const SlideInRight = Plain
export const StaggerChildren = Plain
export const StaggerItem = Plain
export function ParallaxSection({ children, className }: AnimationProps & { speed?: number }) {
  return <div className={className}>{children}</div>
}
