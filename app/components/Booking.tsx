"use client";
import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Enquiry sent! We will contact you soon.");
        setFormData({ name: "", phone: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section className="bg-[#8B0000] py-10 text-white text-center">
      <h2 className="text-2xl font-semibold">Book Your Cab</h2>
      <p className="mt-2 text-sm text-red-200">
        Just share your name and mobile number — We will contact you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-sm mx-auto grid gap-4 px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-red-800 border border-red-500 outline-none text-white placeholder-gray-300"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}  
          className="w-full p-2 rounded-lg bg-red-800 border border-red-500 outline-none text-white placeholder-gray-300"
          required
        />

        <button
          type="submit"
          className="w-full py-2.5 rounded-full bg-white text-[#8B0000] font-bold hover:brightness-110 transition"
        >
          Submit Enquiry
        </button>

        {status && <p className="text-xs mt-2">{status}</p>}
      </form>

      <p className="mt-4 text-[11px] text-red-100">
        After receiving your enquiry, we’ll contact you through call or WhatsApp.
      </p>
    </section>
  );
}
