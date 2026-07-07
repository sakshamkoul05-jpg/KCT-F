export const SITE_CONFIG = {
  name: 'Kashmir Cultural Trust',
  shortName: 'KCT',
  description: 'Preserving the Soul of Kashmiri Civilization — A digital cultural platform for the promotion, preservation and dissemination of Kashmiri heritage.',
  url: 'https://kashmirculturaltrust.in',
  ogImage: '/images/og-default.jpg',
  creator: 'Kashmir Cultural Trust',
  email: 'kmshr.heritage@gmail.com',
  phone: '+91 9419279044',
  address: '471-Vinayak Nagar, Muthi, Jammu-181205',
  copyright: '© 2024 Kashmir Cultural Trust. All rights reserved.',
  registration: 'Registered under J&K Societies Registration Act',
  keywords: [
    'Kashmir Cultural Trust',
    'Kashmiri heritage',
    'Kashmiri Pandit culture',
    'Kashmiri language',
    'Kashmir history',
    'Kashmiri literature',
    'Vaakh journal',
    'Learn Kashmiri',
    'Kashmir cultural preservation',
  ],
} as const

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Objectives', href: '/about#objectives' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: "Dr. R.K. Bhat's Profile", href: '/about#dr-bhat' },
    ],
  },
  {
    label: 'Heritage',
    href: '/heritage',
    children: [
      { label: 'Cultural Heritage', href: '/heritage' },
      { label: 'Interactive Timeline', href: '/heritage#timeline' },
      { label: 'Key Figures', href: '/heritage#figures' },
    ],
  },
  {
    label: 'Language Academy',
    href: '/language-academy',
    children: [
      { label: 'Spoken Kashmiri Course', href: '/language-academy/courses' },
      { label: 'Publications Library', href: '/language-academy/publications' },
      { label: 'Music Albums', href: '/language-academy/music' },
    ],
  },
  { label: 'Events', href: '/events' },
  {
    label: 'Publications',
    href: '/publications',
    children: [
      { label: 'All Publications', href: '/publications' },
      { label: 'Vaakh Journal', href: '/publications/vaakh' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_LINKS = {
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Objectives', href: '/about#objectives' },
    { label: 'Trustees', href: '/about#leadership' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Language Academy', href: '/language-academy' },
    { label: 'Publications', href: '/publications' },
    { label: 'Vaakh Journal', href: '/publications/vaakh' },
    { label: 'Gallery', href: '/gallery' },
  ],
  engage: [
    { label: 'Events', href: '/events' },
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/about#volunteer' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
} as const

export const GALLERY_CATEGORIES = [
  'All',
  'Landscapes',
  'Events',
  'Culture',
  'Architecture',
  'Community',
  'Traditional Crafts',
] as const

export const PUBLICATION_CATEGORIES = [
  'Language Learning',
  'Cultural Studies',
  'Scholarly Works',
  'Literary Journal',
] as const

export const EVENT_TYPES = [
  'Samanbal',
  'Conference',
  'Seminar',
  'Workshop',
  'Cultural Meet',
  'Book Release',
] as const
