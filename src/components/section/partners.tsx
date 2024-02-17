import Image from 'next/image';
import Title from '../title';
import Link from 'next/link';

export default function PartnersSection() {
  return (
    <div className="w-full py-20" id="partners">
      <div className="relative h-[568px]">
        <Image
          src="/partners-background-left.png"
          alt="partners"
          className="absolute top-0 left-0"
          width={96}
          height={568}
        />
        <Image
          src="/partners-background-right.png"
          alt="partners"
          className="absolute top-0 right-0"
          width={96}
          height={568}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <Title>Partners</Title>
          <div className="w-full flex flex-col items-center mt-8">
            <h3 className="text-[32px]">Host</h3>
            <div className="flex gap-12 mt-10">
              <Link href="https://www.nervos.org" target="_blank">
                <Image src="/nervos.svg" alt="Nervos Network" width={155} height={100} />
              </Link>
              <Link href="https://www.abcde.com" target="_blank">
                <Image src="/abcde.svg" alt="ABCDE" width={135} height={100} />
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-20">
            <h3 className="text-[20px]">Strategic Partners</h3>
            <div className="flex gap-12 mt-10">
              <Link href="https://twitter.com/lnp_bp" target="_blank">
                <Image src="/lnp.svg" alt="LNP/BP Association" width={86} height={86} />
              </Link>
              <Link href="https://twitter.com/BitlightLabs" target="_blank">
                <Image src="/bitlight-labs.svg" alt="Bitlight Labs" width={227} height={66} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
