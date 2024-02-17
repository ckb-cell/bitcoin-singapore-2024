import Image from 'next/image';
import TimeLocation from '../time-location';
import Title from '../title';

export default function VenueSection() {
  return (
    <div className="w-full py-52">
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
                <Image src="/venue-map.png" alt="Google Map" width={384} height={288} />
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
