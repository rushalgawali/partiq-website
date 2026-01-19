"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RFQPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // Convert to mailto link (simple solution - no backend needed)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      category: formData.get("category"),
      material: formData.get("material"),
      quantity: formData.get("quantity"),
      leadTime: formData.get("leadTime"),
      notes: formData.get("notes"),
    };

    const emailBody = `
New RFQ Request from Partiq.in

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}

Part Details:
Category: ${data.category}
Material: ${data.material}
Quantity: ${data.quantity}
Lead Time: ${data.leadTime}

Additional Notes:
${data.notes}
    `.trim();

    const mailtoLink = `mailto:rushalgawali@gmail.com?subject=New RFQ Request - ${data.company}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setStatus("success");
    setMessage("Opening your email client... Please send the email to complete your RFQ submission.");
    
    // Reset form
    setTimeout(() => {
      e.currentTarget.reset();
      setStatus("idle");
      setMessage("");
    }, 5000);
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Request a Quote
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Share your requirements and we'll connect you with the right manufacturing partners.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Part Details */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900">Part Details</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Part Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  >
                    <option value="">Select category</option>
                    <option value="CNC Turning">CNC Turning</option>
                    <option value="VMC Milling">VMC Milling</option>
                    <option value="Both (Turning + Milling)">Both (Turning + Milling)</option>
                    <option value="Precision Grinding">Precision Grinding</option>
                    <option value="Assembly">Assembly</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="material" className="block text-sm font-medium text-gray-700">
                    Material
                  </label>
                  <select
                    id="material"
                    name="material"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  >
                    <option value="">Select material</option>
                    <option value="Aluminum">Aluminum</option>
                    <option value="Steel">Steel</option>
                    <option value="Stainless Steel">Stainless Steel</option>
                    <option value="Brass">Brass</option>
                    <option value="Copper">Copper</option>
                    <option value="Titanium">Titanium</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="e.g., 1000 pieces"
                  />
                </div>

                <div>
                  <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700">
                    Target Lead Time
                  </label>
                  <input
                    type="text"
                    id="leadTime"
                    name="leadTime"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="e.g., 4 weeks"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-t border-gray-200 pt-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                Additional Requirements
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Include tolerances, surface finish, certifications, packaging requirements, drawings, or any other details.
              </p>
              <textarea
                id="notes"
                name="notes"
                rows={6}
                className="mt-3 block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Please specify:
- Tolerance requirements (e.g., ±0.005mm)
- Surface finish (e.g., Ra 3.2)
- Certifications needed (e.g., material certs, PPAP)
- Packaging requirements
- Destination/shipping details
- Any drawings or specifications (you can attach files in the email)"
              />
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 pt-6">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Processing..." : "Submit RFQ Request"}
              </button>
              
              {message && (
                <div className={`mt-4 rounded-xl p-4 text-sm ${
                  status === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                  {message}
                </div>
              )}

              <p className="mt-4 text-center text-sm text-gray-500">
                We typically respond within 24-48 hours
              </p>
            </div>
          </form>

          {/* Contact Alternative */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Prefer to Contact Us Directly?
            </h3>
            <div className="mt-4 flex flex-col items-center gap-3 text-gray-600 sm:flex-row sm:justify-center">
              <a 
                href="mailto:rushalgawali@gmail.com" 
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rushalgawali@gmail.com
              </a>
              <span className="hidden text-gray-300 sm:inline">|</span>
              <a 
                href="tel:+918888831961" 
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 88888 31961
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}