import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Local & Outstation Cab Packages in Ongole | Vasu Car Travels",
  description:
    "Check Vasu Car Travels cab packages in Ongole – local 8-hour plans and outstation per km pricing with clear rates, driver beta and parking charges explained.",
};

export default function CabPackagesOngolePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-red-700/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-red-900/70" />

        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT */}
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
              Transparent cab pricing for Ongole. No hidden charges. All extra
              hours, extra kilometers, driver beta, parking and tolls are
              clearly explained before the trip.
            </p>

            <ul className="text-xs md:text-sm text-zinc-100/95 space-y-1 mb-6">
              <li>• Fixed hours & km clearly mentioned.</li>
              <li>• Extra hour & km charged separately.</li>
              <li>• Parking, tolls & driver beta extra.</li>
            </ul>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="tel:+918885553158"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-red-500 text-white shadow-lg hover:bg-red-400 transition"
              >
                📞 Call to Book
              </a>
              <a
                href="https://wa.me/918885553158"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-emerald-500 text-black shadow-lg hover:bg-emerald-400 transition"
              >
                💬 WhatsApp for Packages
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-80 lg:h-96">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-red-600/50">
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

      {/* LOCAL PACKAGES */}
      <section className="bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Local City Packages – Ongole
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 mb-6">
            Suitable for local rides, shopping, functions, hospital visits and
            office work within Ongole city limits.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* 8 HOURS */}
            <PackageCard
              label="Most Used"
              title="8 Hours / 80 Km"
              price="₹2500"
              subtitle="Local package within Ongole"
              points={[
                "Includes first 8 hours & 80 km",
                "Extra hour: ₹150",
                "Extra km: ₹13/km",
                "Parking charges extra",
                "Driver beta extra",
              ]}
              smallNote="Applicable for local usage only."
            />

            {/* CUSTOM */}
            <PackageCard
              label="Flexible"
              title="Custom Local Plan"
              price="Call for Best Rate"
              subtitle="Based on your requirement"
              points={[
                "Short duration trips",
                "Multiple stops allowed",
                "Best for meetings & errands",
              ]}
              smallNote="Contact us with your timing & route for exact pricing."
            />
          </div>
        </div>
      </section>

      {/* OUTSTATION */}
      <section className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Outstation Cab Packages
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 mb-6">
            Simple per km pricing for outstation trips from Ongole.
          </p>

          <div className="rounded-2xl border border-red-600/50 bg-black p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              300 Km Per Day – Outstation from Ongole
            </h3>

            <p className="text-sm md:text-base mb-3">
              <span className="font-medium text-red-400">Per km rate:</span>{" "}
              ₹13/km
            </p>

            <ul className="text-xs md:text-sm space-y-1 text-zinc-200 mb-4">
              <li>• Minimum billing: 300 km per day.</li>
              <li>• Driver beta extra.</li>
              <li>• Tolls & parking extra.</li>
              <li>• Same-day & multi-day trips available.</li>
            </ul>

            <a
              href="https://wa.me/918885553158"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white hover:bg-red-400 transition"
            >
              💬 Get Exact Outstation Quote
            </a>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-sm md:text-base font-semibold">
            All charges are explained clearly before trip start
          </p>
          <p className="text-xs md:text-sm text-zinc-400 mt-1">
            No hidden costs · Transparent billing · Trusted service in Ongole
          </p>
        </div>
      </section>
    </main>
  );
}

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
    <article className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <span className="absolute -top-3 left-4 bg-red-500 text-black text-[11px] font-semibold px-3 py-1 rounded-full">
        {label}
      </span>

      <h3 className="text-lg md:text-xl font-semibold mt-4">{title}</h3>
      <p className="text-2xl font-bold text-red-400 mt-1">{price}</p>
      <p className="text-xs md:text-sm text-zinc-300 mb-3">{subtitle}</p>

      <ul className="text-xs md:text-sm space-y-1 mb-4">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>

      <p className="text-[11px] md:text-xs text-zinc-400">{smallNote}</p>
    </article>
  );
}
