"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NAVIGATION } from "@/lib/constants"
import { Menu, X, ChevronDown } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass py-3 shadow-[0_1px_0_rgba(196,181,160,0.15)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-sm font-display text-lg font-bold transition-all duration-300",
                  isScrolled
                    ? "bg-chinar text-white"
                    : "bg-white/10 text-white border border-white/20"
                )}
              >
                K
              </div>
              <div className="absolute -inset-1 rounded-sm bg-chinar/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <div
                className={cn(
                  "font-display text-sm font-semibold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-walnut" : "text-white"
                )}
              >
                Kashmir Cultural Trust
              </div>
              <div
                className={cn(
                  "font-accent text-[10px] tracking-[0.2em] uppercase transition-colors duration-300",
                  isScrolled ? "text-walnut/80" : "text-white/70"
                )}
              >
                Est. 2000
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAVIGATION.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 font-accent text-[13px] font-medium tracking-wide transition-colors duration-300 relative group",
                    isScrolled
                      ? "text-walnut/85 hover:text-chinar"
                      : "text-white/85 hover:text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="inline-block ml-1 h-3 w-3 opacity-50" aria-hidden="true" />
                  )}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                      isScrolled ? "bg-chinar" : "bg-[#C9A96E]"
                    )}
                    aria-hidden="true"
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="glass rounded-lg py-2 min-w-[200px] shadow-elevated">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-walnut/85 hover:text-chinar hover:bg-chinar-muted transition-colors font-body"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <Link
              href="/donate"
              className={cn(
                "hidden sm:inline-flex items-center px-5 py-2.5 font-accent text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm transition-all duration-400",
                isScrolled
                  ? "bg-chinar text-white hover:bg-chinar-dark shadow-soft hover:shadow-medium"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              )}
            >
              Donate
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "lg:hidden p-2 rounded-sm transition-colors",
                isScrolled
                  ? "text-walnut hover:bg-walnut-muted"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-stone/10 overflow-hidden"
          >
            <nav className="mx-auto max-w-7xl px-6 py-6" aria-label="Mobile navigation">
              {NAVIGATION.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-3 text-walnut font-body text-[15px] hover:text-chinar transition-colors border-b border-stone/10"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="mt-6">
                <Link
                  href="/donate"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center btn-heritage"
                >
                  Donate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
