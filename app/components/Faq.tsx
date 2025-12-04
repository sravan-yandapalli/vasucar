"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "How can I book a cab from Ongole?",
    answer: (
      <>
        You can book a cab in three simple ways:
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Fill the booking form on our website</li>
          <li>
            Call us anytime at{" "}
            <strong className="text-white">88855 53158</strong>
          </li>
          <li>
            Message us on{" "}
            <a
              href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20I%20want%20to%20book%20a%20cab%20from%20Ongole.%20Please%20share%20details."
              className="text-green-400 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            for instant confirmation
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Do you provide airport drops and pickups?",
    answer: (
      <>
        Yes, we provide reliable airport transfer services from Ongole to
        major airports like Vijayawada, Hyderabad (RGIA), Bengaluru and
        more. You can choose one-way or round trip packages.
      </>
    ),
  },
  {
    question: "Are your services safe for families and women travellers?",
    answer: (
      <>
        Absolutely. Safety is our priority:
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Experienced and verified drivers</li>
          <li>Clean, regularly serviced cars</li>
          <li>Transparent pricing without hidden charges</li>
          <li>Respectful and family-friendly service</li>
        </ul>
      </>
    ),
  },
  {
    question: "What type of cars do you provide?",
    answer: (
      <>
        We offer multiple options based on your group size and comfort:
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Sedans for 3–4 passengers</li>
          <li>SUVs and MUVs for bigger families</li>
          <li>Special vehicles for long outstation trips</li>
        </ul>
        Exact options depend on availability at the time of booking.
      </>
    ),
  },
  {
    question: "Are there any hidden or night charges?",
    answer: (
      <>
        No. All our packages are clearly explained before you confirm your
        ride. There are:
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>No hidden night charges</li>
          <li>No extra luggage charges</li>
          <li>No surprise fees at the end of the trip</li>
        </ul>
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-gradient-to-b from-black via-[#0b0b0b] to-black py-10 md:py-16"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-red-400">
            Questions & Answers
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-2xl mx-auto">
            Everything you need to know about booking cabs, safety, pricing and
            routes with Vasu Car Travels in and around Ongole.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:border-red-600 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-left text-sm md:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-xs transition-transform ${
                      isOpen ? "rotate-180 bg-red-600 border-red-600" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5 pt-0 text-sm md:text-base text-zinc-200 border-t border-zinc-800">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small CTA */}
        <div className="mt-10 text-center text-zinc-300 text-sm">
          Still have a question?{" "}
          <a
            href="tel:+918885553158"
            className="font-semibold text-red-400 hover:text-red-300 underline underline-offset-4"
          >
            Call 88855 53158
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/918885553158?text=Hi%20Vasu%20Car%20Travels%2C%20I%20have%20a%20question%20about%20your%20cab%20service%20from%20Ongole."
            className="font-semibold text-green-400 hover:text-green-300 underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>{" "}
          anytime.
        </div>
      </div>
    </section>
  );
}
