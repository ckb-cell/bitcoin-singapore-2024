import AboutSection from '@/components/section/about';
import AgendaSection from '@/components/section/agenda';
import HeroSection from '@/components/section/hero';
import VenueSection from '@/components/section/venue';
import SpeakersSection from '@/components/section/speakers';
import PartnersSection from '@/components/section/partners';
import { setLocale } from '@/lib/context';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';

export default function Home({ searchParams }: Readonly<{ searchParams: { lang: string } }>) {
  console.log(searchParams);
  if (searchParams?.lang) {
    setLocale(searchParams.lang as 'en' | 'zh');
  }

  return (
    <div className={cn('max-w-[1440px] mx-auto sm:pt-6', `lang-${searchParams?.lang ?? 'en'}`)}>
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
