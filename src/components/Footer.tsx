export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-3">
              {/* New Partiq Logo */}
              <div style={{
                fontSize: '32px',
                fontWeight: '900',
                letterSpacing: '-2px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                paddingBottom: '6px',
                display: 'inline-block'
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
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#666',
                fontWeight: '600'
              }}>
                Precision Sourcing
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-600">
              Your trusted sourcing partner for precision contract manufacturing. 
              Vetted partners, quality validation, and end-to-end export delivery — globally.
            
            </p>

            {/* Social Links (Optional) */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Navigation</div>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a className="transition-colors hover:text-gray-900" href="#capabilities">
                  Capabilities
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="#community">
                  Community
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="/rfq">
                  Request a Quote
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gray-900" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <div>
                <div className="font-medium text-gray-700">Email</div>
                <a 
                  href="mailto:rushalgawali@gmail.com" 
                  className="transition-colors hover:text-gray-900"
                >
                  rushalgawali@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-gray-700">Phone</div>
                <a 
                  href="tel:+918888831961" 
                  className="transition-colors hover:text-gray-900"
                >
                  +91 88888 31961
                </a>
              </div>
              <div>
                <div className="font-medium text-gray-700">Response Time</div>
                <div>Within 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
            <div>
              © {new Date().getFullYear()} Partiq. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="transition-colors hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}