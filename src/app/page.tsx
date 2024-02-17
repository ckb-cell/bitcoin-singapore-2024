import AboutSection from "@/components/section/about";
import AgendaSection from "@/components/section/agenda";
import HeroSection from "@/components/section/hero";
import VenueSection from "@/components/section/venue";
import SpeakersSection from "@/components/section/speakers";
import PartnersSection from "@/components/section/partners";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VenueSection />
      <AgendaSection />
      <SpeakersSection />
      <PartnersSection />
    </div>
  );
}
