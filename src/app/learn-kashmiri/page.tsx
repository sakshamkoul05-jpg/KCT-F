import { Metadata } from "next"
import { LearnKashmiri } from "@/components/learn/learn-kashmiri"
import { SITE_CONFIG } from "@/lib/constants"
import { LESSON_COUNT, PUBLICATION_COUNT, VAAKH_ISSUES } from "@/lib/media"

export const metadata: Metadata = {
  title: "Learn Kashmiri",
  description: `Learn Kashmiri step by step — a guided path of ${LESSON_COUNT} audio lessons in five stages, with ${PUBLICATION_COUNT} books and ${VAAKH_ISSUES.length} issues of the Vaakh journal to download free. ${SITE_CONFIG.name}.`,
}

export default function LearnKashmiriPage() {
  return <LearnKashmiri />
}
