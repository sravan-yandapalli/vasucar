// app/contact/page.tsx
import type { Metadata } from "next";
import type { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/rates";

// SEO metadata
export const metadata: Metadata = {
  title: "Contact Vasu Car Travels Ongole | Call & WhatsApp 24/7",
  description:
    "Get in touch with Vasu Car Travels in Ongole for 24/7 AC cab booking, airport & railway pickup, and outstation taxis from Ongole to Hyderabad, Tirupati, Vijayawada, Chennai and more. Book instantly via call or WhatsApp.",
  keywords: [
    "contact car travels Ongole",
    "cab booking phone number Ongole",
    "Ongole taxi WhatsApp booking",
    "airport cab help Ongole",
    "railway pickup contact Ongole",
    "outstation cab support Ongole",
    "Vasu Car Travels contact",
  ],
  alternates: {
    canonical: "/contact",
  },
};

// Local business contact JSON-LD
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasu Car Travels Ongole",
  url: "https://cartravelsongole.in/contact",
  telephone: "+91-9400380489",
  description:
    "24/7 AC taxi, airport transfer and outstation cab service in Ongole, Andhra Pradesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ongole",
    addressRegion: "Andhra Pradesh",
    postalCode: "523001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9490369489",
    contactType: "customer booking support",
    areaServed: "Ongole, Prakasam district, Andhra Pradesh",
    availableLanguage: ["English", "Telugu"],
  },
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      {/* Local business schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <Navbar />

      <main className="bg-white text-neutral-900">
        {/* INTRO SECTION */}
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
              Contact Vasu Car Travels Ongole
            </h1>
            <div className="mt-3 w-20 h-[4px] bg-[#f80000]" />
            <p className="mt-4 text-sm lg:text-base leading-relaxed font-medium text-neutral-700">
              Looking for a trusted{" "}
              <strong>car travel service in Ongole</strong>? Reach out anytime.
              We provide <strong>24/7 AC cabs</strong> with reliable drivers
              for local city rides, airport transfers, railway pick-ups and
              outstation trips from Ongole to Hyderabad, Tirupati, Vijayawada,
              Chennai, Bangalore and more.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-md">
              <a
                href="tel:+919400380489"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f1bc00d6] px-4 py-3 text-sm font-semibold shadow-md"
                aria-label="Call Vasu Car Travels Ongole"
              >
                <img
                  src="/call.svg"
                  alt="Call"
                  className="w-5 h-5 object-contain"
                />
                <span>Call Now: +91 9490369489</span>
              </a>

              <a
                href="https://wa.me/919490369489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f80000] px-4 py-3 text-sm font-semibold text-white shadow-md"
                aria-label="Message Vasu Car Travels Ongole on WhatsApp"
              >
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </section>

        
        {/* Strong CTA – reuse your booking component */}
        <Booking />

        {/* MAP SECTION */}
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <h2 className="text-xl font-semibold">
              Locate Vasu Car Travels Ongole on Map
            </h2>
            <p className="mt-2 text-sm text-neutral-700 max-w-2xl">
             Trunk road, 1st Ln, near East Kb, Bhagyanagar, Ongole, Andhra Pradesh 523001
            </p>
            <div className="mt-5 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm h-[320px] lg:h-[420px]">
              <iframe
                title="Vasu Car Travels Ongole Map"
                src="https://www.google.com/maps?q=Ongole,+Andhra+Pradesh&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
