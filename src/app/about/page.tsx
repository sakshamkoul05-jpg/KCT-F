import { Metadata } from "next"
import { Users, Target, Award, BookOpen, Globe, Handshake, Heart, GraduationCap, Trophy } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About the Trust",
  description: `Learn about ${SITE_CONFIG.name} — a registered charitable trust dedicated to preserving Kashmiri cultural heritage since 2000.`,
}

const objectives = [
  { icon: Globe, text: "To promote performing arts, languages and literature" },
  { icon: BookOpen, text: "To work for documentation, research and promotion of cultural areas including tribal and folk art" },
  { icon: Users, text: "To setup libraries, museums, documentation centres, recording studios" },
  { icon: Award, text: "To organise lectures, seminars, conferences, workshops, festivals, training camps" },
  { icon: BookOpen, text: "Publish periodicals, bulletins, books and monographs" },
  { icon: Heart, text: "To prepare and collect audio and video materials" },
  { icon: GraduationCap, text: "To inculcate moral values amongst younger generation and promote literacy" },
  { icon: Trophy, text: "To give awards, fellowships and scholarships to deserving persons" },
  { icon: Handshake, text: "To collaborate with external stakeholders in these areas" },
]

const trustees = [
  {
    name: "Late Prof. Omkar N. Koul",
    role: "Patron",
    photo: "/images/trustees/omkar.jpg",
    bio: "Former Director, Central Institute of Indian Languages, Mysore. Distinguished career spanning over forty years. Author of over fifty books. Associated with several UNESCO programmes related to endangered languages and mother tongue education.",
  },
  {
    name: "Dr. Roop Krishen Bhat",
    role: "Managing Trustee",
    photo: "/images/trustees/roop.jpg",
    bio: "Writer, Linguist, former Professor at CIIL Mysore and Director Adult Education, MHRD Govt. of India. Author of more than forty-five books. Sahitya Academy Translation Awardee. Senior Research Fellow, Ministry of Culture.",
  },
  {
    name: "Smt. Kundan Bhat",
    role: "Author Trustee",
    photo: "/images/trustees/kundan.jpg",
    bio: "Former Teacher, Government of NCT, Delhi.",
  },
  {
    name: "Sh. Avtar Tickoo",
    role: "Trustee",
    photo: "/images/trustees/avtar.jpg",
    bio: "Vice President in Private Sector.",
  },
  {
    name: "Sh. Ravinder Bhat",
    role: "Trustee",
    photo: "/images/trustees/ravinder.jpg",
    bio: "Civil Engineer and Social Activist.",
  },
  {
    name: "Shri Jawahar Lal Tickoo",
    role: "Trustee",
    photo: "/images/trustees/jawahar.jpg",
    bio: "Poet, writer and former Teacher, Government of J&K.",
  },
]

const advisory = [
  { name: "Arvind Shah", role: "Author and Social Activist", photo: "/images/trustees/arvind.jpg" },
  { name: "Smt. Sunita Raina Pandit", role: "Kashmiri & Hindi Poet", photo: "/images/trustees/sunita.jpg" },
  { name: "Aryan Ramesh", role: "Community / Social Activist and Businessman", photo: "/images/trustees/aryan.jpg" },
  { name: "Rinku Koul", role: "Proprietor IILS DTP Center & Writer", photo: "/images/trustees/rinku.jpg" },
  { name: "Promilla Koul", role: "Teacher & Social Activist", photo: "/images/trustees/promilla.jpg" },
  { name: "Rohit Bhat", role: "Theatre Director & Social Activist", photo: "/images/trustees/rohit.jpg" },
  { name: "Dr. Gauri Shankar Raina", role: "Former Controller, Media Centre IGNCA. Award winning filmmaker and writer.", photo: "/images/trustees/rainaji.jpg" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-walnut text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-sm tracking-[0.2em] text-saffron uppercase mb-4">
            About Us
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Kashmir Cultural Trust (KCT) is a charitable trust created to work
            for promotion, preservation and dissemination of National Cultural
            Heritage and specially so for the state of Jammu and Kashmir.
          </p>
        </div>
      </section>

      {/* Registration details */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="font-accent text-sm text-copper uppercase mb-2">Registered</p>
              <p className="font-display text-xl font-semibold text-walnut">
                2nd December, 2000
              </p>
              <p className="text-walnut/60 mt-1">
                By the Sub-Registrar Jammu, under registration number 659
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="font-accent text-sm text-copper uppercase mb-2">NGO Code</p>
              <p className="font-display text-xl font-semibold text-walnut">
                JK / 2015 / 0089650
              </p>
              <p className="text-walnut/60 mt-1">
                Unique code under ngo.india.gov.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Our Purpose
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut">
              Objectives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chinar/10 text-chinar shrink-0">
                  <obj.icon className="h-6 w-6" />
                </div>
                <p className="text-walnut/80 leading-relaxed">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section id="leadership" className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut mb-4">
              Our Trustees
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee) => (
              <div
                key={trustee.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-parchment relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-stone/40" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-accent text-xs text-copper uppercase tracking-wider mb-1">
                    {trustee.role}
                  </p>
                  <h3 className="font-display text-xl font-bold text-walnut mb-2">
                    {trustee.name}
                  </h3>
                  <p className="text-sm text-walnut/60 leading-relaxed">
                    {trustee.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut mb-4">
              Advisory Committee
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisory.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-20 h-20 rounded-full bg-parchment mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-stone/40" />
                </div>
                <p className="font-accent text-xs text-copper uppercase tracking-wider mb-1">
                  {member.role}
                </p>
                <h3 className="font-display text-lg font-bold text-walnut">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
