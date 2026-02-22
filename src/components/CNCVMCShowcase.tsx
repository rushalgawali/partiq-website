"use client";

import { motion } from "framer-motion";

export default function CNCVMCShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            CORE CAPABILITIES
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            CNC Turning & VMC Milling Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We specialize in sourcing precision machined components across both turning 
            and milling operations, from simple to highly complex geometries.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* CNC Turning Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all hover:shadow-2xl"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon/Badge */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition-colors group-hover:bg-white/20">
                🔄
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 transition-colors group-hover:text-white">
                CNC Turning Operations
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-600 transition-colors group-hover:text-blue-50">
                Precision turned components for shafts, bushings, sleeves, pins, and cylindrical parts 
                with tight tolerances and excellent surface finish.
              </p>

              {/* Capabilities List */}
              <div className="mt-8 space-y-3">
                <div className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-white">
                  What We Source:
                </div>
                {[
                  "2-axis to multi-axis CNC lathes",
                  "Diameters: 0.5\" to 24\"+ capacity",
                  "Swiss-type for small precision parts",
                  "Materials: Aluminum, steel, stainless, brass, plastics",
                  "Tolerances: ±0.0005\" or tighter",
                  "Surface finish: Ra 32 to Ra 16 or better"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg 
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 transition-colors group-hover:text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-sm text-gray-700 transition-colors group-hover:text-blue-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Typical Parts */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <div className="text-xs font-semibold text-gray-600 transition-colors group-hover:text-blue-200">
                  TYPICAL PARTS
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Shafts", "Bushings", "Pins", "Sleeves", "Fittings", "Connectors"].map((part) => (
                    <span 
                      key={part}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700 transition-colors group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* VMC Milling Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all hover:shadow-2xl"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon/Badge */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition-colors group-hover:bg-white/20">
                ⚙️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 transition-colors group-hover:text-white">
                VMC Milling Operations
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-600 transition-colors group-hover:text-purple-50">
                Complex multi-axis milling for brackets, housings, plates, and 3D components with 
                intricate features, pockets, and tight geometric tolerances.
              </p>

              {/* Capabilities List */}
              <div className="mt-8 space-y-3">
                <div className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-white">
                  What We Source:
                </div>
                {[
                  "3-axis, 4-axis, and 5-axis VMC",
                  "Work envelope: 12\" x 12\" to 60\" x 40\"+",
                  "High-speed machining for aluminum",
                  "Materials: Aluminum, steel, titanium, composites",
                  "GD&T and positional tolerances",
                  "Complex contours and 3D surfaces"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg 
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600 transition-colors group-hover:text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-sm text-gray-700 transition-colors group-hover:text-purple-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Typical Parts */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <div className="text-xs font-semibold text-gray-600 transition-colors group-hover:text-purple-200">
                  TYPICAL PARTS
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Brackets", "Housings", "Plates", "Manifolds", "Fixtures", "Enclosures"].map((part) => (
                    <span 
                      key={part}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700 transition-colors group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            Need both turning and milling for a complete assembly?
          </p>
          <a
            href="/rfq"
            className="mt-6 inline-block rounded-full bg-gray-900 px-10 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-2xl"
          >
            Request a Quote for Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}