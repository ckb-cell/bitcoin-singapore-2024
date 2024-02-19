import AboutSection from '@/components/section/about';
import AgendaSection from '@/components/section/agenda';
import HeroSection from '@/components/section/hero';
import VenueSection from '@/components/section/venue';
import SpeakersSection from '@/components/section/speakers';
import PartnersSection from '@/components/section/partners';
import { setLocale } from '@/lib/context';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Home({ searchParams }: Readonly<{ searchParams: { lang: string } }>) {
  if (searchParams?.lang) {
    setLocale(searchParams.lang as 'en' | 'zh');
  }

  return (
    <div className="max-w-[1440px] mx-auto pt-4">
      <Navbar />
      <div>
        <HeroSection />
        <AboutSection />
        <VenueSection />
        <AgendaSection />
        <SpeakersSection />
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
}
