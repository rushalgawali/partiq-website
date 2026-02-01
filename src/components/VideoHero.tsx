"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Very light overlay - just 20% for slight text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            RFQ response typically within 24 hours
          </motion.div>

          {/* Main Headline */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Superior Precision Parts Sourcing
            <span className="mt-2 block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Delivering Quality, Speed & Reliability
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-xl leading-relaxed text-gray-300 md:text-2xl">
            Precision Manufacturing, Built for Scale.
            Partiq enables fast, reliable production — from prototypes to volume manufacturing — with trusted global partners and seamless execution.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/rfq"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            
            <a
              href="#capabilities"
              className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              Browse Capabilities
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {["CNC Turning", "VMC Milling", "3-Axis to 5-Axis", "Quality Inspection", "Material Certs", "Export Packaging"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <h3 className="text-lg font-semibold text-white">
            Seeking Quick Answers?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Learn about our sourcing process, lead times, quality standards, 
            and how we ensure supply chain stability for your business.
          </p>
          <a
            href="/faq"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
          >
            View Our FAQs
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}