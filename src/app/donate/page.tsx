import { Metadata } from "next"
import { Heart, BookOpen, Mic, Calendar, Users } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${SITE_CONFIG.name} in preserving Kashmiri cultural heritage for future generations.`,
}

const impacts = [
  { icon: BookOpen, label: "Publications", value: "14+", description: "Books and monographs published" },
  { icon: Mic, label: "Audio Lessons", value: "48", description: "Structured language lessons" },
  { icon: Calendar, label: "Events", value: "8+", description: "Cultural events organized" },
  { icon: Users, label: "Years", value: "24+", description: "Years of cultural service" },
]

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-chinar to-chinar-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-saffron mx-auto mb-6" />
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Your contribution helps us continue preserving and promoting the rich
            cultural heritage of Kashmir for future generations.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-walnut mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-walnut/70 max-w-2xl mx-auto">
              Every donation helps us preserve Kashmiri language, literature,
              and cultural traditions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((item) => (
              <div key={item.label} className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <item.icon className="h-10 w-10 text-chinar mx-auto mb-4" />
                <p className="font-display text-4xl font-bold text-walnut mb-2">
                  {item.value}
                </p>
                <p className="font-medium text-walnut mb-1">{item.label}</p>
                <p className="text-sm text-walnut/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="font-display text-3xl font-bold text-walnut mb-8 text-center">
              Make a Donation
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[500, 1000, 2000, 5000, 10000, 25000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="p-4 border-2 border-stone/30 rounded-xl text-walnut font-medium hover:border-chinar hover:bg-chinar/5 transition-colors"
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-walnut mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-walnut/40">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-walnut mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-walnut mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-stone/30 rounded-lg text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-chinar text-white font-medium rounded-lg hover:bg-chinar-dark transition-colors"
              >
                Donate Now
              </button>
            </form>
            <p className="text-xs text-walnut/40 text-center mt-6">
              Donations are eligible for tax exemption under Section 80G of the
              Income Tax Act.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
