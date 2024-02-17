import Image from 'next/image';
import TimeLocation from '../time-location';
import Title from '../title';
import Link from 'next/link';

export default function VenueSection() {
  return (
    <div className="w-full py-52" id="venue">
      <div className="relative h-[480px]">
        <Image
          src="/venue-background-left.png"
          alt="venue"
          className="absolute top-0 left-0"
          width={96}
          height={480}
        />
        <Image
          src="/venue-background-right.png"
          alt="venue"
          className="absolute top-0 right-0"
          width={96}
          height={480}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <div className="flex">
            <div className="flex-1">
              <Title>Venue</Title>
              <div className="mt-4">
                <Link href="https://maps.app.goo.gl/aTuFYwLrg49qff5z9" target="_blank">
                  <Image src="/venue-map.png" alt="Google Map" width={384} height={288} />
                </Link>
              </div>
              <div className="mt-4">
                <TimeLocation />
              </div>
            </div>
            <div className="w-[576px] h-[480px]">
              <Image src="/venue-photo.png" alt="Venue" width={576} height={480} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
