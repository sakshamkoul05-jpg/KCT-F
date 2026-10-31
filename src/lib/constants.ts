export const SITE_CONFIG = {
  name: 'Kashmir Cultural Trust',
  shortName: 'KCT',
  description: 'Preserving the Soul of Kashmiri Civilization — A digital cultural platform for the promotion, preservation and dissemination of Kashmiri heritage.',
  url: 'https://kashmirculturaltrust.in',
  ogImage: '/images/og-default.jpg',
  creator: 'Kashmir Cultural Trust',
  email: 'kashmirculturaltrust@gmail.com',
  emails: ['kashmirculturaltrust@gmail.com', 'roopkbhat@gmail.com'],
  phone: '+91 98685 55535',
  phoneHref: '+919868555535',
  address: '471-Vinayak Nagar, Muthi, Jammu-181205',
  offices: [
    { label: 'Registered Office', address: '471-Vinayak Nagar, Muthi, Jammu – 181205' },
    { label: 'Sub Office', address: 'A-19, Kailash Apartments, Sector 4, Plot 2, Dwarka, New Delhi – 110078' },
  ],
  copyright: '© 2026 Kashmir Cultural Trust. All rights reserved.',
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
      { label: 'Our Story', href: '/about' },
      { label: 'Objectives', href: '/about#objectives' },
      { label: 'Leadership', href: '/about#leadership' },
    ],
  },
  {
    label: 'Heritage',
    href: '/heritage',
    children: [
      { label: 'Cultural Heritage', href: '/heritage' },
      { label: 'Timeline', href: '/heritage' },
      { label: 'Key Figures', href: '/heritage' },
    ],
  },
  {
    label: 'Learn Kashmiri',
    href: '/learn-kashmiri',
    children: [
      { label: 'Learning Path', href: '/learn-kashmiri#path' },
      { label: 'Books & Publications', href: '/learn-kashmiri#library' },
      { label: 'Vaakh Journal', href: '/learn-kashmiri#vaakh' },
      { label: 'Music Albums', href: '/learn-kashmiri/music' },
    ],
  },
  { label: 'Events', href: '/events' },
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
    { label: 'Learn Kashmiri', href: '/learn-kashmiri' },
    { label: 'Books & Publications', href: '/learn-kashmiri#library' },
    { label: 'Vaakh Journal', href: '/learn-kashmiri#vaakh' },
    { label: 'Gallery', href: '/gallery' },
  ],
  engage: [
    { label: 'Events', href: '/events' },
    { label: 'Donate', href: '/donate' },
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
