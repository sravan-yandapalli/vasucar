"use client";

import React, { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  const handleLinkClick = () => {
    // you can extend this later if needed (analytics, scroll to top, etc.)
    console.log("Navigated using footer link");
  };

  return (
    <footer className="bg-[#8B0000] text-white">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">

        {/* TOP SECTION */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* LEFT: BRAND */}
          <div className="md:max-w-sm">
            <div className="flex items-center gap-3 shrink-0">
              <Image
                src="/LOGO.png"
                alt="Vasu Car Travels Ongole logo"
                width={64}
                height={64}
                className="h-9 w-9 md:h-16 md:w-16 object-contain"
                priority
              />
              <div className="h-5 md:h-10 flex items-center">
                <img
                  src="/Name.svg"
                  alt="Vasu Car Travels Ongole wordmark"
                  className="h-full w-auto"
                />
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#ffe6e6]">
              We provide safe, comfortable, and on-time cab services in Ongole
              and across Prakasam district. From airport drops to outstation
              trips, we make every ride smooth and hassle-free for families,
              office commuters, and travelers.
            </p>
          </div>

          {/* MIDDLE: QUICK LINKS */}
          <nav aria-label="Footer navigation" className="md:min-w-[180px]">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="h-[2px] w-12 bg-white mb-4" />

            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Fleet", path: "/fleet" },
                { label: "Popular Routes", path: "/routes" },
                { label: "Why Us", path: "/why-us" },
                { label: "Contact / Book Cab", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={handleLinkClick}
                    className="inline-flex items-center gap-2 group"
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-white transition-colors group-hover:bg-[#ffd1d1]" />
                    <span className="group-hover:underline group-hover:underline-offset-4 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: CONTACT */}
          <div className="md:max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="h-[2px] w-12 bg-white mb-4" />

            <ul className="space-y-4 text-sm">

              {/* LOCATION */}
              <li className="flex items-start gap-3">
                <span className="mt-[2px] text-lg" aria-hidden="true">📍</span>
                <span>
                  Trunk Road, 1st Lane, near East KB, Bhagyanagar,
                  <br />
                  Ongole, Andhra Pradesh 523001, India
                </span>
              </li>

              {/* PHONE */}
              <li className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">📞</span>
                <button onClick={() => window.open("tel:+918885553158")} className="text-left">
                  <div
                    className="inline-flex flex-col items-start bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 shadow-md hover:bg-white/20 transition-all"
                  >
                    <span className="text-[9px] uppercase tracking-[0.16em] opacity-90 font-medium">
                      Call Now
                    </span>
                    <span className="text-base font-bold text-white leading-tight">
                      70753 67929
                    </span>
                  </div>
                </button>
              </li>

              {/* WHATSAPP */}
              <li className="flex items-start gap-3">
                <span className="text-lg" aria-hidden="true">🟢</span>
                <span>
                  WhatsApp booking available 24/7
                  <br />
                  <button
                    onClick={() => window.open("https://wa.me/918885553158", "_blank")}
                    className="mt-1 inline-flex items-center gap-2 bg-white text-[#8B0000] px-3 py-1 rounded-full font-bold shadow hover:bg-[#ffe6e6] transition-all"
                    aria-label="Chat with Vasu Car Travels Ongole on WhatsApp"
                  >
                    Chat on WhatsApp
                  </button>
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#ffe6e6]">
          <p>© {year} Vasu Car Travels Ongole. All rights reserved.</p>
          <p className="opacity-80 text-center md:text-right">
            Trusted black & red rides for local, airport, and outstation trips.
          </p>
        </div>

      </div>
    </footer>
  );
}
