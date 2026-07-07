"use client"

import { createContext, useContext, useState, useCallback } from "react"
import type { Locale } from "@/lib/i18n"
import en from "@/locales/en/common.json"
import ks from "@/locales/ks/common.json"

const translations: Record<Locale, typeof en> = { en, ks }

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof en
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("kct-locale", newLocale)
    }
  }, [])

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
