import React, { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] w-full">
        {/* ========== DESKTOP / LARGE SCREENS ========== */}
        <div className="relative hidden lg:block h-[720px]">
          {/* RIGHT SIDE : red block + cars */}
          <div className="absolute top-0 right-0 w-[1024px] h-[676px]">
            <div className="absolute top-0 left-[422px] w-[450px] h-[676px] flex bg-[#f80000]">
              <div className="mt-[63px] w-[417px] h-[77px] ml-[19px] flex gap-[17px]" />
            </div>

            <div className="absolute top-[120px] left-0 w-[1024px] h-[517px]">
              <img
                className="absolute top-[58px] left-[632px] w-[370px] h-[245px] aspect-[1.6] object-cover"
                alt="Gray Car"
                src="/gray.png"
              />
              <img
                className="absolute top-[58px] left-0 w-[734px] h-[367px] aspect-[2] object-cover"
                alt="White Car"
                src="/white.png"
              />
              <img
                className="absolute top-0 left-[418px] w-[517px] h-[517px] aspect-[1] object-cover"
                alt="Black Car"
                src="/black.png"
              />
            </div>
          </div>

          {/* LEFT SIDE : text + buttons + icons */}
          <div className="absolute top-[41px] left-[67px] w-[650px] h-[636px] text-black">
            {/* Feature Icons */}
            <div className="absolute top-[515px] left-0 h-[121px] flex items-start min-w-[588px]">
              <div className="w-[588px] flex gap-[76px]">
                <div className="mt-1 w-[109px] h-[117px] flex flex-col gap-[9px]">
                  <img
                    className="ml-[23px] w-[60px] h-[60px] object-cover"
                    alt="Family-safe drivers"
                    src="/fam.png"
                  />
                  <div className="w-[107px] h-12 text-[19px] text-center">
                    Family-Safe <br /> Drivers
                  </div>
                </div>

                <div className="w-[81px] h-28 flex flex-col gap-1">
                  <img
                    className="ml-[9px] w-[60px] h-[60px] object-cover"
                    alt="24/7 booking"
                    src="/tax.png"
                  />
                  <div className="w-[79px] h-12 text-[19px] text-center">
                    24/7 Cab <br /> Booking
                  </div>
                </div>

                <div className="mt-1 w-20 h-[117px] flex flex-col gap-[9px]">
                  <img
                    className="ml-[9px] w-[60px] h-[60px] object-cover"
                    alt="AC cars"
                    src="/ac.png"
                  />
                  <div className="w-[78px] h-12 text-[19px] text-center">
                    Clean AC <br /> Cars
                  </div>
                </div>

                <div className="w-[92px] h-[121px] flex flex-col gap-[13px]">
                  <img
                    className="ml-[15px] w-[60px] h-[60px] object-cover"
                    alt="Luggage"
                    src="/lug.png"
                  />
                  <div className="w-[90px] h-12 text-[19px] text-center">
                    Luggage <br /> Assistance
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="absolute top-[416px] left-60 w-[203px] h-[54px]">
              <div className="absolute w-[201px] h-[54px] bg-[#f80000] rounded-[10px]" />
              <div className="absolute top-[11px] left-[42px] font-bold text-white text-[25px] text-center">
                Book Now
              </div>
            </div>

            {/* Call Button */}
            <div className="absolute top-[416px] left-0 w-[223px] h-[54px]">
              <div className="absolute w-[221px] h-[54px] bg-[#f1bc00d6] rounded-[10px]" />
              <div className="absolute top-[17px] left-10 text-base text-center">
                Call for instant Booking
              </div>
              <img
                className="absolute top-[17px] left-[15px] w-5 h-5 object-contain"
                alt="Call"
                src="/call.svg"
              />
            </div>

            {/* Description */}
            <p className="absolute top-[298px] left-0 w-[453px] text-[15px] font-semibold leading-[22.5px]">
              Safe and comfortable taxi rides across Prakasam district. Book clean
              AC sedans &amp; SUVs for airports, railway stations, weddings and
              outstation trips to Tirupati, Hyderabad and Vijayawada — anytime,
              day or night.
            </p>

            {/* Main Heading */}
            <p className="absolute top-[87px] left-0 text-[42px] font-semibold leading-[63px]">
              Reliable Car Travels In <br />
              Ongole For Local, Airport <br />
              &amp; Outstation Trips
            </p>

            <div className="absolute top-[60px] left-3 w-[168px] h-[5px] bg-[#f80000]" />

            {/* Eyebrow text */}
            <p className="absolute top-0 left-0 text-3xl font-semibold">
              Ongole’s Most Trusted 24/7 Cab Service
            </p>
          </div>
        </div>

        {/* ========== MOBILE + TABLET (below lg) ========== */}
        <div className="block lg:hidden relative px-4 pt-10 pb-12 text-black min-h-[520px]">
          {/* Background image */}
          <img
            src="/bg.jpg"   // make sure this matches real extension: .jpg / .jpeg / .png
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content above image */}
          <div className="relative">
            {/* Text block */}
            <p className="text-xl font-semibold leading-snug">
             Ongole’s Most Trusted 24/7 Cab Service
            </p>
            <div className="mt-2 w-20 h-[4px] bg-[#f80000]" />

            <h1 className="mt-4 text-3xl font-semibold leading-tight">
              Reliable Car Travels In Ongole For Local, Airport &amp; Outstation
              Trips
            </h1>

            <p className="mt-4 text-sm font-semibold leading-relaxed max-w-[480px] bg-white/80 p-3 rounded-xl shadow-sm">
              Safe and comfortable taxi rides across Prakasam district. Book clean
              AC sedans &amp; SUVs for airports, railway stations, weddings and
              outstation trips to Tirupati, Hyderabad and Vijayawada — anytime,
              day or night.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto px-4 py-3 rounded-[10px] bg-[#f1bc00d6] flex items-center justify-center gap-2 text-sm font-medium shadow-md">
                <img
                  src="/call.svg"
                  alt="Call"
                  className="w-5 h-5 object-contain"
                />
                <span>Call for instant Booking</span>
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-[10px] bg-[#f80000] text-white text-lg font-semibold shadow-md">
                Book Now
              </button>
            </div>

            {/* Cars area — gradient block + 3 cars */}
            <div className="mt-9">
              <div className="relative max-w-md mx-auto">
                <div className="w-full h-60 md:h-64 rounded-3xl bg-gradient-to-b from-[#f80000] to-[#ff4d4d]" />

                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <div className="relative w-[95%] h-full">
                    <img
                      src="/white.png"
                      alt="White car"
                      className="absolute bottom-11 left-0 w-[55%] object-contain"
                    />
                    <img
                      src="/gray.png"
                      alt="Gray car"
                      className="absolute bottom-7 right-0 w-[55%] object-contain"
                    />
                    <img
                      src="/black.png"
                      alt="Black car"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 max-w-md mx-auto">
              <FeatureIcon
                img="/fam.png"
                line1="Family-Safe"
                line2="Drivers"
              />
              <FeatureIcon
                img="/tax.png"
                line1="24/7 Cab"
                line2="Booking"
              />
              <FeatureIcon
                img="/ac.png"
                line1="Clean AC"
                line2="Cars"
              />
              <FeatureIcon
                img="/lug.png"
                line1="Luggage"
                line2="Assistance"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Cleaner icon component: no \n tricks */
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
    <div className="flex flex-col items-center text-center gap-2 bg-white/70 backdrop-blur-[2px] p-3 rounded-2xl shadow-md">
      <img src={img} alt={line1} className="w-[55px] h-[55px] object-cover" />
      <p className="text-base font-semibold">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}
