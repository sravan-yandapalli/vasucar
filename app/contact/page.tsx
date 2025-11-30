import React, { JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact & Book Cab | Vasu Car Travels Ongole",
  description:
    "Call or WhatsApp Vasu Car Travels Ongole for 24/7 cab booking. Address: Trunk Road, Bhagyanagar, Ongole, Andhra Pradesh 523001.",
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#f80000] font-semibold">
              Contact / Book Cab
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
              Contact Vasu Car Travels Ongole
            </h1>

            <div className="mt-6 grid gap-8 md:grid-cols-[2fr,3fr] items-start">
              {/* Left: contact details */}
              <div className="space-y-4 text-sm text-neutral-800">
                <div>
                  <h2 className="font-semibold text-base">Phone</h2>
                  <a
                    href="tel:+917075367929"
                    className="mt-1 inline-flex items-center gap-2 text-[#8B0000] font-semibold"
                  >
                    📞 70753 67929
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">
                    Available 24/7 for instant cab booking.
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-base">WhatsApp</h2>
                  <a
                    href="https://wa.me/917075367929"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366] text-white text-xs font-semibold"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <h2 className="font-semibold text-base">Address</h2>
                  <p className="mt-1 text-sm leading-relaxed">
                    Trunk Road, 1st Lane, near East K.B., <br />
                    Bhagyanagar, Ongole, Andhra Pradesh 523001.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/4iY1PrDyxai6gqJJ9"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-xs text-[#f80000] underline underline-offset-4"
                  >
                    📍 Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Right: simple booking form (for future backend) */}
              <form
                className="bg-white rounded-2xl shadow border border-neutral-200 p-5 md:p-6 space-y-4 text-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text-base md:text-lg font-semibold text-black">
                  Quick Cab Enquiry
                </h2>
                <p className="text-xs text-neutral-500">
                  Fill this form and we’ll call you back to confirm your booking.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-xs font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#f80000]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs font-semibold">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#f80000]"
                      placeholder="10-digit number"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-xs font-semibold">
                      Pickup From
                    </label>
                    <input
                      type="text"
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#f80000]"
                      placeholder="Eg: Ongole, Bhagyanagar"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs font-semibold">
                      Drop To
                    </label>
                    <input
                      type="text"
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#f80000]"
                      placeholder="Eg: Tirupati / Vijayawada"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xs font-semibold">
                    Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#f80000]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#f80000] text-white font-semibold text-sm shadow hover:bg-red-700 transition-colors"
                >
                  Submit Enquiry (Demo)
                </button>

                <p className="text-[10px] text-neutral-500 mt-1">
                  This form is for demo only right now. For instant booking,
                  please call or WhatsApp directly.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
