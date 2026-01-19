"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          {/* New Partiq Logo */}
          <div style={{
            fontSize: '36px',
            fontWeight: '900',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            position: 'relative',
            paddingBottom: '6px'
          }}>
            Partiq
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)',
              borderRadius: '2px'
            }} />
          </div>
          
          {/* Tagline */}
          <div style={{
            fontSize: '9px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#666',
            fontWeight: '600',
            marginLeft: '4px'
          }}>
            Precision Sourcing
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a 
            className="text-gray-700 transition-colors hover:text-gray-900" 
            href="#capabilities"
          >
            Capabilities
          </a>
          <a 
            className="text-gray-700 transition-colors hover:text-gray-900" 
            href="#about"
          >
            About
          </a>
          <a 
            className="text-gray-700 transition-colors hover:text-gray-900" 
            href="#community"
          >
            Community
          </a>
          <a 
            className="text-gray-700 transition-colors hover:text-gray-900" 
            href="/contact"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/rfq"
            className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <a
              href="#capabilities"
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Capabilities
            </a>
            <a
              href="#about"
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#community"
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="/contact"
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/rfq"
              className="mt-2 rounded-full bg-gray-900 px-4 py-3 text-center text-base font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}