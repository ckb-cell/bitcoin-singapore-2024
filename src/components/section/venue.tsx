import Image from 'next/image';
import TimeLocation from '../time-location';
import Title from '../title';
import Link from 'next/link';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';
import SectionBackground from '../section-background';

export default async function VenueSection() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-48" id="venue">
      <div className="relative">
        <SectionBackground
          left="bg-[url(/venue-background-left.mobile.png)] sm:bg-[url(/venue-background-left.tablet.png)] lg:bg-[url(/venue-background-left.png)]"
          right="bg-[url(/venue-background-right.mobile.png)] lg:bg-[url(/venue-background-right.png)]"
        />
        <div className="max-w-[1240px] mx-auto px-16 sm:px-36 xl:px-24">
          <div className="flex flex-col sm:items-center lg:flex-row gap-4">
            <div className="flex-1">
              <Title>{dictionary.venue}</Title>
              <div className="mt-1 hidden lg:block">
                <Link href="https://maps.app.goo.gl/aTuFYwLrg49qff5z9" target="_blank">
                  <Image src="/venue-map.png" alt="Google Map" width={384} height={288} />
                </Link>
              </div>
              <div className="mt-4 hidden lg:block">
                <TimeLocation />
              </div>
            </div>
            <div className="hidden lg:block max-w-[576px] max-h-[480px]">
              <Image src="/venue-photo.png" alt="Venue" width={576} height={480} />
            </div>
            <div className="lg:hidden max-w-[576px] max-h-[480px]">
              <Image src="/venue-photo.mobile.png" alt="Venue" width={522} height={285} />
            </div>
            <div className="mt-4 lg:hidden">
              <TimeLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
