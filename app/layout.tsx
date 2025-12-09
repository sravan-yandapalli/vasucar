// app/layout.tsx
import "./globals.css";
import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cartravelsongole.in"),

  title: {
    // Main SEO title (homepage)
    default:
      "Ongole Taxi Service & Car Rentals – Vasu Car Travels Ongole | Airport Cabs, Outstation Trips & Local Rides",
    // Used by other pages if they set their own title
    template:
      "%s | Ongole Taxi & Car Rentals – Vasu Car Travels Ongole",
  },

  description:
    "Ongole taxi and car rental service by Vasu Car Travels Ongole. Book AC cabs for airport drop, railway pickup, local city rides, village trips and outstation travel from Ongole.",

  keywords: [
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
    canonical: "/", // → https://cartravelsongole.in/
  },

  openGraph: {
    title:
      "Ongole Taxi Service & Car Rentals – Vasu Car Travels Ongole | Airport Cabs, Outstation Trips & Local Rides",
    description:
      "Vasu Car Travels Ongole provides Ongole taxi service, AC car rentals and airport cabs for local rides, village trips and outstation travel from Ongole to major cities.",
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
      "Ongole Taxi Service & Car Rentals – Vasu Car Travels Ongole | Airport Cabs & Outstation Trips",
    description:
      "Book Ongole taxi and AC car rentals with Vasu Car Travels Ongole for airport drop, railway pickup, local city rides and outstation cab service.",
    images: ["/icon.png"],
  },

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
        {/* TaxiService schema to help Google understand your business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Vasu Car Travels Ongole",
              url: "https://cartravelsongole.in/",
              logo: "https://cartravelsongole.in/icon.png",
              image: "https://cartravelsongole.in/icon.png",
              telephone: "+91 8885553158",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ongole",
                addressRegion: "Andhra Pradesh",
                postalCode: "523001",
                addressCountry: "IN",
              },
              areaServed: [
                "Ongole",
                "Prakasam District",
                "Chirala",
                "Andhra Pradesh",
              ],
              sameAs: ["https://wa.me/918885553158"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
