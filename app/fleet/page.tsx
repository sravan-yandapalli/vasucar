// app/fleet/page.tsx
import React, { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fleet from "../components/Fleet";
import CarBuySellSupportPage from "../buy-sell/page";

export const metadata = {
  title: "Car Fleet in Ongole | AC Sedans, SUVs & Tempo Travellers",
  description:
    "View the fleet of AC cars and tempo travellers available with Vasu Car Travels in Ongole – Innova, SUVs, sedans and group vehicles for local and outstation trips.",
};

export default function FleetPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-white border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
              Our Cars
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
              Our AC Taxi Fleet in Ongole
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              From small family rides to big group tours, Vasu Car Travels
              offers a range of well-maintained vehicles in Ongole. All cars
              are fitted with AC and driven by experienced drivers for local
              and outstation travel.
            </p>
          </div>
        </section>

        <Fleet />
        <CarBuySellSupportPage/>
      </main>
      <Footer />
    </>
  );
}
