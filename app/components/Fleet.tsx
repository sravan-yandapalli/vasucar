// components/Fleet.tsx
import React, { JSX } from "react";

const cars = [
  {
    name: "Toyota Innova",
    type: "Premium MPV",
    seats: "6+1",
    bags: "4–5",
    use: "Family trips, outstation tours, airport drops",
    img: "/f1.jpeg",
  },
  {
    name: "Hyundai Creta / SUV",
    type: "SUV",
    seats: "5+1",
    bags: "3–4",
    use: "City rides, family, business travel",
    img: "/f2.jpeg",
  },
  {
    name: "Swift Dzire / Sedan",
    type: "Sedan",
    seats: "4+1",
    bags: "2–3",
    use: "Local city trips, office commute",
    img: "/f3.jpeg",
  },
  {
    name: "Tempo Traveller",
    type: "Mini Bus",
    seats: "12–17",
    bags: "Many",
    use: "Group tours, marriages, temple trips",
    img: "/f4.jpeg",
  },
];

export default function Fleet(): JSX.Element {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
          Our Fleet
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
          AC Cars &amp; Tempo Travellers Available in Ongole
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-700 max-w-3xl">
          Choose the right vehicle for your trip – from compact sedans to
          spacious SUVs and tempo travellers, all with experienced drivers.
        </p>

        {/* MOBILE: horizontal scroll */}
        <div className="mt-6 md:hidden">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2">
            {cars.map((c) => (
              <article
                key={c.name}
                className="snap-start min-w-[260px] max-w-[260px] rounded-2xl bg-white shadow border border-neutral-200 overflow-hidden flex-shrink-0"
              >
                <div className="w-full aspect-[4/3] bg-neutral-200">
                  <img
                    src={c.img}
                    alt={`${c.name} taxi in Ongole`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-sm">
                  <h3 className="text-base font-semibold text-[#8B0000]">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-neutral-600">
                    {c.type} • {c.seats} seats • {c.bags} bags
                  </p>
                  <p className="mt-2 text-xs text-neutral-700 leading-relaxed">
                    {c.use}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DESKTOP/TAB: grid */}
        <div className="mt-8 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cars.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl bg-white shadow border border-neutral-200 overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-neutral-200">
                <img
                  src={c.img}
                  alt={`${c.name} taxi in Ongole`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-sm flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-[#8B0000]">
                  {c.name}
                </h3>
                <p className="mt-1 text-[11px] text-neutral-600">
                  {c.type} • {c.seats} seats • {c.bags} bags
                </p>
                <p className="mt-2 text-xs text-neutral-700 leading-relaxed flex-1">
                  {c.use}
                </p>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
