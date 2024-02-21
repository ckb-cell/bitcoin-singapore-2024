import Image from 'next/image';
import Title from '../title';
import Link from 'next/link';
import partners from '../../partners.json';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';
import SectionBackground from '../section-background';

export default async function PartnersSection() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-20" id="partners">
      <div className="relative flex flex-col">
        <SectionBackground
          left="bg-[url(/partners-background-left.png)] h-[1056px]"
          right="bg-[url(/partners-background-right.png)] h-[1056px]"
        />
        <div className="max-w-[1240px] flex-1 flex flex-col mx-auto px-16 sm:px-36 xl:px-24">
          <Title>{dictionary.partners}</Title>
          <div className="flex-1 flex flex-col justify-between gap-y-12 mt-10">
            <div className="w-full flex flex-col xl:items-center gap-8 xl:gap-10">
              <h3 className="text-[36px]">{dictionary.host}</h3>
              <div className="flex gap-12 items-center">
                {partners.host.map((partner) => (
                  <Link key={partner.name} href={partner.link} target="_blank">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col xl:items-center gap-10">
              <h3 className="text-[20px]">{dictionary.strategicPartners}</h3>
              <div className="flex gap-y-12 gap-x-24 xl:gap-24 items-center">
                {partners.strategic.map((partner) => (
                  <Link key={partner.name} href={partner.link} target="_blank">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col xl:items-center gap-10">
              <h3 className="text-[20px]">{dictionary.partners}</h3>
              <div className="flex gap-12 xl:gap-24 flex-wrap lg:flex-nowrap items-center">
                {partners.partners.map((partner) => (
                  <Link key={partner.name} href={partner.link} target="_blank">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col xl:items-center gap-10">
              <h3 className="text-[20px]">{dictionary.mediaPartners}</h3>
              <div className="flex gap-12 xl:gap-24 flex-wrap lg:flex-nowrap items-center">
                {partners.media.map((partner) => (
                  <Link key={partner.name} href={partner.link} target="_blank">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
