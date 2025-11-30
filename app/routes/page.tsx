import React, { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoutesSection from "../components/Routes";

export const metadata = {
  title: "Popular Cab Routes From Ongole | Vasu Car Travels",
  description:
    "Book AC cabs from Ongole to Tirupati, Hyderabad, Vijayawada, Chennai, Bangalore and more. One-way and round-trip taxi packages with experienced drivers.",
};

export default function RoutesPage(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-neutral-50 border-b border-neutral-200">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
              From Ongole
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
              Popular Cab Routes From Ongole
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              Book trusted long-distance cabs from Ongole to major cities across
              Andhra Pradesh and South India. We operate safe highway rides for
              family functions, pilgrim trips, office visits and airport travel
              with experienced local drivers.
            </p>
          </div>
        </section>

        <RoutesSection />
      </main>

      <Footer />
    </>
  );
}
