"use client"

import Image from "next/image"
import { PageHero } from "@/components/shared/page-hero"
import { Users, Globe, BookOpen, Award, Heart, GraduationCap, Trophy, Handshake } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations"

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
    bio: "Former Director, Central Institute of Indian Languages, Mysore. Distinguished career spanning over forty years. Author of over fifty books. Associated with several UNESCO programmes.",
    photo: "/images/trustees/omkar.jpg",
  },
  {
    name: "Dr. Roop Krishen Bhat",
    role: "Managing Trustee",
    bio: "Writer, Linguist, former Professor at CIIL Mysore and Director Adult Education, MHRD Govt. of India. Author of more than forty-five books. Sahitya Academy Translation Awardee.",
    photo: "/images/trustees/roop.jpg",
  },
  {
    name: "Smt. Kundan Bhat",
    role: "Author Trustee",
    bio: "Former Teacher, Government of NCT, Delhi.",
    photo: "/images/trustees/kundan.jpg",
  },
  {
    name: "Sh. Avtar Tickoo",
    role: "Trustee",
    bio: "Vice President in Private Sector.",
    photo: "/images/trustees/avtar.jpg",
  },
  {
    name: "Sh. Ravinder Bhat",
    role: "Trustee",
    bio: "Civil Engineer and Social Activist.",
    photo: "/images/trustees/ravinder.jpg",
  },
  {
    name: "Shri Jawahar Lal Tickoo",
    role: "Trustee",
    bio: "Poet, writer and former Teacher, Government of J&K.",
    photo: "/images/trustees/jawahar.jpg",
  },
]

const advisory = [
  { name: "Arvind Shah", role: "Author and Social Activist", photo: "/images/trustees/arvind.jpg" },
  { name: "Smt. Sunita Raina Pandit", role: "Kashmiri & Hindi Poet", photo: "/images/trustees/sunita.jpg" },
  { name: "Aryan Ramesh", role: "Community Activist and Businessman", photo: "/images/trustees/aryan.jpg" },
  { name: "Rinku Koul", role: "Proprietor IILS DTP Center & Writer", photo: "/images/trustees/rinku.jpg" },
  { name: "Promilla Koul", role: "Teacher & Social Activist", photo: "/images/trustees/promilla.jpg" },
  { name: "Rohit Bhat", role: "Theatre Director & Social Activist", photo: "/images/trustees/rohit.jpg" },
  { name: "Dr. Gauri Shankar Raina", role: "Former Controller, Media Centre IGNCA", photo: "/images/trustees/rainaji.jpeg" },
]

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About the Trust"
        title={"Our Story"}
        intro={"Kashmir Cultural Trust is a charitable trust created to work for promotion, preservation and dissemination of National Cultural Heritage and Kashmiri language, literature and culture among the Kashmiri diaspora and others globally."}
      />

      {/* Registration */}
      <section className="py-16 bg-ivory texture-parchment">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp>
              <div className="bg-white p-8 rounded-lg border border-stone/15 shadow-soft">
                <p className="font-accent text-xs text-copper mb-2">
                  Registered
                </p>
                <p className="font-display text-2xl font-semibold text-walnut">
                  2nd December, 2000
                </p>
                <p className="editorial-body text-sm text-walnut/80 mt-2">
                  By the Sub-Registrar Jammu, under registration number 659
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-stone/15 shadow-soft">
                <p className="font-accent text-xs text-copper mb-2">
                  NGO Code
                </p>
                <p className="font-display text-2xl font-semibold text-walnut">
                  JK / 2015 / 0089650
                </p>
                <p className="editorial-body text-sm text-walnut/80 mt-2">
                  Unique code under ngo.india.gov.in
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="relative py-32 bg-snow">
        <div className="absolute inset-0 lighting-heritage pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="mb-12">
            <p className="kicker mb-4">Our purpose</p>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-walnut">
              Objectives
            </h2>
          </FadeUp>

          <ul className="grid grid-cols-1 gap-x-12 border-t-2 border-walnut md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj) => (
              <li key={obj.text} className="flex items-start gap-4 border-b border-stone py-6">
                <obj.icon className="mt-1 h-6 w-6 shrink-0 text-chinar" strokeWidth={1.5} />
                <p className="text-lg leading-snug text-walnut">{obj.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trustees */}
      <section id="leadership" className="relative py-32 bg-ivory texture-wood">
        <div className="absolute inset-0 lighting-warm pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="mb-12">
            <p className="kicker mb-4">Leadership</p>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-walnut mb-4">
              Our Trustees
            </h2>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee) => (
              <StaggerItem key={trustee.name}>
                <div className="card-editorial group">
                  <div className="aspect-[4/3] relative overflow-hidden bg-parchment">
                    <Image
                      src={trustee.photo}
                      alt={trustee.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lapis/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="font-accent text-xs text-copper mb-2">
                      {trustee.role}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-walnut mb-3 group-hover:text-chinar transition-colors duration-300">
                      {trustee.name}
                    </h3>
                    <p className="editorial-body text-sm text-walnut/80 leading-relaxed">
                      {trustee.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Advisory */}
      <section className="relative py-32 bg-snow">
        <div className="absolute inset-0 lighting-heritage pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <FadeUp className="mb-12">
            <p className="kicker mb-4">Advisory</p>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-walnut">
              Advisory Committee
            </h2>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisory.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white p-6 rounded-lg border border-stone/10 shadow-soft text-center group hover:shadow-medium hover:border-chinar/10 transition-all duration-400">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-stone/10 group-hover:border-chinar/20 transition-colors">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-accent text-xs text-copper mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-walnut">
                    {member.name}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
