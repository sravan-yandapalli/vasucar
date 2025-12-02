// app/layout.tsx
import "./globals.css";
import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cartravelsongole.in"),

  title: {
    default: "Vasu Car Travels Ongole | 24/7 AC Cab Service",
    template: "%s | Vasu Car Travels Ongole",
  },

  description:
    "Vasu Car Travels provides 24/7 AC cab booking and car rental services in Ongole, Andhra Pradesh, India. We offer local city taxi, airport transfers, railway station pickup, and outstation trips from Ongole to Tirupati, Hyderabad, Vijayawada, Chennai, Bangalore and more. Trusted drivers, clean AC sedans and SUVs, and fast booking via call or WhatsApp from Ongole.",

  keywords: [
    "Vasu Car Travels Ongole",
    "Vasu cabs Ongole",
    "Vasu taxi Ongole",
    "AC cab service Ongole",
    "24/7 taxi booking Ongole",
    "local taxi in Ongole",
    "local cab booking Ongole",
    "cab service in Ongole Andhra Pradesh",
    "best taxi service Ongole",
    "cheap and best taxi Ongole",
    "airport cab from Ongole to Hyderabad",
    "airport taxi Ongole",
    "airport pickup and drop Ongole",
    "railway station pickup taxi Ongole",
    "Ongole railway station cab",
    "outstation taxi from Ongole",
    "outstation cab Ongole to Tirupati",
    "outstation cab Ongole to Hyderabad",
    "outstation cab Ongole to Vijayawada",
    "one way cab service Ongole",
    "round trip cab service from Ongole",
    "car rental Ongole sedans and SUVs",
    "SUV car rental Ongole",
    "sedan car rental Ongole",
    "AC car rental service Ongole",
    "family trip cabs Ongole",
    "function car bookings Ongole",
    "wedding car rentals Ongole",
    "office pickup and drop cabs Ongole",
    "last minute cab booking Ongole",
    "24/7 emergency cab service Ongole",
    "car travels Prakasam district",
    "cab service Prakasam district",
    "taxi service Andhra Pradesh",
    "cab booking near me Ongole",
    "cab service near Chirala",
  ],

  authors: [{ name: "Vasu Car Travels Ongole" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Vasu Car Travels Ongole | 24/7 AC Cabs & Car Rental",
    description:
      "24/7 AC taxi and car rental service in Ongole for local rides, airport & railway transfers, and outstation travel from Ongole to major cities like Hyderabad, Tirupati, and Vijayawada. Book quickly via call or WhatsApp. Clean sedans & SUVs with trusted, professional drivers from Ongole.",
    url: "https://cartravelsongole.in/",
    siteName: "Vasu Car Travels Ongole",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/vasu-car-logo.png",
        width: 800,
        height: 800,
        alt: "Vasu Car Travels AC Cabs Ongole",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vasu Car Travels Ongole | 24/7 AC Taxi & Car Rental",
    description:
      "Book 24/7 AC cabs in Ongole for local, airport transfers and outstation trips. Reliable sedans & SUVs with trusted drivers. Fast booking via call or WhatsApp.",
    images: ["/vasu-car-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
