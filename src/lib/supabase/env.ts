/**
 * Resolves the Supabase connection settings for server-side code.
 *
 * Two things this guards against, both of which have broken deploys before:
 *
 * 1. Reading these at module scope crashes `next build` with the opaque
 *    "supabaseUrl is required" during page-data collection. Always call this
 *    *inside* a request handler, never at import time.
 * 2. The names are easy to get wrong — the backend repo's `.env.example`
 *    documents `SUPABASE_URL`, while the app reads `NEXT_PUBLIC_SUPABASE_URL`.
 *    Both are accepted here, and a missing value names exactly what to set.
 *
 * Browser code cannot use the un-prefixed names (only `NEXT_PUBLIC_*` is
 * inlined into the client bundle), so `supabase/client.ts` reads them directly.
 */
export function supabaseEnv(): { url: string; anonKey: string } {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY

  const missing = [
    !url && "NEXT_PUBLIC_SUPABASE_URL",
    !anonKey && "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  ].filter(Boolean)

  if (missing.length) {
    throw new Error(
      `Supabase is not configured: missing ${missing.join(" and ")}. ` +
        `Set these in your hosting provider's environment variables ` +
        `(on Vercel: Settings → Environment Variables), then redeploy. ` +
        `Note the NEXT_PUBLIC_ prefix — SUPABASE_URL alone is not read by the browser.`
    )
  }

  return { url: url!, anonKey: anonKey! }
}
