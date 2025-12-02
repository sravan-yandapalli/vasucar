import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <Faq />

      <Footer />
    </main>
  );
}
