import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';

export default async function AboutSection() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full min-h-[1040px] bg-[url(/about-background.mobile.png)] lg:bg-[url(/about-background.png)] bg-contain bg-top bg-no-repeat pt-[130px] lg:pt-[360px]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-8 xl:px-0">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12 mb-[80px]">
          <div className="flex-1">
            <p className="text-2xl">
              <span className="text-[#FF9900]">Bitcoin</span> Singapore {dictionary.p1}
            </p>
          </div>
          <Image src="/key-vision.svg" alt="Key Vision" width={380} height={380} />
          <div className="flex-1">
            <p className="text-2xl">{dictionary.p2}</p>
          </div>
        </div>
        <p className="text-2xl">{dictionary.p3}</p>
      </div>
    </div>
  );
}
