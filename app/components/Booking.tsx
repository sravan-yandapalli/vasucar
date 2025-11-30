// components/Booking.tsx
import React, { JSX } from "react";

export default function Booking(): JSX.Element {
  return (
    <section className="bg-gradient-to-b from-[#8B0000] via-[#b61616] to-[#2b0000]">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14 text-white">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs uppercase tracking-[0.2em]">
            ⚡ Instant Booking
          </span>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Quick Cab Booking &amp; Per KM Pricing
          </h2>
          <p className="mt-2 text-xs md:text-sm text-red-100">
            Share your details in a few seconds &mdash; we’ll confirm your ride
            for local, airport or outstation trips from Ongole.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr,1.7fr] items-start max-w-5xl mx-auto">
          {/* LEFT: Pricing per KM */}
          <div className="space-y-3">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              Approximate Pricing (Ongole Based)
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <PriceItem
                label="Local City Taxi"
                price="₹12 – ₹14 / KM"
                note="Inside Ongole city limits"
              />
              <PriceItem
                label="Airport Transfers"
                price="₹14 – ₹18 / KM"
                note="Vijayawada / Hyderabad side"
              />
              <PriceItem
                label="Sedan Cabs"
                price="₹13 / KM avg"
                note="Dzire / Etios type"
              />
              <PriceItem
                label="SUV / Innova"
                price="₹15 / KM avg"
                note="Family & group trips"
              />
            </div>

            <p className="text-[10px] md:text-xs text-red-100/80 mt-1">
              *Exact fare will be shared on call/WhatsApp based on route, tolls,
              waiting time and return conditions.
            </p>
          </div>

          {/* RIGHT: Booking Form Card (static, no handler) */}
          <div className="bg-white text-black rounded-2xl shadow-2xl border border-red-100/70 px-4 py-5 md:px-6 md:py-6 relative overflow-hidden">
            {/* subtle colored corner accent */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#f80000]/10 pointer-events-none" />

            <div className="relative">
              <h3 className="text-base md:text-lg font-semibold text-[#8B0000]">
                Book Your Cab in 30 Seconds
              </h3>
              <p className="mt-1 text-[11px] md:text-xs text-neutral-600">
                Fill this quick form and we’ll call or WhatsApp you back to
                confirm the booking.
              </p>

              <form className="mt-4 grid gap-3 text-xs md:text-sm">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 font-semibold">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full p-2 rounded-lg border border-neutral-300 outline-none focus:border-[#f80000]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile"
                      className="w-full p-2 rounded-lg border border-neutral-300 outline-none focus:border-[#f80000]"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 font-semibold">
                      Pickup From
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Ongole, Bhagyanagar"
                      className="w-full p-2 rounded-lg border border-neutral-300 outline-none focus:border-[#f80000]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">
                      Drop To
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Tirupati / Vijayawada"
                      className="w-full p-2 rounded-lg border border-neutral-300 outline-none focus:border-[#f80000]"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-[1.2fr,0.8fr]">
                  <div>
                    <label className="block mb-1 font-semibold">Purpose</label>
                    <input
                      type="text"
                      placeholder="Airport, function, office, temple trip..."
                      className="w-full p-2 rounded-lg border border-neutral-300 outline-none focus:border-[#f80000]"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold">
                      Trip Type
                    </label>
                    <select
                      className="w-full p-2 rounded-lg border border-neutral-300 bg-white outline-none focus:border-[#f80000]"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option>Local</option>
                      <option>Airport Pickup</option>
                      <option>Airport Drop</option>
                      <option>Outstation One-Way</option>
                      <option>Round Trip</option>
                    </select>
                  </div>
                </div>

                {/* Buttons – no JS, just UI */}
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#f80000] via-[#ff5b2d] to-[#f1bc00] text-white text-xs md:text-sm font-semibold shadow-md hover:brightness-110 transition-all"
                  >
                    🚕 Submit Booking Enquiry
                  </button>

                  <a
                    href="tel:+917075367929"
                    className="sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[#f80000] text-[#8B0000] text-xs md:text-sm font-semibold bg-white hover:bg-[#fff3f3] transition-colors"
                  >
                    📞 Call Now
                  </a>
                </div>
              </form>

              <p className="mt-3 text-[10px] md:text-xs text-neutral-500">
                For urgent rides, it’s always faster to call or WhatsApp
                directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mini reusable component for Price items */
function PriceItem({
  label,
  price,
  note,
}: {
  label: string;
  price: string;
  note: string;
}) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl px-3 py-3 flex flex-col items-start shadow-sm backdrop-blur-[2px]">
      <p className="font-semibold text-[11px] md:text-xs text-red-50">
        {label}
      </p>
      <p className="mt-1 font-bold text-sm md:text-base text-[#ffdf6b]">
        {price}
      </p>
      <p className="mt-0.5 text-[10px] md:text-[11px] text-red-100/90">
        {note}
      </p>
    </div>
  );
}
