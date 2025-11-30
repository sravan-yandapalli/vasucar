// components/Why.tsx
import React, { JSX } from "react";

const points = [
  {
    title: "Trusted Local Owner",
    desc: "Vasu Car Travels is locally owned and operated in Ongole, serving families and businesses in Prakasam district for years.",
  },
  {
    title: "24/7 Availability",
    desc: "Late-night pickups, early-morning airport drops or urgent hospital visits – cabs available round the clock.",
  },
  {
    title: "Clean & Well-Maintained Cars",
    desc: "All vehicles are regularly serviced, cleaned and checked before long outstation trips for a smooth ride.",
  },
  {
    title: "Experienced & Safe Drivers",
    desc: "Drivers know Ongole routes, highways and nearby cities well, ensuring safe driving for women, kids and elders.",
  },
];

export default function Why(): JSX.Element {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14 grid gap-8 md:grid-cols-[1.6fr,1.4fr] items-start">
        {/* LEFT TEXT */}
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-red-200 font-semibold">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
            Why Ongole Families Prefer Vasu Car Travels
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
            We focus on safe, on-time and comfortable rides from Ongole. From
            short local trips to long outstation journeys, our team ensures
            every booking is handled carefully – right from confirmation till
            drop.
          </p>
          <p className="mt-3 text-xs md:text-sm text-gray-400">
            Whether it is a temple trip, office visit, marriage function or
            airport drop, we treat every ride like family travel.
          </p>
        </div>

        {/* RIGHT: BULLETS */}
        <div className="space-y-4">
          {points.map((p) => (
            <article
              key={p.title}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5"
            >
              <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#f80000] text-xs font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold">
                  {p.title}
                </h3>
                <p className="mt-1 text-[11px] md:text-sm text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
