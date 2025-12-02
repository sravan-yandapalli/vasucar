// components/Service.tsx
import React, { JSX } from "react";

const services = [
  {
    title: "Local City Taxi",
    desc: "Point-to-point drops anywhere inside Ongole city with clean AC cars.",
    img: "/s1.jpeg",
  },
  {
    title: "Airport Transfers",
    desc: "24/7 airport pickup & drop from Ongole to Vijayawada / Hyderabad and other airports.",
    img: "/s2.jpeg",
  },
  {
    title: "Railway Station Pickup / Drop",
    desc: "Name-board pickup available for guests at Ongole railway station.",
    img: "/s3.png",
  },
  {
    title: "Outstation One-Way",
    desc: "Affordable one-way cabs from Ongole to Tirupati, Hyderabad, Vijayawada, Chennai, Bangalore and more.",
    img: "/s4.jpeg",
  },
  {
    title: "Outstation Round Trip",
    desc: "Round-trip packages for temple tours, family trips and business travel from Ongole.",
    img: "/s5.jpeg",
  },
  {
    title: "Weddings & Functions",
    desc: "Multiple car coordination for marriages, receptions and family functions in and around Ongole.",
    img: "/s6.jpeg",
  },
];

export default function Service(): JSX.Element {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
        <p className="text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
          Services
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
          24/7 Cab &amp; Car Rental Services in Ongole
        </h2>
        <div className="mt-3 h-[4px] w-20 bg-[#f80000] rounded-full" />

        {/* MOBILE: horizontal scroll */}
        <div className="mt-6 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
            {services.map((s) => (
              <article
                key={s.title}
                className="snap-start min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 bg-white shadow-sm flex-shrink-0 overflow-hidden"
              >
                <div className="w-full h-32 bg-neutral-100">
                  <img
                    src={s.img}
                    alt={s.title + " service in Ongole"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#8B0000]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-700 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DESKTOP / TABLET: grid */}
        <div className="mt-8 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-40 bg-neutral-100">
                <img
                  src={s.img}
                  alt={s.title + " service in Ongole"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#8B0000]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
