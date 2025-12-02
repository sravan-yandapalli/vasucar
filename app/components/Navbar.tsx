"use client";

import React, { useState, JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-black">
      {/* TOP BAR */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">

        {/* LEFT: LOGO + NAME */}
        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/LOGO.png"
            alt="Vasu Car Travels logo"
            width={64}
            height={64}
            className="h-9 w-9 md:h-16 md:w-16 object-contain"
            priority
          />
          <div className="h-5 md:h-10 flex items-center">
            <img
              src="/Name.svg"
              alt="Vasu Car Travels Ongole"
              className="h-full w-auto"
            />
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="flex flex-1 justify-center">
          {/* CALL NOW BUTTON (MOBILE ONLY, small - same as your original) */}
          <a
            href="tel:+917075367929"
            className="md:hidden flex items-center justify-center gap-1 rounded-full bg-[#f80000] px-3 py-2.5 text-white font-bold text-[8.5px] shadow-md hover:bg-red-700 transition"
          >
            <img src="/call.svg" alt="Call icon" className="h-2.5 w-2.5" />
            <span>CALL NOW</span>
          </a>

          {/* NAV LINKS (DESKTOP ONLY) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              Services
            </Link>
            <Link
              href="/fleet"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              Fleet
            </Link>
            <Link
              href="/routes"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              Routes
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="font-bold text-white text-[18px] hover:text-red-500 transition"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-end gap-3 shrink-0">
          {/* CALL NOW (DESKTOP ONLY) */}
          <a
            href="tel:+917075367929"
            className="hidden md:flex items-center gap-3 rounded-2xl bg-[#f80000] px-5 py-3 text-white font-bold text-[18px] shadow-md hover:bg-red-700 transition"
          >
            <img src="/call.svg" alt="Call icon" className="h-6 w-6" />
            <span>CALL NOW</span>
          </a>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="md:hidden flex flex-col gap-1.5 items-center justify-center w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[3px] w-7 bg-white rounded-full transition-transform ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[3px] w-7 bg-white rounded-full transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[3px] w-7 bg-white rounded-full transition-transform ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden w-full bg-black border-t border-zinc-800">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              Services
            </Link>
            <Link
              href="/fleet"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              Fleet
            </Link>
            <Link
              href="/routes"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              Routes
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-white text-[16px] font-semibold text-left py-1 hover:text-red-500 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
