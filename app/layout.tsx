// app/layout.js
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cartravelsongole.in"),
  title: {
    default: "Vasu Car Travels Ongole | Car Travels in Ongole, Andhra Pradesh",
    template: "%s | Vasu Car Travels Ongole",
  },
  description:
    "Vasu Car Travels Ongole provides 24/7 reliable AC cab booking and car rental services in Ongole, Andhra Pradesh. We offer local city rides, airport and railway station transfers, and outstation round trips including Ongole to Tirupati, Hyderabad, and Vijayawada. Clean sedans, spacious SUVs, and professional drivers for family trips, functions, office travel, and last-minute bookings.",
  keywords: [
    "Vasu Car Travels Ongole",
    "car travels ongole",
    "cab service ongole",
    "taxi in ongole",
    "airport taxi ongole",
    "railway station taxi ongole",
    "car rental ongole",
    "car rental in ongole AP",
    "24/7 cab service ongole",
    "local taxi service ongole",
    "local cab in ongole",
    "outstation taxi from ongole",
    "outstation cabs ongole",
    "one way drops ongole",
    "family trip cabs ongole",
    "function cab service ongole",
    "marriage car bookings ongole",
    "office pickup drop ongole",
    "cab booking ongole online",
    "best car travels in ongole",
    "cheap and best taxi ongole",
    "safe taxi service ongole",
    "cabs prakasam district",
    "cab service prakasam district",
    "taxi service Andhra Pradesh",
    "taxi near me ongole",
    "cab service near chirala",
    "ongole to tirupati cab",
    "ongole to hyderabad taxi",
    "ongole to vijayawada cab",
    "ongole to railway station taxi",
    "ongole to airport cab",
    "airport cab from ongole",
    "railway station pickup ongole",
    "SUV rental ongole",
    "sedan rental ongole",
    "AC car rental ongole",
    "cab booking last minute ongole",
    "24/7 emergency cab service ongole",
  ],
  authors: [{ name: "Vasu Car Travels Ongole" }],
  alternates: {
    canonical: "https://cartravelsongole.in/",
  },
  openGraph: {
    title: "Vasu Car Travels Ongole | 24/7 AC Cabs & Car Rentals in Ongole",
    description:
      "Book 24/7 AC cabs and car rentals in Ongole for airport & railway transfers, office pickup-drop, family trips and outstation travel (Ongole → Tirupati, Hyderabad, Vijayawada). Choose from clean sedans and spacious SUVs with trusted professional drivers. Fast booking via call or WhatsApp.",
    url: "https://cartravelsongole.in/",
    siteName: "Vasu Car Travels Ongole",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://cartravelsongole.in/vasu-car-logo.png",
        width: 800,
        height: 800,
        alt: "Vasu Car Travels Ongole Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu Car Travels Ongole | Taxi & Car Rentals in Ongole",
    description:
      "24/7 AC sedans & SUVs for airport, railway, local & outstation trips from Ongole. Quick booking via call or WhatsApp.",
    images: ["https://cartravelsongole.in/vasu-car-logo.png"],
  },
};

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
