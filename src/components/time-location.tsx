import Image from 'next/image';
import Link from 'next/link';

export default function TimeLocation() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6">
        <Image src="/time.svg" alt="Time" width={20} height={20} />
        <span className="text-[20px]">9 Mar, 12:00-20:00</span>
      </div>
      <div className="flex items-start gap-5">
        <Image src="/location.svg" alt="Location" width={25} height={20} />
        <Link
          href="https://maps.app.goo.gl/aTuFYwLrg49qff5z9"
          target="_blank"
          className="flex flex-col relative -top-2"
        >
          <span className="text-[20px]">Distrii Amphitheatre </span>
          <span className="font-light">
            (2F, 9 Raffles Place, Republic Plaza, Singapore 048619)
          </span>
        </Link>
      </div>
    </div>
  );
}
