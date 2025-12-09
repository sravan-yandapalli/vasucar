// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Why from "./components/Why";
import Routes from "./components/Routes";
import Fleet from "./components/Fleet";
import CabPackagesOngolePage from "./components/rates";
import Faq from "./components/Faq";
import TempleRoutesPage from "./temple-routes/page";
import CarBuySellSupportPage from "./buy-sell/page";
import FloatingIcons from "./components/FloatingIcons";

// FAQ JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is your Ongole car rental and taxi service available any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Vasu Car Travels Ongole provides reliable taxi service and AC car rentals for local rides, airport drop, railway pickup and outstation travel.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide airport taxi and outstation cabs from Ongole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer airport taxi from Ongole to Hyderabad and outstation cabs to Tirupati, Vijayawada, Chennai, Bangalore and nearby villages.",
      },
    },
    {
      "@type": "Question",
      name: "Which cars are available for taxi service in Ongole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide clean AC sedans, hatchbacks and SUVs suitable for family trips, functions, office travel, temple visits and long-distance journeys.",
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
      {/* JSON-LD SEO: FAQ + Sitelinks */}
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

        {/* ⭐ Strong SEO H1 line for Google */}
        <h1 className="text-2xl font-semibold text-center mt-4">
          Reliable Ongole Taxi Service & Car Rentals – Vasu Car Travels
        </h1>

        <Hero />

        <TempleRoutesPage />
        <Why />
        <CabPackagesOngolePage />
        <Service />
        <Routes />
        <Fleet />
        <CarBuySellSupportPage />
        <Faq />
        <Footer />
        <FloatingIcons />
      </main>
    </>
  );
}
