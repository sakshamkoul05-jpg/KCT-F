/**
 * Single source of truth for the Trust's audio and PDF library.
 *
 * Every `src` / `file` below is verified to exist under `public/`.
 * Durations were read from the MP3 headers themselves — do not hand-edit them.
 *
 * Paths are stored unencoded (they must match the filenames on disk exactly).
 * Always render them through `assetUrl()`, which percent-encodes each segment —
 * several files contain spaces and parentheses.
 */

export type Track = {
  title: string
  src: string
  duration: string
}

export type Lesson = Track & { part: 1 | 2 }

/** Percent-encode each path segment, leaving the separators intact. */
export function assetUrl(path: string): string {
  return path.split("/").map(encodeURIComponent).join("/")
}

/** Suggested filename for a download, so users don't get `Vaakh%2061.pdf`. */
export function downloadName(title: string, ext = "pdf"): string {
  return `${title.replace(/[\\/:*?"<>|]/g, "-")}.${ext}`
}

export const COURSE_PARTS = {
  1: {
    title: "Phonology & Spoken Programmes",
    description:
      "Vowels, consonants and seventeen graded listening programmes, closing with a vocabulary review.",
  },
  2: {
    title: "Grammar & Conversation",
    description:
      "Pronouns, verbs and tenses, built up through twenty-six lessons of everyday Kashmiri conversation.",
  },
} as const

export const LESSONS: Lesson[] = [
  { part: 1, title: "Introduction", src: "/audio/lessons/Introduction.mp3", duration: "1:37" },
  { part: 1, title: "Vowels", src: "/audio/lessons/Part-1_Lesson-1_Vowels.mp3", duration: "2:56" },
  { part: 1, title: "Consonants", src: "/audio/lessons/Part-1_Lesson-2_Consonants.mp3", duration: "2:13" },
  { part: 1, title: "Programme 1", src: "/audio/lessons/Part-1_Programme-1.mp3", duration: "5:22" },
  { part: 1, title: "Programme 2", src: "/audio/lessons/Part-1_Programme-2.mp3", duration: "4:43" },
  { part: 1, title: "Programme 3", src: "/audio/lessons/Part-1_Programme-3.mp3", duration: "4:08" },
  { part: 1, title: "Programme 4", src: "/audio/lessons/Part-1_Programme-4.mp3", duration: "4:01" },
  { part: 1, title: "Programme 5", src: "/audio/lessons/Part-1_Programme-5.mp3", duration: "3:39" },
  { part: 1, title: "Programme 6", src: "/audio/lessons/Part-1_Programme-6.mp3", duration: "2:24" },
  { part: 1, title: "Programme 7", src: "/audio/lessons/Part-1_Programme-7.mp3", duration: "6:59" },
  { part: 1, title: "Programme 8", src: "/audio/lessons/Part-1_Programme-8.mp3", duration: "3:53" },
  { part: 1, title: "Programme 9", src: "/audio/lessons/Part-1_Programme-9.mp3", duration: "3:32" },
  { part: 1, title: "Programme 10", src: "/audio/lessons/Part-1_Programme-10.mp3", duration: "2:02" },
  { part: 1, title: "Programme 11", src: "/audio/lessons/Part-1_Programme-11.mp3", duration: "2:26" },
  { part: 1, title: "Programme 12", src: "/audio/lessons/Part-1_Programme-12.mp3", duration: "1:52" },
  { part: 1, title: "Programme 13", src: "/audio/lessons/Part-1_Programme-13.mp3", duration: "2:47" },
  { part: 1, title: "Programme 14", src: "/audio/lessons/Part-1_Programme-14.mp3", duration: "1:59" },
  { part: 1, title: "Programme 15", src: "/audio/lessons/Part-1_Programme-15.mp3", duration: "2:42" },
  { part: 1, title: "Programme 16", src: "/audio/lessons/Part-1_Programme-16.mp3", duration: "3:06" },
  { part: 1, title: "Programme 17", src: "/audio/lessons/Part-1_Programme-17.mp3", duration: "2:48" },
  { part: 1, title: "Vocabulary", src: "/audio/lessons/Part-1_Programme-Vocabulary.mp3", duration: "6:18" },
  { part: 2, title: "Demonstrative Pronouns", src: "/audio/lessons/Part-2_Lesson-1_Demonstrative Pronouns.mp3", duration: "3:24" },
  { part: 2, title: "Interrogative Pronoun", src: "/audio/lessons/Part-2_Lesson-2_Interrogative Pronoun.mp3", duration: "3:05" },
  { part: 2, title: "Possessive Pronoun", src: "/audio/lessons/Part-2_Lesson-3_Possessive Pronoun.mp3", duration: "3:38" },
  { part: 2, title: "Possessive Pronoun", src: "/audio/lessons/Part-2_Lesson-4_Possessive Pronoun.mp3", duration: "4:02" },
  { part: 2, title: "Personal Pronoun", src: "/audio/lessons/Part-2_Lesson-5_Personal Pronoun.mp3", duration: "2:11" },
  { part: 2, title: "Personal Pronoun", src: "/audio/lessons/Part-2_Lesson-6_Personal Pronoun.mp3", duration: "1:36" },
  { part: 2, title: "Adjectives", src: "/audio/lessons/Part-2_Lesson-7_Adjectives.mp3", duration: "2:52" },
  { part: 2, title: "Main Verbs", src: "/audio/lessons/Part-2_Lesson-8_Main Verbs.mp3", duration: "2:56" },
  { part: 2, title: "Main Verbs Continued", src: "/audio/lessons/Part-2_Lesson-9_Main Verbs Continued.mp3", duration: "2:24" },
  { part: 2, title: "Imperative Verb", src: "/audio/lessons/Part-2_Lesson-10_Imperative Verb.mp3", duration: "3:46" },
  { part: 2, title: "Main Verb: Past & Future Tense", src: "/audio/lessons/Part-2_Lesson-11_Main Verb_Past _ Future Tense.mp3", duration: "2:51" },
  { part: 2, title: "A Conversation in Hospital", src: "/audio/lessons/Part-2_Lesson-12_A Conversation in Hospital.mp3", duration: "2:32" },
  { part: 2, title: "A Conversation in Tourist Centre", src: "/audio/lessons/Part-2_Lesson-13_A Conversation in Tourist Centre.mp3", duration: "3:00" },
  { part: 2, title: "Visit to Kashmir", src: "/audio/lessons/Part-2_Lesson-14_Visit to Kashmir.mp3", duration: "2:58" },
  { part: 2, title: "Intransitive Verb (Morning Walk)", src: "/audio/lessons/Part-2_Lesson-15_Intransitive Verb - Morning Walk.mp3", duration: "2:45" },
  { part: 2, title: "Past Tense (Feast)", src: "/audio/lessons/Part-2_Lesson-16_Past Tense - Feast.mp3", duration: "3:21" },
  { part: 2, title: "Future Tense (In Market Place)", src: "/audio/lessons/Part-2_Lesson-17_Future Tense - In Market Place.mp3", duration: "2:34" },
  { part: 2, title: "Future Tense Continued", src: "/audio/lessons/Part-2_Lesson-18_Future Tense Continued.mp3", duration: "2:24" },
  { part: 2, title: "Perfect Tense (Visit to Delhi)", src: "/audio/lessons/Part-2_Lesson-19_Perfect Tense - Visit to Delhi.mp3", duration: "2:36" },
  { part: 2, title: "Perfect Tense (Driving)", src: "/audio/lessons/Part-2_Lesson-20_Perfect Tense - Driving.mp3", duration: "3:11" },
  { part: 2, title: "Adverbs", src: "/audio/lessons/Part-2_Lesson-21_Adverbs.mp3", duration: "2:53" },
  { part: 2, title: "Degrees", src: "/audio/lessons/Part-2_Lesson-22_Degrees.mp3", duration: "2:20" },
  { part: 2, title: "Passive Voice", src: "/audio/lessons/Part-2_Lesson-23_Passive Voice.mp3", duration: "2:19" },
  { part: 2, title: "Mother Tongue", src: "/audio/lessons/Part-2_Lesson-24_Mother Tounge.mp3", duration: "2:35" },
  { part: 2, title: "Dal Lake", src: "/audio/lessons/Part-2_Lesson-25_Dal Lake.mp3", duration: "3:02" },
  { part: 2, title: "Samavar", src: "/audio/lessons/Part-2_Lesson-26_Samavar.mp3", duration: "2:50" },
  { part: 2, title: "Vocabulary & Credits", src: "/audio/lessons/Part-2_Vocabulary _ Credits.mp3", duration: "11:38" },
]

export type Album = {
  slug: string
  title: string
  /**
   * Real album artwork. The archive has none, so this is left unset and the UI
   * falls back to a placeholder — do not reuse Vaakh journal covers here, they
   * belong to a different publication.
   */
  cover?: string
  tracks: Track[]
}

export const ALBUMS: Album[] = [
  {
    slug: "album1",
    title: "Album One",
    tracks: [
      { title: "Track 1", src: "/audio/albums/album1/01track1.mp3", duration: "13:20" },
      { title: "Track 2", src: "/audio/albums/album1/02track2.mp3", duration: "17:47" },
      { title: "Track 3", src: "/audio/albums/album1/03track3.mp3", duration: "2:16" },
      { title: "Track 4", src: "/audio/albums/album1/04track4.mp3", duration: "20:03" },
      { title: "Track 5", src: "/audio/albums/album1/05track5.mp3", duration: "0:37" },
      { title: "Track 6", src: "/audio/albums/album1/06track6.mp3", duration: "7:55" },
    ],
  },
  {
    slug: "album2",
    title: "Album Two",
    tracks: [
      { title: "Track 1", src: "/audio/albums/album2/01 Track 1.mp3", duration: "15:11" },
      { title: "Track 2", src: "/audio/albums/album2/02 Track 2.mp3", duration: "16:10" },
      { title: "Track 3", src: "/audio/albums/album2/03 Track 3.mp3", duration: "1:11" },
      { title: "Track 4", src: "/audio/albums/album2/04 Track 4.mp3", duration: "0:26" },
      { title: "Track 5", src: "/audio/albums/album2/05 Track 5.mp3", duration: "6:06" },
      { title: "Track 6", src: "/audio/albums/album2/06 Track 6.mp3", duration: "14:36" },
      { title: "Track 7", src: "/audio/albums/album2/07 Track 7.mp3", duration: "8:38" },
    ],
  },
  {
    slug: "album3",
    title: "Album Three",
    tracks: [
      { title: "Track 1", src: "/audio/albums/album3/01 Track 1.mp3", duration: "11:36" },
      { title: "Track 2", src: "/audio/albums/album3/02 Track 2.mp3", duration: "1:06" },
      { title: "Track 3", src: "/audio/albums/album3/03 Track 3.mp3", duration: "4:23" },
      { title: "Track 4", src: "/audio/albums/album3/04 Track 4.mp3", duration: "0:36" },
      { title: "Track 5", src: "/audio/albums/album3/05 Track 5.mp3", duration: "0:10" },
      { title: "Track 6", src: "/audio/albums/album3/06 Track 6.mp3", duration: "0:36" },
      { title: "Track 7", src: "/audio/albums/album3/07 Track 7.mp3", duration: "13:24" },
      { title: "Track 8", src: "/audio/albums/album3/08 Track 8.mp3", duration: "30:31" },
    ],
  },]

export type Publication = {
  title: string
  author?: string
  category: string
  file: string
  image: string
}

/** `file` is relative to `public/publications/`. */
export const PUBLICATIONS: Publication[] = [
  { title: "A Course in Kashmiri Language", author: "Dr. Roop Krishen Bhat", category: "Language Learning", file: "A-Course-In-Kashmiri-Language.pdf", image: "/images/publications/kashmiri-hindi.jpg" },
  { title: "Koshur Cultural Reader", author: "Dr. Roop Krishen Bhat", category: "Cultural Studies", file: "koshur-cultural-reader.pdf", image: "/images/publications/harmony1.jpg" },
  { title: "Leela Sagar", author: "Dr. Roop Krishen Bhat", category: "Cultural Studies", file: "Leela-Sagar-new.pdf", image: "/images/publications/liila.jpg" },
  { title: "Primer in Kashmiri", author: "KCT", category: "Language Learning", file: "primer.pdf", image: "/images/publications/primer.jpg" },
  { title: "Kashmiri Reader", author: "KCT", category: "Language Learning", file: "reader.pdf", image: "/images/publications/combined.jpg" },
  { title: "Dictionary of Proverbs", author: "KCT", category: "Language Learning", file: "DictionaryProverbs.pdf", image: "/images/publications/lila.jpg" },
  { title: "Modern Kashmiri Grammar", author: "KCT", category: "Language Learning", file: "ModernKashmiriGrammar.pdf", image: "/images/publications/gaashi.jpg" },
  { title: "Spoken Kashmiri", author: "KCT", category: "Language Learning", file: "SpokenKashmiri.pdf", image: "/images/publications/combined.jpg" },
  { title: "Kashmiri Administrative Terminology", author: "KCT", category: "Scholarly Works", file: "Kashmiri-Admn-Terminology.pdf", image: "/images/publications/c1.jpg" },
  { title: "Kashmiri Bibliography", author: "KCT", category: "Scholarly Works", file: "KashmiriBibliography.pdf", image: "/images/publications/c2.jpg" },
  { title: "Punjabi-Kashmiri Common Vocabulary", author: "KCT", category: "Language Learning", file: "Kash-Pbi-CVocab.pdf", image: "/images/publications/punjabi.jpg" },
  { title: "Punjabi-Kashmiri Primer", author: "KCT", category: "Language Learning", file: "punjabi.pdf", image: "/images/publications/punjabi.jpg" },
  { title: "Communal Harmony in Kashmiri Literature", author: "KCT", category: "Cultural Studies", file: "Communal-Harmony-in-Kmri-lit.pdf", image: "/images/publications/harmony1.jpg" },
  { title: "Kaeshri Adbaek Gaashi Taarakh", author: "KCT", category: "Scholarly Works", file: "Gaashi-taarakh-final.pdf", image: "/images/publications/gaashi.jpg" },
  { title: "Kashmiri Hindi Kashmiri Pustak", author: "KCT", category: "Language Learning", file: "kashmiri-hindi-kashmiri-pustak.pdf", image: "/images/publications/kashmiri-hindi.jpg" },
]

export type VaakhIssue = {
  issue: number
  period: string
  file: string
  cover?: string
  current?: boolean
}

/** The Trust's journal. `file` is relative to `public/publications/`. */
export const VAAKH_ISSUES: VaakhIssue[] = [
  { issue: 61, period: "Jan-Jun 2025", file: "Vaakh 61.pdf", cover: "/images/vaakh/c-vaakh61.jpg", current: true },
  { issue: 59, period: "Jan-Dec 2023", file: "Vaakh59-60.pdf", cover: "/images/vaakh/c-vaakh60.png" },
  { issue: 58, period: "Jul-Dec 2022", file: "Vaakh58.pdf", cover: "/images/vaakh/c-vaakh58.png" },
  { issue: 57, period: "Jan-Jun 2022", file: "vaakh-57.pdf", cover: "/images/vaakh/c-vaakh57.jpeg" },
  { issue: 56, period: "Jan-Jun 2021", file: "Vaakh-56.pdf", cover: "/images/vaakh/c-vaakh56.png" },
  { issue: 55, period: "Jul-Dec 2020", file: "vaakh55.pdf", cover: "/images/vaakh/c-vaakh55a.png" },
  { issue: 54, period: "Jan-Jun 2020", file: "vaakh-54.pdf", cover: "/images/vaakh/c-vaakh54.png" },
  { issue: 53, period: "Jul-Dec 2019", file: "vaakh-53.pdf", cover: "/images/vaakh/c-vaakh53.png" },
  { issue: 52, period: "Jan-Jun 2019", file: "vaakh-52.pdf", cover: "/images/vaakh/c-vaakh52.png" },
  { issue: 51, period: "Jul-Dec 2018", file: "vaakh-51.pdf", cover: "/images/vaakh/c-vaakh51.png" },
  { issue: 50, period: "Jan-Jun 2018", file: "vaakh-50.pdf", cover: "/images/vaakh/c-vaakh50.png" },
  { issue: 48, period: "Jan-Jun 2017", file: "vaakh-48.pdf", cover: "/images/vaakh/c-vaakh48.png" },
  { issue: 47, period: "Jul-Dec 2016", file: "vaakh-47.pdf", cover: "/images/vaakh/c-vaakh47.png" },
]

export const LESSON_COUNT = LESSONS.length
export const TRACK_COUNT = ALBUMS.reduce((n, a) => n + a.tracks.length, 0)
export const PUBLICATION_COUNT = PUBLICATIONS.length
