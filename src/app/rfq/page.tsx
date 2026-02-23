"use client";

import { useState } from "react";
import { motion } from "framer-motion";


const projectTypes = [
  "Turnkey Contract Manufacturing",
  "Machined Parts Sourcing",
  "CNC Turning",
  "VMC Milling",
  "Assembly",
  "Quality Control",
  "Precision Grinding",
  "Logistics / Warehousing",
  "Parts Sourcing",
  "Other",
];

export default function RFQPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [message, setMessage] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");

  const toggleType = (t: string) =>
    setSelectedTypes((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const toggleContact = (m: string) =>
    setContactMethod((p) => (p.includes(m) ? p.filter((x) => x !== m) : [...p, m]));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);

    const data = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      location: fd.get("location"),
      contactMethod: contactMethod.join(", "),
      projectTypes: selectedTypes.join(", "),
      material: fd.get("material"),
      quantity: fd.get("quantity"),
      leadTime: fd.get("leadTime"),
      description: fd.get("description"),
      file: fileName || "None",
    };

    try {
      const SCRIPT_URL = "YOUR_APPS_SCRIPT_URL_HERE";
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("success");
      setMessage("RFQ submitted! We'll get back to you within 24 hours.");
      setSelectedTypes([]);
      setContactMethod([]);
      setFileName("");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("idle");
      setMessage("Something went wrong. Please email rushalgawali@gmail.com directly.");
    }
  }

  const input = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50";
  const label = "mb-1.5 block text-xs text-gray-400";

  if (status === "success") {
    return (
      <>
        
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f1a] px-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-light text-white">RFQ Submitted</h2>
          <p className="mt-2 text-sm text-gray-400">{message}</p>
          <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-green-400 hover:underline">
            Submit another →
          </button>
        </main>
      
      </>
    );
  }

  return (
    <>

      <main className="min-h-screen bg-[#0a0f1a] text-white">

        {/* Page Header */}
        <section className="relative overflow-hidden px-6 pb-6 pt-24 md:px-16">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Get a Quote
              </span>
              <h1 className="mt-5 text-3xl font-light tracking-tight md:text-4xl">
                Request for Quotation
                <br />
                <span className="text-green-400">Tell Us What You Need</span>
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-sm text-gray-400">
                Provide as many details as you can. We'll review your requirements and be in touch to discuss a potential partnership.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 py-8 pb-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 space-y-7 md:px-10"
            >

              {/* Name + Company */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={label}>Your Name *</label>
                  <input name="name" required placeholder="First and Last Name" className={input} />
                </div>
                <div>
                  <label className={label}>Company Name *</label>
                  <input name="company" required placeholder="Your Company" className={input} />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={label}>Email *</label>
                  <input name="email" type="email" required placeholder="john@company.com" className={input} />
                </div>
                <div>
                  <label className={label}>Phone *</label>
                  <input name="phone" required placeholder="+91 98765 43210" className={input} />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className={label}>Location *</label>
                <input name="location" required placeholder="City, State, Country & Postal Code" className={input} />
              </div>

              {/* Preferred Contact */}
              <div>
                <label className={label}>Preferred Contact Method</label>
                <div className="mt-2 flex gap-5">
                  {["Phone", "Email", "WhatsApp"].map((m) => (
                    <button type="button" key={m} onClick={() => toggleContact(m)}
                      className={`flex items-center gap-2 text-sm transition ${contactMethod.includes(m) ? "text-green-400" : "text-gray-400"}`}>
                      <div className={`flex h-4 w-4 items-center justify-center rounded border transition ${contactMethod.includes(m) ? "border-green-500 bg-green-500/20" : "border-white/20"}`}>
                        {contactMethod.includes(m) && (
                          <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* Type of Project */}
              <div>
                <label className={label}>Type of Project — Check all that apply</label>
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {projectTypes.map((t) => (
                    <button type="button" key={t} onClick={() => toggleType(t)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs transition ${
                        selectedTypes.includes(t)
                          ? "border-green-500/40 bg-green-500/10 text-green-400"
                          : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20"
                      }`}>
                      <div className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition ${selectedTypes.includes(t) ? "border-green-500 bg-green-500/30" : "border-white/20"}`}>
                        {selectedTypes.includes(t) && (
                          <svg className="h-2 w-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material + Quantity + Lead Time */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className={label}>Material</label>
                  <select name="material" className="w-full rounded-xl border border-white/10 bg-[#0e1420] px-4 py-2.5 text-sm text-white outline-none transition focus:border-green-500/50">
                    <option value="">Select</option>
                    {["Aluminum","Steel","Stainless Steel","Brass","Copper","Titanium","Plastic","Other"].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label}>Quantity</label>
                  <input name="quantity" placeholder="e.g., 1000 pcs" className={input} />
                </div>
                <div>
                  <label className={label}>Target Lead Time</label>
                  <input name="leadTime" placeholder="e.g., 4 weeks" className={input} />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className={label}>Project Description *</label>
                <textarea name="description" required rows={4}
                  placeholder="Tolerances, surface finish, certifications, packaging, destination, and any other specs..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-green-500/50"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className={label}>File Upload</label>
                <p className="mb-2 text-xs text-gray-600">JPG, PNG, PDF, DWG, STEP — max 30MB</p>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3.5 transition hover:border-green-500/40 hover:bg-green-500/5">
                  <svg className="h-5 w-5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-sm text-gray-400">{fileName || "Browse or drag & drop files here"}</span>
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf,.dwg,.step,.stp,.doc,.docx" className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
                </label>
              </div>

              {/* Submit */}
              <button type="submit" disabled={status === "submitting"}
                className="w-full rounded-xl border border-green-500/50 bg-green-500/10 py-3.5 text-sm font-medium text-green-400 transition hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-50">
                {status === "submitting" ? "Submitting..." : "Submit RFQ Request →"}
              </button>

              {message && status !== "success" && (
                <p className="text-center text-xs text-red-400">{message}</p>
              )}

              {/* Direct contact */}
              <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-5 sm:flex-row sm:justify-center sm:gap-6">
                <p className="text-xs text-gray-500">Prefer direct contact?</p>
                <a href="mailto:rushalgawali@gmail.com" className="text-xs text-gray-400 transition hover:text-green-400">rushalgawali@gmail.com</a>
                <span className="hidden text-white/20 sm:inline">|</span>
                <a href="tel:+918888831961" className="text-xs text-gray-400 transition hover:text-green-400">+91 88888 31961</a>
              </div>

            </motion.form>
          </div>
        </section>
      </main>
  
    </>
  );
}