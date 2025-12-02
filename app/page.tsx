// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Why from "./components/Why";
import Routes from "./components/Routes";
import Fleet from "./components/Fleet";
import Booking from "./components/Booking";
import Faq from "./components/Faq";

// LocalBusiness JSON-LD
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasu Car Travels Ongole",
  url: "https://cartravelsongole.in/",
  logo: "https://cartravelsongole.in/vasu-car-logo.png",
  image: "https://cartravelsongole.in/vasu-car-logo.png",
  description:
    "Vasu Car Travels Ongole provides 24/7 reliable AC cab booking and car rental services in Ongole, Andhra Pradesh. Local taxi, airport transfers, railway station pickup and outstation cab service from Ongole to Tirupati, Hyderabad, Vijayawada and more.",
  telephone: "+91-8885553158",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ongole",
    addressRegion: "Andhra Pradesh",
    postalCode: "523001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.5057,
    longitude: 80.0499,
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: ["https://wa.me/918885553158"],
};

// FAQ JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Vasu Car Travels Ongole available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Vasu Car Travels Ongole offers 24/7 cab booking in Ongole for local, airport, railway station and outstation trips.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide outstation taxi from Ongole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide one-way and round-trip outstation cab services from Ongole to Tirupati, Hyderabad, Vijayawada and other cities.",
      },
    },
    {
      "@type": "Question",
      name: "Which cars are available for rental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer clean AC sedans, hatchbacks and spacious SUVs for family trips, functions, office travel and long-distance journeys from Ongole.",
      },
    },
  ],
};

// WebSite / sitelinks JSON-LD
const sitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vasu Car Travels Ongole",
  url: "https://cartravelsongole.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://cartravelsongole.in/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD SEO: Local Business, FAQ, Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sitelinksSchema),
        }}
      />

      <main>
        <Navbar />
        <Hero />
        <Why />
        <Booking />
        <Service />
        <Routes />
        <Fleet />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
