"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "CNC Turning Operations",
    description: "Precision turning for shafts, bushings, sleeves, and cylindrical components with tight tolerances.",
    features: ["2-axis to multi-axis CNC lathes", "Tolerance: ±0.0005\"", "Dia. 0.5\" to 24\"+ capacity"],
    icon: "🔄"
  },
  {
    title: "VMC Milling Operations",
    description: "Vertical Machining Centers for complex 3D parts, brackets, housings, and multi-feature components.",
    features: ["3-axis, 4-axis, 5-axis VMC", "Complex geometries", "Aluminum to hardened steel"],
    icon: "⚙️"
  },
  {
    title: "Quality Inspection & Testing",
    description: "Comprehensive quality validation including CMM inspection, material testing, and full documentation.",
    features: ["CMM dimensional inspection", "Material certificates", "PPAP / FAI documentation"],
    icon: "🔍"
  },
  {
    title: "Precision Grinding",
    description: "Surface, cylindrical, and centerless grinding for superior finish and tight dimensional accuracy.",
    features: ["Surface finish Ra 0.4μm or better", "ID/OD grinding", "Post-heat treat grinding"],
    icon: "💎"
  },
  {
    title: "Assembly & Finishing",
    description: "Complete assembly services, surface treatments, and export-ready packaging solutions.",
    features: ["Sub-assembly services", "Anodizing, plating, coating", "Custom packaging"],
    icon: "📦"
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end sourcing coordination with supplier vetting, quality oversight, and logistics.",
    features: ["Global supplier network", "Lead time optimization", "Inventory & delivery tracking"],
    icon: "🌐"
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white">
            OUR CAPABILITIES
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Complete CNC & VMC Manufacturing Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From precision turning to complex multi-axis milling, we source the right manufacturing 
            partners for your CNC and VMC machining needs — prototype to production volumes.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  {capability.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-white">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-200">
                  {capability.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {capability.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700 transition-colors group-hover:text-gray-100"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative Bar */}
                <div className="mt-6 h-1 w-12 rounded-full bg-gray-900 transition-all group-hover:w-full group-hover:bg-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/rfq"
            className="inline-block rounded-full bg-gray-900 px-10 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-2xl"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}