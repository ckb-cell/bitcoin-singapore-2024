import Image from 'next/image';
import Button from '../button';
import TimeLocation from '../time-location';
import Link from 'next/link';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';

export default async function HeroSection() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full h-[460px] lg:h-[540px] bg-[url(/key-vision-top.svg)] bg-right-bottom bg-contain bg-no-repeat">
      <div className="container max-w-[1240px] mx-auto px-10 sm:px-12 lg:px-8 xl:px-0">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            <span className="text-[#FF9900]">Bitcoin</span> Singapore <br />
          </h1>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-2">2024</span>
        </div>
        <div className="mt-2 lg:mt-4">
          <TimeLocation />
        </div>
        <div className="mt-2 lg:mt-6">
          <Link href="https://lu.ma/vobk70pd" target="_blank">
            <Button>{dictionary.register}</Button>
          </Link>
        </div>
        <div className="mt-6">
          <span>{dictionary.host}</span>
          <div className="flex gap-12 mt-4">
            <Link href="https://www.nervos.org" target="_blank">
              <Image src="/nervos.svg" alt="Nervos Network" width={60} height={40} />
            </Link>
            <Link href="https://www.abcde.com" target="_blank">
              <Image src="/abcde.svg" alt="ABCDE" width={52} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
