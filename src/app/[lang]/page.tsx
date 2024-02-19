import AboutSection from "@/components/section/about";
import AgendaSection from "@/components/section/agenda";
import HeroSection from "@/components/section/hero";
import VenueSection from "@/components/section/venue";
import SpeakersSection from "@/components/section/speakers";
import PartnersSection from "@/components/section/partners";
import { setLocale } from "@/lib/context";

export default function LangHome({ params }: Readonly<{ params: { lang: string } }>) {
  setLocale(params.lang as 'en' | 'zh');

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
