import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Local & Outstation Cab Packages in Ongole | Vasu Car Travels",
  description:
    "Check Vasu Car Travels cab packages in Ongole – 8 hours, 12 hours and 250+ km outstation plans with clear pricing and no hidden charges.",
};

export default function CabPackagesOngolePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-red-700/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-red-900/70" />

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT: Text */}
          <div className="relative z-10 w-full md:w-1/2">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-red-400/90 mb-3">
              Vasu Car Travels · Ongole
            </p>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
              Local &amp; Outstation Cab Packages
              <span className="block text-red-400 mt-1">
                Clear Rates in Ongole
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-200/90 mb-5 max-w-lg">
              Transparent cab pricing for Ongole – no confusing math, no
              surprise charges. Choose from 8-hour and 12-hour city packages or
              outstation per km plans with a minimum 250 km per day.
            </p>

            <ul className="text-xs md:text-sm text-zinc-100/95 space-y-1 mb-6">
              <li>• Fixed hourly &amp; km limits – clearly mentioned.</li>
              <li>• Extra hours &amp; extra km charged at simple flat rates.</li>
              <li>• Tolls, parking &amp; state tax charged as actuals.</li>
            </ul>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="tel:+918885553158"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-red-500 text-white shadow-lg shadow-red-600/40 hover:bg-red-400 hover:scale-105 transition"
              >
                📞 Call to Book
              </a>
              <a
                href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20please%20share%20details%20of%20your%20cab%20packages%20in%20Ongole."
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-emerald-500 text-black shadow-lg shadow-emerald-600/40 hover:bg-emerald-400 hover:scale-105 transition"
              >
                💬 WhatsApp for Packages
              </a>
            </div>

            <p className="mt-4 text-[11px] md:text-xs text-zinc-400">
              Prices for Ongole city limits. Custom quotes available for special
              routes or multi-day trips.
            </p>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-80 lg:h-96">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative w-full h-full rounded-3xl border border-red-600/50 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              <Image
                src="/cab.jpeg"
                alt="Cab packages in Ongole by Vasu Car Travels"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-gradient-to-b from-black via-zinc-950 to-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Local City Packages – Ongole
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 mb-6 max-w-2xl">
            Ideal for local work, shopping, functions, hospital visits, office
            meetings and city rides starting from Ongole.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* 8 HOUR PACKAGE */}
            <PackageCard
              label="Most Popular"
              title="8 Hours / 80 Km"
              price="₹2000"
              subtitle="Perfect for half-day plans"
              points={[
                "Includes first 8 hours & 80 km",
                "Extra hour: ₹100",
                "Extra km: ₹12/km",
              ]}
              smallNote="Best for local trips within Ongole city limits."
            />

            {/* 12 HOUR PACKAGE */}
            <PackageCard
              label="Full-Day Ride"
              title="12 Hours / 120 Km"
              price="₹2800"
              subtitle="For full-day usage"
              points={[
                "Includes first 12 hours & 120 km",
                "Extra hour: ₹150",
                "Extra km: ₹12/km",
              ]}
              smallNote="Ideal for weddings, events, and full-day city roaming."
            />

            {/* CUSTOM HOURLY */}
            <PackageCard
              label="Flexible"
              title="Custom Hourly Plan"
              price="Call for Best Rate"
              subtitle="Tailored to your need"
              points={[
                "Short 4–6 hour trips",
                "Multiple pick-up & drop points",
                "Best suited for meetings & errands",
              ]}
              smallNote="Share your timing & route – we’ll suggest the most economical option."
            />
          </div>
        </div>
      </section>

      {/* OUTSTATION SECTION */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Outstation Packages – 250+ Km Per Day
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 mb-5 max-w-2xl">
            Planning a trip from Ongole to Tirupati, Vijayawada, Hyderabad or
            other cities? We offer simple, per km-based outstation pricing with
            a minimum of 250 km per day.
          </p>

          <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
            {/* Outstation main card */}
            <div className="rounded-2xl border border-red-600/50 bg-zinc-950/90 p-5 md:p-6 shadow-xl shadow-black/70">
              <p className="text-xs uppercase tracking-[0.2em] text-red-300 mb-2">
                Outstation Per Km Plan
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                250+ Km Per Day – Outstation from Ongole
              </h3>
              <p className="text-sm md:text-base text-zinc-100 mb-3">
                <span className="font-medium text-red-300">Per km rate:</span>{" "}
                ₹14/km (within Andhra Pradesh &amp; Telangana)
              </p>

              <ul className="text-xs md:text-sm text-zinc-100/95 space-y-1 mb-4">
                <li>• Minimum billing: 250 km per day.</li>
                <li>• Example: 250 km × ₹14 ≈ ₹3500 per day (base cab fare).</li>
                <li>• Tolls, parking &amp; state tax extra as actuals.</li>
              </ul>

              <p className="text-[11px] md:text-xs text-zinc-400 mb-4">
                Exact quote may vary slightly based on route, vehicle type and
                stay duration. We always confirm final amount before starting
                the trip.
              </p>

              <a
                href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20I%20want%20an%20outstation%20cab%20from%20Ongole.%20Please%20share%20best%20price."
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-red-500 text-white shadow hover:bg-red-400 transition"
              >
                💬 Get Exact Outstation Quote
              </a>
            </div>

            {/* Suggested routes list */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-2">
                Popular From Ongole
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-zinc-100/95">
                <li>• Ongole → Tirupati / Tirumala</li>
                <li>• Ongole → Vijayawada / Kanaka Durga Temple</li>
                <li>• Ongole → Hyderabad</li>
                <li>• Ongole → Srisailam / Other Temples</li>
                <li>• Multi-city trips (e.g., Tirupati + Tiruvannamalai)</li>
              </ul>
              <p className="mt-4 text-[11px] md:text-xs text-zinc-400">
                Share full route and number of days – we’ll suggest whether day
                package or per km plan works cheaper for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-red-700/40 bg-gradient-to-r from-black via-red-950 to-black">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm md:text-base font-semibold text-zinc-50">
              Confused which package suits you best?
            </p>
            <p className="text-xs md:text-sm text-zinc-300">
              Just tell us your plan (timings, route &amp; places) – we&apos;ll
              suggest the cheapest and best option for your trip.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918885553158"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-red-500 text-white shadow hover:bg-red-400 transition"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20please%20help%20me%20choose%20the%20right%20cab%20package%20in%20Ongole%20for%20my%20trip."
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-emerald-500 text-black shadow hover:bg-emerald-400 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small reusable card component */

function PackageCard({
  label,
  title,
  price,
  subtitle,
  points,
  smallNote,
}: {
  label: string;
  title: string;
  price: string;
  subtitle: string;
  points: string[];
  smallNote: string;
}): JSX.Element {
  return (
    <article className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 md:p-6 shadow-lg shadow-black/70">
      <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-red-500 text-[11px] font-semibold px-3 py-1 shadow">
        {label}
      </span>

      <div className="mt-2">
        <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
        <p className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
          {price}
        </p>
        <p className="text-xs md:text-sm text-zinc-300 mb-3">{subtitle}</p>

        <ul className="text-xs md:text-sm text-zinc-100/95 space-y-1 mb-4">
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>

        <p className="text-[11px] md:text-xs text-zinc-400">{smallNote}</p>
      </div>
    </article>
  );
}
