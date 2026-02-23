"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is contract manufacturing?",
    a: "Contract manufacturing is when a business outsources the production of parts or products to a specialized third-party manufacturer. Partiq connects you with vetted precision machining partners so you get high-quality parts without managing a factory.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve automotive, aerospace, industrial equipment, medical devices, electronics, and general engineering sectors — any industry requiring precision CNC turned or milled components.",
  },
  {
    q: "How does Partiq source manufacturing partners?",
    a: "Every partner in our network undergoes a rigorous qualification process including facility audits, quality system reviews, and sample part evaluations before joining the platform.",
  },
  {
    q: "How do you ensure quality?",
    a: "All orders include a DFM review before production, First Article Inspection (FAI) reports, and a Certificate of Conformance. CMM reports and third-party inspection are available on request.",
  },
  {
    q: "What is the typical lead time?",
    a: "Prototypes typically ship in 5–10 business days. Production runs of 100–1,000 parts generally take 2–4 weeks. Accurate lead times are provided at the quoting stage.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No. Partiq supports single-piece prototypes through to high-volume production runs. Pricing scales accordingly and the full pricing ladder is shown upfront.",
  },
  {
    q: "Can Partiq handle both low and high volume orders?",
    a: "Yes. Our partner network has capacity for everything from one-off prototypes to tens of thousands of parts. We route orders intelligently across partners to optimize cost and lead time.",
  },
  {
    q: "What happens if parts don't meet spec?",
    a: "Non-conforming parts are replaced at no cost to you. Our quality guarantee covers dimensional defects, surface finish deviations, and material non-compliance.",
  },
  {
    q: "Do you support long-term supply agreements?",
    a: "Yes. We offer blanket order programs with fixed pricing, guaranteed capacity, and scheduled releases for clients with recurring production needs.",
  },
  {
    q: "How does Partiq ensure supply chain continuity?",
    a: "We maintain redundant capacity across our partner network. For critical components, dedicated capacity agreements and buffer stock programs can be arranged.",
  },
  {
    q: "Is engineering review included before production?",
    a: "Absolutely. Every order goes through a DFM (Design for Manufacturability) review. Our engineers flag potential issues before production starts so problems are caught early.",
  },
  {
    q: "How do I get started with Partiq?",
    a: "Upload your drawings or CAD files, tell us your quantity and timeline, and we'll return a quote typically within 24 hours. From there, production begins once you approve.",
  },
];

const left = faqs.filter((_, i) => i % 2 === 0);
const right = faqs.filter((_, i) => i % 2 !== 0);

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const FAQItem = ({ item, index }: { item: (typeof faqs)[0]; index: number }) => {
    const isOpen = openIndex === index;
    return (
      <div className={`border-b transition-colors duration-200 ${isOpen ? "border-green-500/30" : "border-white/10"}`}>
        <button
          onClick={() => toggle(index)}
          className="flex w-full items-start justify-between gap-4 py-5 text-left"
        >
          <span className={`text-sm font-normal leading-snug transition-colors duration-200 md:text-[15px] ${isOpen ? "text-green-400" : "text-white"}`}>
            {item.q}
          </span>
          <span className={`mt-0.5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-green-400" : "text-gray-500"}`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm leading-relaxed text-gray-400">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Header */}
      <section className="relative overflow-hidden px-6 pb-8 pt-24 md:px-16">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Help Center
            </span>
            <h1 className="mt-6 text-3xl font-light tracking-tight text-white md:text-5xl">
              Frequently Asked Questions
              <br />
              <span className="text-green-400">About On-Demand Manufacturing</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
              Everything you need to know about sourcing, quality, lead times, and working with Partiq.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column FAQ */}
      <section className="px-6 py-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid gap-4 md:grid-cols-2 md:gap-x-8"
          >
            {/* Left column */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-2">
              {left.map((item, i) => (
                <FAQItem key={i} item={item} index={i * 2} />
              ))}
            </div>

            {/* Right column */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-2">
              {right.map((item, i) => (
                <FAQItem key={i} item={item} index={i * 2 + 1} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h3 className="text-xl font-light text-white">Still have questions?</h3>
            <p className="mt-2 text-sm text-gray-400">
              Our team is happy to walk you through any part of our process.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/10 px-6 py-3 text-sm font-medium text-green-400 transition hover:bg-green-500/20"
            >
              Contact Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}