import type { Metadata } from "next";
// Self-hosted fonts (no build-time fetch from Google).
// Eczar + Mukta are Indian multi-script families; the three script faces render
// Kashmiri in Perso-Arabic (Nastaliq), Devanagari and the historic Sharada.
import "@fontsource-variable/eczar";
import "@fontsource/mukta/400.css";
import "@fontsource/mukta/500.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";
import "@fontsource/noto-nastaliq-urdu/400.css";
import "@fontsource-variable/noto-serif-devanagari";
import "@fontsource/noto-sans-sharada/400.css";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/constants";
import { I18nProvider } from "@/lib/i18n-provider";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.description}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.creator }],
  creator: SITE_CONFIG.creator,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full flex flex-col antialiased">
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
