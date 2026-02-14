// app/layout.tsx
import "./globals.css";
import type { JSX, ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://cartravelsongole.in"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  title: {
    default:
      "Ongole Taxi Service & Car Rentals – Vasu Car Travels Ongole | Airport Cabs, Outstation Trips & Local Rides",
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
    "24/7 cab service Ongole",
    "Railway station taxi Ongole",
    "Temple trip car Ongole",
    "Village taxi booking Ongole",
    "Vasu Car Travels Ongole",
  ],

  authors: [{ name: "Vasu Car Travels Ongole" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Ongole Taxi Service & Car Rentals – Vasu Car Travels Ongole | Airport Cabs, Outstation Trips & Local Rides",
    description:
      "Vasu Car Travels Ongole provides Ongole taxi service, AC car rentals and airport cabs for local rides, village trips and outstation travel from Ongole.",
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
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17863109664"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17863109664');
          `}
        </Script>
      </head>

      <body className="bg-white text-neutral-900 antialiased">
        {/* Structured Data */}
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
              telephone: "+91 94903 69489",
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
              sameAs: ["https://wa.me/919490369489"],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
