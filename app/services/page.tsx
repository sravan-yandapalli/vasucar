import React, { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";

export const metadata = {
  title: "Taxi & Car Rental Services in Ongole | Vasu Car Travels",
  description:
    "See all taxi and car rental services offered by Vasu Car Travels in Ongole – local city cabs, airport transfers, railway station pickup, outstation one-way and round trips, wedding cars and more.",
};

export default function ServicesPage(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
              Our Services
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
              Taxi &amp; Car Rental Services in Ongole, Andhra Pradesh
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              Vasu Car Travels provides 24/7 cab service from Ongole for
              city rides, airport and railway station transfers, and outstation
              trips to major cities like Tirupati, Hyderabad, Vijayawada,
              Chennai and Bangalore. Choose from clean AC sedans, SUVs and
              tempo travellers for family, office and function travel.
            </p>
          </div>
        </section>

        {/* reuse your existing Service cards */}
        <Service />
      </main>

      <Footer />
    </>
  );
}
