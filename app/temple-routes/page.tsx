"use client";
import { useState, useEffect, JSX } from "react";
import { Phone, MessageCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Tirupati",
    subtitle: "Ongole → Tirupati (~340 km | 7–8 hrs)",
    img: "/t.jpeg",
    temples: "Sri Venkateswara Swamy Temple, Tirumala",
  },
  {
    id: 2,
    title: "Tiruvannamalai",
    subtitle: "Ongole → Tiruvannamalai (~430 km | 9–10 hrs)",
    img: "/a.jpeg",
    temples: "Arunachaleswarar Temple, Tiruvannamalai",
  },
  {
    id: 3,
    title: "Vijayawada",
    subtitle: "Ongole → Vijayawada (~230 km | 4–5 hrs)",
    img: "/v.jpeg",
    temples: "Kanaka Durga Temple, Indrakeeladri",
  },
  {
    id: 4,
    title: "Srisailam",
    subtitle: "Ongole → Srisailam (~250 km | 5–6 hrs)",
    img: "/s.jpg",
    temples: "Mallikarjuna Jyotirlinga Temple, Srisailam",
  },
  {
    id: 5,
    title: "Airport Drop Service",
    subtitle: "Ongole → Hyderabad / Vijayawada / Chennai Airports",
    img: "/c.jpeg",
    temples: "Fast, Safe & Comfortable Airport Transfers",
  },
];

export default function TempleRoutesPage(): JSX.Element {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full h-screen overflow-hidden relative bg-black text-white">

      {/* Floating Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918885553158"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        <a
          href="tel:+918885553158"
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Call Vasu Car Travels Ongole"
        >
          <Phone size={28} />
        </a>
      </div>

      {/* Full Screen Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-screen transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-16 left-6 md:left-16 z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-red-600 drop-shadow-[0_0_20px_black]">
              {slide.title}
            </h1>

            <p className="text-sm md:text-lg uppercase tracking-wider mb-4 font-medium opacity-95 drop-shadow-md">
              {slide.subtitle}
            </p>

            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-4 border border-red-600/40 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
              <p className="text-red-500 font-semibold text-sm md:text-lg mb-1">
                Highlight
              </p>
              <p className="text-zinc-200 text-xs md:text-base">
                {slide.temples}
              </p>
            </div>

            {/* WhatsApp Booking Button */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/918885553158?text=" +
                    encodeURIComponent(`Hi, I want to book a cab for ${slide.title}`),
                  "_blank"
                )
              }
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-[0_0_25px_black] hover:scale-110 transition flex items-center gap-2"
            >
              <MessageCircle size={22} /> Book {slide.title}
            </button>
          </div>
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === current
                ? "bg-red-600 scale-125 shadow-[0_0_10px_red]"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
