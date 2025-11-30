// components/Routes.tsx
import React, { JSX } from "react";

const routes = [
  {
    from: "Ongole",
    to: "Tirupati",
    distance: "≈ 330 km",
    time: "7–8 hours",
  },
  {
    from: "Ongole",
    to: "Hyderabad",
    distance: "≈ 290 km",
    time: "5–6 hours",
  },
  {
    from: "Ongole",
    to: "Vijayawada",
    distance: "≈ 180 km",
    time: "3–4 hours",
  },
  {
    from: "Ongole",
    to: "Chennai",
    distance: "≈ 320 km",
    time: "6–7 hours",
  },
  {
    from: "Ongole",
    to: "Bangalore",
    distance: "≈ 520 km",
    time: "10–11 hours",
  },
];

export default function Routes(): JSX.Element {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-12">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-red-200 font-semibold">
          Popular Routes
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          Popular Cab Routes From Ongole
        </h2>
        <p className="mt-3 text-xs md:text-sm text-gray-300 max-w-2xl">
          Quick, comfortable AC cabs from Ongole to major cities in Andhra
          Pradesh and South India. One-way and round-trip options available
          24/7.
        </p>

        {/* TIMELINE / LIST STYLE – very different from card grid */}
        <div className="mt-6 md:mt-8 border-l border-red-600/60 pl-4 md:pl-6 space-y-4">
          {routes.map((r) => (
            <article
              key={r.to}
              className="relative"
            >
              {/* red dot */}
              <span className="absolute -left-[10px] md:-left-[13px] mt-2 w-[10px] h-[10px] rounded-full bg-[#f80000]" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                <div>
                  <h3 className="text-sm md:text-base font-semibold">
                    {r.from} ➜ {r.to} Cab
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-300">
                    Safe highway ride with experienced drivers from Ongole.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[11px] md:text-xs text-gray-200">
                  <span className="inline-flex items-center gap-1">
                    🚗 <span>{r.distance}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    ⏱ <span>{r.time}</span>
                  </span>

                  <a
                    href="tel:+917075367929"
                    className="ml-1 md:ml-2 inline-flex items-center px-3 py-1 rounded-full bg-[#f80000] text-white font-semibold text-[11px] shadow hover:bg-red-600 transition-colors"
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
