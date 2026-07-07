import Link from "next/link"
import { Heart, BookOpen, Mic, Calendar } from "lucide-react"

const impacts = [
  { icon: BookOpen, label: "Publications", value: "14+" },
  { icon: Mic, label: "Audio Lessons", value: "48" },
  { icon: Calendar, label: "Events Organized", value: "8+" },
  { icon: Heart, label: "Years of Service", value: "24+" },
]

export function DonationCTA() {
  return (
    <section className="py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="font-accent text-sm tracking-[0.2em] text-copper uppercase mb-4">
                Support Our Mission
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-walnut mb-6">
                Help Preserve Kashmiri Heritage
              </h2>
              <p className="text-lg text-walnut/70 mb-8 leading-relaxed">
                Your contribution helps us continue our work in promoting and
                preserving the rich cultural heritage of Kashmir for future
                generations.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-chinar text-white font-medium rounded-lg hover:bg-chinar-dark transition-colors"
              >
                Donate Now
              </Link>
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-2 gap-6">
              {impacts.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-6 bg-ivory rounded-xl"
                >
                  <item.icon className="h-8 w-8 text-chinar mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold text-walnut">
                    {item.value}
                  </p>
                  <p className="text-sm text-walnut/60 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
