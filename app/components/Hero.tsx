// app/components/Hero.tsx
import React, { JSX } from "react";

// defined once and reused
const features = [
  { img: "/fam.png", line1: "Family-Safe", line2: "Drivers" },
  { img: "/tax.png", line1: "24/7 Cab", line2: "Booking" },
  { img: "/ac.png", line1: "Clean AC", line2: "Cars" },
  { img: "/lug.png", line1: "Luggage", line2: "Assist." },
];

export default function Hero(): JSX.Element {
  return (
    <section className="bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] w-full">
        {/* ========== DESKTOP / LARGE SCREENS ========== */}
        <div className="relative hidden lg:block h-[720px] text-black">
          {/* RIGHT SIDE : red block + cars */}
          <div className="absolute top-0 right-0 w-[1024px] h-[676px]">
            <div className="absolute top-0 left-[422px] w-[450px] h-[676px] flex bg-[#f80000]" />

            <div className="absolute top-[120px] left-0 w-[1024px] h-[517px]">
              <img
                className="absolute top-[58px] left-[632px] w-[370px] h-[245px] aspect-[1.6] object-cover"
                alt="Premium hatchback cab in Ongole"
                src="/gray.png"
              />
              <img
                className="absolute top-[58px] left-0 w-[734px] h-[367px] aspect-[2] object-cover"
                alt="White Innova car for outstation trips from Ongole"
                src="/white.png"
              />
              <img
                className="absolute top-0 left-[418px] w-[517px] h-[517px] aspect-[1] object-cover"
                alt="Black SUV cab for family rides from Ongole"
                src="/black.png"
              />
            </div>
          </div>

          {/* LEFT SIDE : text + buttons + icons */}
          <div className="absolute top-[41px] left-[67px] w-[650px] h-[636px]">
            <p className="text-3xl font-semibold">
              Ongole’s Most Trusted 24/7 Cab Service
            </p>
            <div className="mt-3 ml-1 w-[168px] h-[5px] bg-[#f80000]" />

            <h1 className="mt-6 text-[42px] font-semibold leading-[63px]">
              Reliable Car Travels In <br />
              Ongole For Local, Airport <br />
              &amp; Outstation Trips
            </h1>

            <p className="mt-5 w-[453px] text-[15px] font-semibold leading-[22.5px]">
              Safe and comfortable taxi rides across Prakasam district. Book
              clean AC sedans &amp; SUVs for airports, railway stations,
              weddings and outstation trips to Tirupati, Hyderabad and
              Vijayawada — anytime, day or night.
            </p>

            <div className="mt-7 flex gap-4">
              <a
                href="tel:+917075367929"
                className="relative inline-flex items-center justify-center w-[221px] h-[54px] rounded-[10px] bg-[#f1bc00d6] text-sm text-center font-medium"
                aria-label="Call Vasu Car Travels Ongole for instant cab booking"
              >
                <img
                  className="mr-2 w-5 h-5 object-contain"
                  alt="Phone icon"
                  src="/call.svg"
                />
                Call for instant Booking
              </a>

            <a
              href="#book"
              className="inline-flex items-center justify-center w-[201px] h-[54px] rounded-[10px] bg-[#f80000] text-[20px] font-bold text-white text-center"
              aria-label="Book cab online with Vasu Car Travels Ongole"
            >
              Book Now
            </a>
          </div>

          {/* Desktop icons static */}
          <div className="absolute bottom-0 left-0 h-[121px] flex items-start min-w-[588px]">
            <div className="w-[588px] flex gap-[76px]">
              <div className="mt-1 w-[109px] h-[117px] flex flex-col gap-[9px] items-center text-center">
                <img
                  className="w-[60px] h-[60px] object-cover"
                  alt="Family-safe drivers in Ongole"
                  src="/fam.png"
                />
                <p className="w-[107px] h-12 text-[19px]">
                  Family-Safe <br /> Drivers
                </p>
              </div>

              <div className="w-[81px] h-28 flex flex-col gap-1 items-center text-center">
                <img
                  className="w-[60px] h-[60px] object-cover"
                  alt="24/7 cab booking"
                  src="/tax.png"
                />
                <p className="w-[79px] h-12 text-[19px]">
                  24/7 Cab <br /> Booking
                </p>
              </div>

              <div className="mt-1 w-20 h-[117px] flex flex-col gap-[9px] items-center text-center">
                <img
                  className="w-[60px] h-[60px] object-cover"
                  alt="Clean AC cars"
                  src="/ac.png"
                />
                <p className="w-[78px] h-12 text-[19px]">
                  Clean AC <br /> Cars
                </p>
              </div>

              <div className="w-[92px] h-[121px] flex flex-col gap-[13px] items-center text-center">
                <img
                  className="w-[60px] h-[60px] object-cover"
                  alt="Luggage assistance"
                  src="/lug.png"
                />
                <p className="w-[90px] h-12 text-[19px]">
                  Luggage <br /> Assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* ========== MOBILE + TABLET (below lg) ========== */}
        <div className="block lg:hidden relative px-4 pt-6 pb-8 text-black">
          {/* Background image */}
          <img
            src="/bg.jpg"
            alt="Background pattern for Vasu Car Travels Ongole"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content above image */}
          <div className="relative">
            {/* Top text */}
            <p className="text-base font-semibold leading-snug">
              Ongole’s Most Trusted 24/7 Cab Service
            </p>
            <div className="mt-1 w-16 h-[3px] bg-[#f80000]" />

            <h1 className="mt-3 text-2xl font-semibold leading-snug">
              Reliable Car Travels In Ongole For Local, Airport &amp; Outstation
              Trips
            </h1>

            <p className="mt-3 text-xs font-semibold leading-relaxed max-w-[480px] bg-white/90 p-3 rounded-xl shadow-sm">
              Safe and comfortable AC taxi rides across Prakasam district for
              airports, railway stations, weddings and outstation trips to
              Tirupati, Hyderabad, Vijayawada and more.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+917075367929"
                className="w-full sm:w-auto px-4 py-2.5 rounded-[10px] bg-[#f1bc00d6] flex items-center justify-center gap-2 text-xs font-medium shadow-md"
                aria-label="Call Vasu Car Travels Ongole for instant cab booking"
              >
                <img
                  src="/call.svg"
                  alt="Phone icon"
                  className="w-4 h-4 object-contain"
                />
                <span>Call for instant Booking</span>
              </a>

              <a
                href="#book"
                className="w-full sm:w-auto px-5 py-2.5 rounded-[10px] bg-[#f80000] text-white text-sm font-semibold shadow-md text-center"
                aria-label="Book cab online with Vasu Car Travels Ongole"
              >
                Book Now
              </a>
            </div>

            {/* Cars block */}
            <div className="mt-6">
              <div className="relative max-w-sm mx-auto">
                {/* red gradient base (placeholder div for spacing) */}
                <div className="w-full h-50" />
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <div className="relative w-[95%] h-full">
                    <img
                      src="/white.png"
                      alt="White Innova cab for Ongole outstation trips"
                      className="absolute bottom-9 left-0 w-[52%] object-contain"
                    />
                    <img
                      src="/gray.png"
                      alt="Gray hatchback taxi in Ongole"
                      className="absolute bottom-6 right-0 w-[52%] object-contain"
                    />
                    <img
                      src="/black.png"
                      alt="Black SUV cab for family rides from Ongole"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[68%] object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TREADMILL ICONS SECTION */}
            <div className="mt-6 w-full overflow-hidden">
              <div className="flex gap-4 animate-treadmill">
                {/* First set */}
                {features.map((f, i) => (
                  <FeatureIcon
                    key={`set1-${i}`}
                    img={f.img}
                    line1={f.line1}
                    line2={f.line2}
                  />
                ))}
                {/* Second set (duplicate so loop looks continuous) */}
                {features.map((f, i) => (
                  <FeatureIcon
                    key={`set2-${i}`}
                    img={f.img}
                    line1={f.line1}
                    line2={f.line2}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reusable feature icon used on mobile layout */
function FeatureIcon({
  img,
  line1,
  line2,
}: {
  img: string;
  line1: string;
  line2: string;
}) {
  return (
    <div className="min-w-[130px] max-w-[130px] flex flex-col items-center text-center gap-2 bg:white/90 bg-white/90 backdrop-blur-[2px] p-3 rounded-2xl shadow-md">
      <img src={img} alt={line1} className="w-[44px] h-[44px] object-cover" />
      <p className="text-xs font-semibold leading-snug">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}
