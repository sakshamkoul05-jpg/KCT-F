"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NAVIGATION, type NavItem } from "@/lib/constants"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chinar text-white font-display text-xl font-bold">
              K
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-display text-lg font-bold leading-tight transition-colors",
                  isScrolled ? "text-walnut" : "text-white"
                )}
              >
                Kashmir Cultural Trust
              </p>
              <p
                className={cn(
                  "text-xs tracking-wider transition-colors",
                  isScrolled ? "text-walnut/60" : "text-white/70"
                )}
              >
                PRESERVING HERITAGE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.href)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isScrolled
                      ? "text-walnut hover:text-chinar hover:bg-chinar/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white p-2 shadow-xl border border-stone/20 animate-fadeIn">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-walnut hover:text-chinar hover:bg-ivory rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <div className={cn(
              isScrolled ? "" : ""
            )}>
              <LanguageSwitcher />
            </div>

            <Link
              href="/search"
              className={cn(
                "p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-walnut hover:text-chinar hover:bg-chinar/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              <Search className="h-5 w-5" />
            </Link>

            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-chinar text-white text-sm font-medium rounded-lg hover:bg-chinar-dark transition-colors"
            >
              Donate
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-walnut hover:bg-chinar/5"
                  : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone/20 animate-slideUp">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            {NAVIGATION.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-walnut hover:text-chinar hover:bg-ivory rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l-2 border-stone/20 pl-4 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-walnut/70 hover:text-chinar transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-chinar text-white font-medium rounded-lg hover:bg-chinar-dark transition-colors"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
