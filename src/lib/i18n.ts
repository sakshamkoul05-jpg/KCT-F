export type Locale = "en" | "ks"

export const locales: Locale[] = ["en", "ks"]
export const defaultLocale: Locale = "en"

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/")
  if (segments.length > 1 && isValidLocale(segments[1])) {
    return segments[1]
  }
  return defaultLocale
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "ks" : "en"
}

export function getPathWithoutLocale(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return pathname
  return pathname.replace(`/${locale}`, "") || "/"
}
