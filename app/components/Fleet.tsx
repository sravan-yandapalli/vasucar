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

        {/* ✅ EXTRA: Car Buying & Selling section */}
        <div className="mt-10 rounded-2xl bg-white shadow border border-dashed border-[#f80000] px-4 py-6 md:px-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-xl">
            <h3 className="text-lg md:text-xl font-semibold text-[#8B0000]">
              Car Buying &amp; Selling Support in Ongole
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-700 leading-relaxed">
              Along with taxi and rental services, Vasu Car Travels also helps
              customers in Ongole to <strong>buy and sell used cars</strong>.
              If you are planning to upgrade your vehicle or sell your old car,
              we can connect you with genuine local buyers and trusted sellers.
            </p>
            <ul className="mt-3 text-xs md:text-sm text-neutral-700 list-disc list-inside space-y-1">
              <li>Guidance for selling your car at a fair market price.</li>
              <li>Support for checking documents and basic vehicle condition.</li>
              <li>Only Ongole-based and nearby trusted contacts are preferred.</li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <p className="text-xs md:text-sm text-neutral-700">
              Want to <strong>sell</strong> your car or looking to{" "}
              <strong>buy</strong> a used car in Ongole?
            </p>
            <a
              href="tel:+917075367929"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#f80000] text-white font-semibold text-xs md:text-sm shadow hover:bg-red-700 transition-colors"
            >
              📞 Call Vasu Car Travels
            </a>
            <a
              href="https://wa.me/917075367929"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#25D366] text-white font-semibold text-xs md:text-sm shadow hover:bg-[#1ebe5d] transition-colors"
            >
              💬 WhatsApp for Car Buy/Sell
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
