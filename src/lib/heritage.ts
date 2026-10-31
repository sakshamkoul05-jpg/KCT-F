/**
 * Heritage page content: the illustrated timeline and the key figures.
 * Dates follow the standard histories (Stein's Rajatarangini, Kaul, Bamzai).
 */

export type Era = {
  id: string
  period: string
  title: string
  text: string
}

export const ERAS: Era[] = [
  {
    id: "origins",
    period: "c. 3000 BC",
    title: "Ancient origins",
    text: "Excavations at Burzahom, near Srinagar, reveal people living in pit dwellings beside standing stones more than five thousand years ago. Legend remembers the Nagas as the valley’s first inhabitants.",
  },
  {
    id: "buddhism",
    period: "3rd c. BC – 6th c. AD",
    title: "The Buddhist centuries",
    text: "Buddhism reaches Kashmir in Ashoka’s time, and under Kanishka the valley is said to host a great Buddhist council. Kashmiri monks carry the teaching to Central Asia, Tibet and China.",
  },
  {
    id: "golden-age",
    period: "8th – 12th c. AD",
    title: "The golden age of learning",
    text: "Lalitaditya raises the Martand Sun Temple. Vasugupta, Abhinavagupta and their circle make Kashmir Shaivism one of India’s great philosophies, and Kalhana writes the Rajatarangini, the River of Kings.",
  },
  {
    id: "rishis",
    period: "14th – 15th c.",
    title: "Lal Ded and the Rishis",
    text: "Lal Ded sings her vaakhs, among the first poems in the Kashmiri language. Nund Rishi founds the Rishi order, and Sufi masters arrive — shaping the shared spiritual idiom of Kashmir.",
  },
  {
    id: "conquest",
    period: "1586 – 1819",
    title: "Mughal and Afghan rule",
    text: "The Mughals annex Kashmir and lay out their gardens, but the valley is now ruled from afar. Under the Afghans that follow, persecution, heavy taxes and forced conversions drive many from their homes.",
  },
  {
    id: "exodus",
    period: "1990",
    title: "The exodus",
    text: "Targeted killings and threats force the Kashmiri Pandit community from the valley almost overnight. Hundreds of thousands leave their homes for camps in Jammu, Delhi and beyond — and a language and culture are suddenly scattered.",
  },
  {
    id: "preservation",
    period: "2000 – today",
    title: "Keeping it alive",
    text: "Kashmir Cultural Trust is founded in 2000 to keep the language, literature and culture alive across the diaspora — through books, the Vaakh journal, recorded lessons and Samanbal gatherings.",
  },
]

export type Figure = {
  id: string
  name: string
  also?: string
  era: string
  summary: string
  role: string
  bio: string[]
  legacy: string
}

export const FIGURES: Figure[] = [
  {
    id: "vasugupta",
    name: "Vasugupta",
    era: "c. 9th century",
    role: "Sage of the Shiva Sutras",
    summary: "Brought to light the Shiva Sutras, the founding text of Kashmir Shaivism.",
    bio: [
      "Vasugupta was a sage who lived near Srinagar in the ninth century. Tradition holds that Shiva revealed to him, in a dream, the location of seventy-seven aphorisms inscribed on a rock on Mahadev mountain — the Shiva Sutras.",
      "The rock, known as Shankarpal, is still visited in the Harwan area. From these sutras grew the Trika and Spanda schools that together are known as Kashmir Shaivism.",
    ],
    legacy: "Every later master of Kashmir Shaivism, Abhinavagupta included, builds on the Shiva Sutras.",
  },
  {
    id: "abhinavagupta",
    name: "Abhinavagupta",
    era: "c. 950 – 1016 AD",
    role: "Philosopher, poet and aesthetician",
    summary: "The greatest mind of Kashmir Shaivism, and the master theorist of rasa in Indian art.",
    bio: [
      "Abhinavagupta studied under more than a dozen teachers across Kashmir and brought the many streams of Shaiva thought together in his vast Tantraloka, the ‘Light on the Tantras’.",
      "His commentaries on the Natyashastra and on Anandavardhana’s Dhvanyaloka shaped how India understands rasa — the aesthetic experience of art, music and drama — for a thousand years.",
      "Tradition says that at the end of his life he walked into the Bhairava cave near Beerwah with his disciples and was never seen again.",
    ],
    legacy: "His ideas on consciousness and aesthetics are still studied by philosophers and artists across the world.",
  },
  {
    id: "kalhana",
    name: "Kalhana",
    era: "12th century",
    role: "Historian and poet",
    summary: "Wrote the Rajatarangini, the first true chronicle of Indian history.",
    bio: [
      "Kalhana was the son of Champaka, a minister at the court of King Harsha of Kashmir. Around 1148 he began the Rajatarangini — the ‘River of Kings’ — in nearly eight thousand Sanskrit verses arranged in eight books.",
      "Kalhana consulted earlier chronicles, inscriptions and land grants, and set out to judge the kings of Kashmir fairly. It is why Kashmir, alone in early India, has a continuous written history.",
    ],
    legacy: "Translated by Aurel Stein in 1900, the Rajatarangini remains the foundation of every history of Kashmir.",
  },
  {
    id: "lal-ded",
    name: "Lal Ded",
    also: "Lalleshwari, Lalla Arifa",
    era: "c. 1320 – 1392",
    role: "Mystic poet",
    summary: "Her vaakhs are among the first poems in Kashmiri, loved by every Kashmiri to this day.",
    bio: [
      "Lal Ded was born near Pandrethan and married young into an unhappy household. She left it to wander as an ascetic, seeking the divine within rather than in ritual.",
      "She spoke in short four-line verses called vaakh, in the everyday Kashmiri of the people rather than Sanskrit. Passed down by memory for centuries, they gave the language its first great literature.",
      "Hindus revere her as Lalleshwari and Muslims as Lalla Arifa; her sayings are still part of everyday Kashmiri speech.",
    ],
    legacy: "Lal Ded is remembered as the mother of Kashmiri poetry; her vaakhs are still recited, sung and studied.",
  },
  {
    id: "nund-rishi",
    name: "Nund Rishi",
    also: "Sheikh Noor-ud-din Noorani, Alamdar-e-Kashmir",
    era: "c. 1377 – 1438",
    role: "Saint and poet, founder of the Rishi order",
    summary: "Carried Lal Ded’s message forward and founded the Rishi order of Kashmir.",
    bio: [
      "Nund Rishi was born in Kaimoh, and tradition says Lal Ded herself nursed him as an infant. He grew into a poet-saint who taught simplicity, non-violence and care for all living beings.",
      "His verses, called shruk, are composed in Kashmiri and remain widely quoted. His followers, the Rishis, became a distinctly Kashmiri spiritual order.",
    ],
    legacy: "His shrine at Charar-e-Sharif is one of the most visited in Kashmir; he is honoured as the patron saint of the valley.",
  },
]
