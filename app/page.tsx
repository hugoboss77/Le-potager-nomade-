import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Zones from "@/components/Zones";
import MenuSection from "@/components/MenuSection";
import LoyaltySection from "@/components/LoyaltySection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConceptSection from "@/components/ConceptSection";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Zones />
      <MenuSection />
      <ConceptSection />
      <LoyaltySection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}