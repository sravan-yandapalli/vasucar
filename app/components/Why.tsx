import React, { JSX } from "react";

const reasons = [
  "10+ Years Route-Experienced Drivers",
  "On-Time Guaranteed Pickup & Drop",
  "Safe Travel for Families and Ladies",
  "AC Comfort Cars (SUV, Sedan, Hatchback)",
  "Affordable and Flexible Pricing Plans",
  "No Hidden Charges / Transparent Billing",
  "24/7 Customer Support",
  "Function-Friendly and Premium Cars",
  "Luggage Assistance",
  "Last-Minute Bookings Accepted",
  "Multi-City Connectivity from Ongole",
];

export default function Why(): JSX.Element {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-[#8B0000]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B0000]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Why People Choose{" "}
            <span className="text-[#8B0000]">Vasu Car Travels Ongole</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We focus on safety, comfort and transparent pricing, so every ride
            feels reliable – whether it’s a quick city trip or a long outstation
            journey.
          </p>
        </div>

        {/* Reasons list */}
        <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3 rounded-xl bg-white/80 border border-slate-200 px-4 py-3 shadow-sm"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-base">
                ✅
              </span>
              <p className="text-sm sm:text-base font-medium text-slate-800">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
