# KCT Heritage - Frontend

Next.js 16 frontend for Kashmir Cultural Trust.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Pages
- `/` - Homepage
- `/about` - About KCT
- `/heritage` - Heritage timeline
- `/language-academy` - 48 audio lessons + publications
- `/events` - Events & programs
- `/publications` - Publications library
- `/gallery` - Visual archive
- `/contact` - Contact form
- `/donate` - Donation page
- `/admin/*` - Admin CMS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## Build

```bash
npm run build
```

## License

Kashmir Cultural Trust
