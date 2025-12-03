// app/layout.tsx
import "./globals.css";
import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cartravelsongole.in"),

  title: {
    // ⭐ Your preferred line + extra good search words
    default:
      "Ongole Car Rental | Car Rental with Driver Ongole | Ongole Cabs & Airport Taxi | Vasu Car Travels 24/7",
    template:
      "%s | Ongole Car Rental & Ongole Cabs | Vasu Car Travels",
  },

  description:
    "Ongole car rental and car rental with driver in Ongole by Vasu Car Travels. We provide Ongole cabs, car travels, airport taxi, railway station pickup and outstation cab service. Book 24/7 AC cars with experienced drivers for local town rides, village trips and long distance travel from Ongole to Hyderabad, Tirupati, Vijayawada, Chennai, Bangalore and more. Easy booking via call or WhatsApp.",

  keywords: [
    // Main search patterns
    "Ongole car rental",
    "Car rental with driver Ongole",
    "Ongole cabs",
    "Car travels Ongole",
    "Taxi service in Ongole",
    "Airport taxi Ongole",
    "Airport drop car Ongole",
    "Ongole to Hyderabad airport cab",
    "Ongole to Hyderabad taxi",
    "Ongole to Tirupati cab",
    "Ongole to Vijayawada cab",
    "Outstation taxi Ongole",
    "Outstation car rental Ongole",
    "Ongole cab booking",
    "Cabs available in Ongole",
    "Nearest cab Ongole",
    "24/7 cab service Ongole",
    "Railway station taxi Ongole",
    "Temple trip car Ongole",
    "Village taxi booking Ongole",

    // Brand + extra local
    "Vasu Car Travels Ongole",
    "Vasu cabs Ongole",
    "Vasu taxi Ongole",
    "AC cab service Ongole",
    "Best cab service Ongole",
    "Family car travels Ongole",
    "Wedding car rentals Ongole",
    "Function car bookings Ongole",
    "Car travels in Prakasam district",
    "Taxi service Prakasam district",
    "Cab booking near me Ongole",
    "Cab service near Chirala",
  ],

  authors: [{ name: "Vasu Car Travels Ongole" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Ongole Car Rental & Ongole Cabs | Vasu Car Travels 24/7 Taxi, Airport Drop & Outstation Service",
    description:
      "Vasu Car Travels offers Ongole car rental with driver, Ongole cabs and car travels for airport taxi, railway pickup, local rides and outstation trips. 24/7 AC cabs with trusted drivers from Ongole to Hyderabad, Tirupati, Vijayawada, Chennai, Bangalore and nearby towns and villages.",
    url: "https://cartravelsongole.in/",
    siteName: "Vasu Car Travels Ongole",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "Vasu Car Travels AC Cabs Ongole",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ongole Car Rental with Driver & Ongole Cabs | Vasu Car Travels 24/7",
    description:
      "Book Ongole car rental with driver and Ongole cabs with Vasu Car Travels. 24/7 taxi, airport drop, railway pickup and outstation car travels from Ongole with clean AC cars and experienced drivers.",
    images: ["/icon.png"],
  },

  // Favicon / logo
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
        {/* Local business schema to help Google understand you as a cab/car rental in Ongole */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Vasu Car Travels Ongole",
              url: "https://cartravelsongole.in/",
              telephone: "+91 8885553158", // replace with your real number
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ongole",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              areaServed: [
                "Ongole",
                "Prakasam District",
                "Chirala",
                "Andhra Pradesh",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
