import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Car Buying & Selling Support in Ongole | Vasu Car Travels",
  description:
    "Buy and sell used cars in Ongole with Vasu Car Travels – fair price guidance, trusted local contacts and easy documentation support.",
};

export default function CarBuySellSupportPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-red-700/40">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-red-900/70" />

        {/* Hero car image (right side on desktop) */}
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT: text */}
          <div className="relative z-10 w-full md:w-1/2">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-red-400/90 mb-3">
              Vasu Car Travels · Ongole
            </p>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
              Car Buying &amp; Selling
              <span className="block text-red-400 mt-1">
                Trusted Support in Ongole
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-200/90 mb-5 max-w-lg">
              Along with taxi and rental services, Vasu Car Travels also helps
              customers in Ongole to buy and sell used cars. Planning to upgrade
              your vehicle or sell your old car? We connect you with{" "}
              <span className="text-red-300 font-medium">
                genuine local buyers and trusted sellers
              </span>
              .
            </p>

            {/* Quick bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs md:text-sm">
              <div className="rounded-xl border border-red-500/40 bg-black/60 px-4 py-3">
                <p className="font-semibold text-red-300 mb-1">
                  ✔ Fair Market Price
                </p>
                <p className="text-zinc-200">
                  Get realistic pricing suggestions for your car based on
                  condition & market.
                </p>
              </div>
              <div className="rounded-xl border border-red-500/40 bg-black/60 px-4 py-3">
                <p className="font-semibold text-red-300 mb-1">
                  ✔ Trusted Local Contacts
                </p>
                <p className="text-zinc-200">
                  Only Ongole & nearby buyers/sellers we personally verify and
                  recommend.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="tel:+919400380489"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-red-500 text-white shadow-lg shadow-red-600/40 hover:bg-red-400 hover:scale-105 transition"
              >
                📞 Call Vasu Car Travels
              </a>

              <a
                href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20I%20need%20help%20to%20buy%20or%20sell%20a%20used%20car%20in%20Ongole.%20Please%20share%20details."
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm md:text-base font-semibold bg-emerald-500 text-black shadow-lg shadow-emerald-600/40 hover:bg-emerald-400 hover:scale-105 transition"
              >
                💬 WhatsApp for Car Buy/Sell
              </a>
            </div>

            <p className="mt-4 text-[11px] md:text-xs text-zinc-400">
              No random online leads. We focus on safe, local and genuine
              connections only.
            </p>
          </div>

          {/* RIGHT: car image */}
          <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-80 lg:h-96">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative w-full h-full rounded-3xl border border-red-600/50 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              <Image
                src="/b1.jpeg"
                alt="Used car buying and selling support in Ongole"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO + PROCESS SECTION */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT: Detailed info */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                How We Help You Buy or Sell Your Car
              </h2>
              <p className="text-sm md:text-base text-zinc-200/90 mb-5">
                Whether you&apos;re a first-time car seller or searching for a
                well-maintained used car, we guide you at each step so you don&apos;t
                get cheated or underpaid.
              </p>

              <div className="rounded-2xl border border-red-500/40 bg-black/70 px-4 py-4 md:px-5 md:py-5 mb-5">
                <ul className="space-y-2 text-sm md:text-base text-zinc-100/95">
                  <li>• Guidance for selling your car at a fair market price.</li>
                  <li>• Support for checking documents and basic vehicle condition.</li>
                  <li>• Only Ongole-based and nearby trusted contacts are preferred.</li>
                  <li>• Help in shortlisting serious buyers (no time-wasters).</li>
                  <li>• Assistance in making the deal smooth and transparent.</li>
                </ul>
              </div>

              <p className="text-xs md:text-sm text-zinc-400">
                Note: We don&apos;t act as full dealers or brokers. Our goal is to{" "}
                <span className="text-red-300">
                  guide and connect you safely
                </span>{" "}
                with the right people.
              </p>
            </div>

            {/* RIGHT: Steps */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Simple 3-Step Process
              </h3>

              <div className="space-y-4 text-sm md:text-base">
                <StepCard
                  step="01"
                  title="Reach Out to Us"
                  text="Call or WhatsApp your requirement – whether you want to sell or buy a car in Ongole."
                />
                <StepCard
                  step="02"
                  title="Share Basic Details"
                  text="For selling: car model, year, KM run, condition & documents. For buying: your budget and preferred car type."
                />
                <StepCard
                  step="03"
                  title="Get Connected"
                  text="We connect you with genuine local buyers/sellers and support you until the deal is safely closed."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP / GALLERY */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Recently Assisted Deals (Sample Visuals)
          </h3>
          <p className="text-xs md:text-sm text-zinc-300 mb-5">
            These are sample images to showcase the type of cars and transactions
            we often support in Ongole.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <GalleryCard
              src="/b2.jpeg"
              alt="Family car sold in Ongole"
              label="Family Car Upgrade"
            />
            <GalleryCard
              src="/b3.jpeg"
              alt="Hatchback car sold in Ongole"
              label="First Car Buyer"
            />
            <GalleryCard
              src="/b4.jpeg"
              alt="Sedan car sold in Ongole"
              label="Sedan Deal Support"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="border-t border-red-700/40 bg-gradient-to-r from-black via-red-950 to-black">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm md:text-base font-semibold text-zinc-50">
              Want to sell your car or looking to buy a used car in Ongole?
            </p>
            <p className="text-xs md:text-sm text-zinc-300">
              Share your requirement now – we&apos;ll guide you with honest suggestions
              and trusted local contacts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919400380489"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-red-500 text-white shadow hover:bg-red-400 transition"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20I%20need%20help%20to%20buy%20or%20sell%20a%20used%20car%20in%20Ongole.%20Please%20guide%20me%20with%20next%20steps."
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

/* Small components */

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}): JSX.Element {
  return (
    <div className="flex gap-3">
      <div className="flex items-center justify-center h-10 w-10 rounded-full border border-red-500/70 bg-black/80 text-xs font-bold text-red-300">
        {step}
      </div>
      <div>
        <p className="font-semibold text-zinc-50 mb-1">{title}</p>
        <p className="text-zinc-300 text-xs md:text-sm">{text}</p>
      </div>
    </div>
  );
}

function GalleryCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}): JSX.Element {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
      <div className="relative w-full h-40 md:h-44">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-3 py-2">
        <p className="text-xs md:text-sm font-medium text-zinc-50">{label}</p>
      </div>
    </div>
  );
}
