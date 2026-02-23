"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "rushalgawali@gmail.com",
      href: "mailto:rushalgawali@gmail.com",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 8888831961",
      href: "tel:+918888831961",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.17 1.535 5.963L.057 23.428a.75.75 0 00.916.919l5.688-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 01-4.953-1.355l-.355-.21-3.676.944.977-3.562-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
      ),
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/918888831961",
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Pune, India",
      href: "#",
    },
  ];

  const subjects = [
    "Request a Quote",
    "Technical Inquiry",
    "Partnership / Supplier",
    "General Question",
    "Other",
  ];

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
              Get In Touch
            </span>
            <h1 className="mt-6 text-3xl font-light tracking-tight text-white md:text-5xl">
              Let's Talk About
              <br />
              <span className="text-green-400">Your Next Project</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
              Whether you need a prototype or a production run, our team is ready to help you get precision parts — fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="px-6 py-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid gap-4 md:grid-cols-2 md:gap-x-8"
          >
            {/* Left — Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-green-500">
                Send a Message
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-light text-white">Message Sent</h3>
                  <p className="mt-2 text-sm text-gray-400">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm text-green-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-400">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handle}
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50 focus:bg-white/8"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-400">Company</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handle}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-400">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handle}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-400">Phone</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handle}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-400">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handle}
                      className="w-full rounded-xl border border-white/10 bg-[#0e1420] px-4 py-2.5 text-sm text-white outline-none transition focus:border-green-500/50"
                    >
                      <option value="" disabled>Select a topic</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-400">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handle}
                      placeholder="Describe your part requirements, quantities, material, tolerances..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl border border-green-500/50 bg-green-500/10 py-3 text-sm font-medium text-green-400 transition hover:bg-green-500/20"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Right — Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Contact details card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8">
                <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-green-500">
                  Contact Details
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-green-400 transition group-hover:border-green-500/30 group-hover:bg-green-500/10">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-sm font-normal text-white transition group-hover:text-green-400">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-500">
                  What to Expect
                </h2>
                <div className="space-y-3">
                  {[
                    { time: "< 1 hr", label: "Initial response during business hours" },
                    { time: "24 hrs", label: "Detailed quote with DFM feedback" },
                    { time: "5–10 days", label: "Prototype delivery" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="w-16 shrink-0 text-sm font-medium text-green-400">{item.time}</span>
                      <span className="text-sm text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}