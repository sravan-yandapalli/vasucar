import React, { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#8B0000] text-white">
      <div className="mx-auto max-w-[1440px] w-full px-4 py-10 lg:py-14">
        {/* TOP: 3 sections – vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* ========== LEFT: BRAND + SHORT TEXT ========== */}
          <div className="md:max-w-sm">
            <div className="flex items-center gap-3 shrink-0">
              <img
                src="/LOGO.png"
                alt="Vasu Car Travels logo"
                width={64}
                height={64}
                className="h-9 w-9 md:h-16 md:w-16 object-contain"
              />
              <div className="h-5 md:h-10 flex items-center">
                <img
                  src="/Name.svg"
                  alt="Vasu Car Travels Ongole"
                  className="h-full w-auto"
                />
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#ffe6e6]">
              We provide safe, comfortable and on-time cab services in Ongole
              and across Prakasam district. From airport drops to outstation
              trips, we make every ride smooth and hassle-free for families,
              office commuters and travellers.
            </p>
          </div>

          {/* ========== MIDDLE: QUICK LINKS ========== */}
          <div className="md:min-w-[180px]">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="h-[2px] w-12 bg-white mb-4" />

            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Popular Routes", href: "/routes" },
                { label: "Why Us", href: "/why-us" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact / Book Cab", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 group"
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-white transition-colors" />
                    <span className="group-hover:underline group-hover:underline-offset-4 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== RIGHT: CONTACT ========== */}
          <div className="md:max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="h-[2px] w-12 bg-white mb-4" />

            <ul className="space-y-4 text-sm">

              {/* Location icon white */}
              <li className="flex items-start gap-3">
                <span className="mt-[2px] text-lg text-white">📍</span>
                <span>Ongole, Andhra Pradesh, India</span>
              </li>

              {/* Highlighted phone number */}
              <li className="flex items-center gap-3">
                <span className="text-lg text-white">📞</span>
                <a
                  href="tel:7075367929"
                  className="inline-flex flex-col items-start bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 shadow-md hover:bg-white/20 transition-all"
                >
                  <span className="text-[9px] uppercase tracking-[0.16em] opacity-90 font-medium">
                    Call Now
                  </span>
                  {/* Number white */}
                  <span className="text-base font-bold text-white leading-tight">
                    70753 67929
                  </span>
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <span className="text-lg text-white">🟢</span>
                <span>
                  WhatsApp booking available 24/7 <br />
                  <a
                    href="https://wa.me/917075367929"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 bg-white text-[#8B0000] px-3 py-1 rounded-full font-bold shadow hover:bg-[#ffe6e6] transition-all"
                  >
                    Chat on WhatsApp
                  </a>
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#ffe6e6]">
          <p>© {new Date().getFullYear()} Vasu Car Travels Ongole. All rights reserved.</p>
          <p className="opacity-80 text-center md:text-right">
            Trusted black & red rides for local, airport and outstation trips.
          </p>
        </div>
      </div>
    </footer>
  );
}
