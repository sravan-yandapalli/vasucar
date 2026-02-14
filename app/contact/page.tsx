
import type { Metadata } from "next";
import type { JSX } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Book Ongole Taxi Instantly | 24/7 Call & WhatsApp",
  description:
    "Instant Ongole taxi booking. Call or WhatsApp Vasu Car Travels for airport drop, local rides & outstation trips.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative py-20 text-center">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-black to-black opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.3),transparent)] animate-pulse" />

          <div className="relative z-10 max-w-6xl mx-auto px-4">

            {/* Back Button */}
            <div className="mb-6 text-left">
              <Link
                href="/"
                className="text-sm bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition"
              >
                ← Back to Home
              </Link>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Book Your Taxi in Ongole <br />
              <span className="text-red-500">Fast. Safe. 24/7 Available.</span>
            </h1>

            <p className="mt-5 text-neutral-300 max-w-2xl mx-auto">
              Airport transfer, railway pickup, local rides & outstation trips.
              Trusted drivers. Instant confirmation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

              <a
                href="tel:+919490369489"
                className="rounded-2xl bg-yellow-400 text-black font-bold px-8 py-4 text-lg shadow-xl hover:scale-105 transition"
              >
                📞 Call Now – 9490369489
              </a>

              <a
                href="https://wa.me/919490369489"
                target="_blank"
                className="relative rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold shadow-xl hover:scale-105 transition"
              >
                💬 WhatsApp Booking
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-1 rounded-full animate-pulse">
                  Online
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 bg-neutral-900 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Choose Vasu Car Travels?
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

            <div className="bg-neutral-800 p-6 rounded-2xl hover:scale-105 transition shadow-lg">
              <h3 className="text-lg font-semibold text-red-500">
                24/7 Availability
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                We operate round the clock for airport & emergency travel.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-2xl hover:scale-105 transition shadow-lg">
              <h3 className="text-lg font-semibold text-red-500">
                Clean AC Vehicles
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                Well maintained cars with professional drivers.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-2xl hover:scale-105 transition shadow-lg">
              <h3 className="text-lg font-semibold text-red-500">
                Transparent Pricing
              </h3>
              <p className="mt-3 text-sm text-neutral-300">
                No hidden charges. Clear rates before trip starts.
              </p>
            </div>

          </div>
        </section>

        {/* MAP SECTION */}
        <section className="py-16 bg-black text-center">
          <h2 className="text-2xl font-semibold">
            Locate Us in Ongole
          </h2>

          <div className="mt-6 max-w-5xl mx-auto px-4 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 h-[350px]">
            <iframe
              title="Vasu Car Travels Ongole Map"
              src="https://www.google.com/maps?q=Ongole,+Andhra+Pradesh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </section>

      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919490369489"
        target="_blank"
        className="fixed bottom-24 right-6 bg-green-500 p-4 rounded-full shadow-2xl animate-pulse hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* FLOATING CALL */}
      <a
        href="tel:+919490369489"
        className="fixed bottom-6 right-6 bg-red-600 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        📞
      </a>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-neutral-800 flex sm:hidden z-40">
        <a
          href="tel:+919490369489"
          className="w-1/2 text-center py-4 bg-yellow-400 text-black font-bold"
        >
          📞 Call
        </a>
        <a
          href="https://wa.me/919490369489"
          className="w-1/2 text-center py-4 bg-green-500 font-bold"
        >
          💬 WhatsApp
        </a>
      </div>

      <Footer />
    </>
  );
}
