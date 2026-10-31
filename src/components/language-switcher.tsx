"use client"

import { useI18n } from "@/lib/i18n-provider"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { locale, setLocale } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ks" : "en")}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors ${light ? "text-white hover:text-gold" : "text-walnut hover:text-chinar"}`}
      title={locale === "en" ? "Switch to Kashmiri" : "English میں تبدیل کریں"}
    >
      <Globe className="h-4 w-4" />
      {locale === "en" ? "کٲشُر" : "English"}
    </button>
  )
}
