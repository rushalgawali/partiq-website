import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import StatsCounter from "@/components/StatsCounter";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CNCVMCShowcase from "@/components/CNCVMCShowcase";
import Reveal from "@/components/Reveal";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* VIDEO HERO - THIS SHOULD SHOW YOUR CNC VIDEO */}
      <VideoHero />

      {/* Stats Counter */}
      <StatsCounter />

      {/* CNC & VMC Showcase */}
      <CNCVMCShowcase />

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* About Section */}
      <Reveal>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
                  ABOUT PARTIQ
                </div>
                <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  A Modern Sourcing Partner, Not Just a Directory
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  For precision manufacturers and buyers worldwide, Partiq streamlines the sourcing 
                  process for CNC turning and VMC milling operations. We don't just connect you with 
                  suppliers — we validate their capabilities on CNC lathes and Vertical Machining Centers, 
                  ensure quality standards, and coordinate logistics so you can focus on building great products.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Vetted supplier network across multiple regions",
                    "Quality oversight and inspection coordination",
                    "Export packaging and global logistics support",
                    "One accountable point of contact throughout"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image/Card */}
              <div className="relative">
                <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900">
                    How We Work
                  </h3>
                  <div className="mt-8 space-y-6">
                    {[
                      { step: "01", title: "Submit RFQ", desc: "Share drawings, specs, quantity, and timeline" },
                      { step: "02", title: "Supplier Match", desc: "We identify capable partners and validate fit" },
                      { step: "03", title: "Quote & Timeline", desc: "Receive competitive pricing and lead times" },
                      { step: "04", title: "Production & QC", desc: "Oversight, inspection, and delivery coordination" }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="mt-1 text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Community/Trust Section */}
      <Reveal>
        <section className="bg-gray-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
                IN THE COMMUNITY
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                Built on Long-Term Relationships
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="text-xl font-bold">Supplier Development</h3>
                <p className="mt-4 leading-relaxed text-gray-300">
                  We help manufacturing partners strengthen quality systems, documentation, 
                  and export processes to meet international standards and build long-term reliability.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all hover:bg-white/10">
                <h3 className="text-xl font-bold">Customer Success</h3>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Clear communication, fast feedback loops, and proactive quality oversight 
                  reduce surprises and keep your projects on schedule and within budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Clients Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <Clients />
          </Reveal>
        </div>
      </div>

      {/* Final CTA */}
      <Reveal>
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Experience the Partiq difference. Request a quote and connect with 
              our sourcing experts today.
            </p>
            <div className="mt-10">
              <a
                href="/rfq"
                className="inline-block rounded-full bg-gray-900 px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-2xl"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
}