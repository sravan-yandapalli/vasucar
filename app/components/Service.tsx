import React, { JSX } from "react";

const services = [
  {
    icon: "🚕",
    title: "Local City Taxi",
    description:
      "City travel for hospitals, shopping, meetings, hotels and nearby town drops. Per-km billing or fixed-price packages.",
  },
  {
    icon: "✈️",
    title: "Airport Taxi Service",
    description:
      "Early-morning, late-night and anytime airport pickup/drop from Ongole. Ideal for business and family travel.",
  },
  {
    icon: "🚆",
    title: "Railway Station Pickup/Drop",
    description:
      "Quick service for Ongole railway station and nearby junctions. Luggage support included.",
  },
  {
    icon: "🛣️",
    title: "Outstation Cab Booking",
    description:
      "Round-trip and one-way taxi from Ongole to major cities and tourist spots. Comfortable long-distance AC rides.",
  },
  {
    icon: "💍",
    title: "Marriage & Function Car Service",
    description:
      "Premium cars for weddings, engagements, temple visits and family functions that suit special occasions.",
  },
  {
    icon: "🏢",
    title: "Office Pickup & Drop",
    description:
      "Daily scheduled cabs for employees, students and professionals with punctual, safe navigation.",
  },
  {
    icon: "🚑",
    title: "Emergency & Last-Minute Cabs",
    description:
      "24/7 instant cab booking for urgent trips. Fast response team with priority support.",
  },
  {
    icon: "🔑",
    title: "Car Rental / Self-Drive",
    description:
      "AC Sedan or SUV for full-day / multi-day trips. Perfect for temple tourism, meetings and personal use.",
  },
];

const benefits = [
  "Experienced drivers",
  "Sanitized & clean cars",
  "No hidden charges",
  "Safe family rides",
  "Instant booking",
  "Flexible packages",
];

export default function ServicesSection(): JSX.Element {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">

        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="inline-flex items-center rounded-full bg-[#8B0000]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B0000]">
            Taxi & Cab Services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Our Taxi & Car Rental Services in Ongole
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base text-gray-600">
            Reliable, clean and safe cabs for local, airport, railway and
            outstation trips – with transparent pricing and quick booking.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1.5 hover:border-[#8B0000]/70 hover:bg-[#fff5f5] hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8B0000]/10 text-xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Auto-Scrolling Benefits */}
        <div className="mt-12 bg-white border-l-4 border-[#8B0000] rounded-lg shadow-md p-4">
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#8B0000] mb-3 text-center">
            Service Benefits
          </h3>

          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-scroll-horizontal whitespace-nowrap">
              {benefits.concat(benefits).map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B0000]/30 bg-[#8B0000]/5 text-xs sm:text-sm font-semibold text-gray-800"
                >
                  <span className="text-[#8B0000]">✓</span>
                  {item}
                </span>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
