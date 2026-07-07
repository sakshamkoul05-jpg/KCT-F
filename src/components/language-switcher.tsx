"use client"

import { useI18n } from "@/lib/i18n-provider"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ks" : "en")}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-walnut/70 hover:text-chinar transition-colors"
      title={locale === "en" ? "Switch to Kashmiri" : "English میں تبدیل کریں"}
    >
      <Globe className="h-4 w-4" />
      {locale === "en" ? "کٲشُر" : "English"}
    </button>
  )
}
