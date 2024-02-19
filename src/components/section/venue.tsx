import Image from 'next/image';
import TimeLocation from '../time-location';
import Title from '../title';
import Link from 'next/link';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';

export default async function VenueSection() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-48" id="venue">
      <div className="relative min-h-[480px]">
        <Image
          src="/venue-background-left.png"
          alt="venue"
          className="hidden lg:block absolute top-0 left-0"
          width={96}
          height={480}
        />
        <Image
          src="/venue-background-right.png"
          alt="venue"
          className="hidden lg:block absolute top-0 right-0"
          width={96}
          height={480}
        />
        <div className="max-w-[1240px] mx-auto px-32 xl:px-24">
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
            <div className="flex-1">
              <Title>{dictionary.venue}</Title>
              <div className="mt-1">
                <Link href="https://maps.app.goo.gl/aTuFYwLrg49qff5z9" target="_blank">
                  <Image src="/venue-map.png" alt="Google Map" width={384} height={288} />
                </Link>
              </div>
              <div className="mt-4">
                <TimeLocation />
              </div>
            </div>
            <div className="max-w-[576px] max-h-[480px]">
              <Image src="/venue-photo.png" alt="Venue" width={576} height={480} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
