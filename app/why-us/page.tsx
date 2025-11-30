// app/why-us/page.tsx
import React, { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Why from "../components/Why";

export const metadata = {
  title: "Why Choose Vasu Car Travels Ongole | Safe & Trusted Cabs",
  description:
    "Know why Ongole families and office travellers trust Vasu Car Travels – safe drivers, clean AC cars, 24/7 service and reliable outstation cab packages.",
};

export default function WhyUsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Top intro */}
        <section className="bg-neutral-50 border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
              Why Vasu Car Travels
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
              Why Choose Vasu Car Travels in Ongole?
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              We are not just another taxi contact number in Ongole. Vasu Car
              Travels focuses on safe, clean and reliable cabs for families,
              office commuters and long-distance travellers. Many customers call
              us again and again for regular trips and function bookings.
            </p>
          </div>
        </section>

        {/* Reuse home Why section */}
        <Why />

        {/* Extra trust strip with quick bullets */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-12 grid gap-8 md:grid-cols-3 text-sm">
            <div>
              <h2 className="font-semibold text-[#8B0000]">
                Transparent Pricing
              </h2>
              <p className="mt-2 text-neutral-700 leading-relaxed">
                No hidden charges or sudden fuel/toll surprises. We clearly
                explain approximate cab fare from Ongole before you start your
                journey.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-[#8B0000]">
                Local Ongole Knowledge
              </h2>
              <p className="mt-2 text-neutral-700 leading-relaxed">
                Drivers know local areas like Bhagyanagar, Mangamuru Road,
                Trunk Road and nearby villages, helping you reach on time even
                in traffic.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-[#8B0000]">
                Family-Friendly Service
              </h2>
              <p className="mt-2 text-neutral-700 leading-relaxed">
                We regularly handle temple tours, wedding guests, children and
                elders. Our team understands the care needed for family trips.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
