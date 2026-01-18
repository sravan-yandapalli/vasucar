"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/918885553158"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Phone Call */}
      <a
        href="tel:+919400380489"
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Call Vasu Car Travels Ongole"
      >
        <Phone size={28} />
      </a>

    </div>
  );
}
