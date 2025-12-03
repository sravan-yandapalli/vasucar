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
  logo: "https://cartravelsongole.in/icon.png",
  image: "https://cartravelsongole.in/icon.png",
  description:
    "Vasu Car Travels Ongole provides Ongole car rental, car rental with driver in Ongole and Ongole cabs & airport taxi service. We offer 24/7 AC cab booking and car travels in Ongole for local taxi rides, airport drop taxi from Ongole to Hyderabad Airport, railway station pickup and outstation cab service to Tirupati, Vijayawada, Chennai, Bangalore and nearby towns and villages.",
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
      name: "Is your Ongole car rental and taxi service available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Vasu Car Travels Ongole offers 24/7 Ongole car rental with driver and taxi service in Ongole. You can book Ongole cabs for local travel, airport taxi, railway station pickup and outstation trips at any time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide airport taxi and outstation cabs from Ongole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide airport taxi from Ongole to Hyderabad Airport and outstation cabs from Ongole to Tirupati, Vijayawada, Chennai, Bangalore and many other cities and towns.",
      },
    },
    {
      "@type": "Question",
      name: "Which cars are available for car rental with driver in Ongole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Ongole car rental with driver we offer clean AC sedans, hatchbacks and spacious SUVs that are ideal for family trips, functions, office travel, temple visits and long-distance journeys from Ongole to villages and cities.",
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
        {/* Single hero only */}
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
