import Image from 'next/image';
import Title from '../title';

export default function PartnersSection() {
  return (
    <div className="w-full py-20">
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
              <Image src="/nervos.svg" alt="Nervos Network" width={155} height={100} />
              <Image src="/abcde.svg" alt="ABCDE" width={135} height={100} />
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-20">
            <h3 className="text-[20px]">Strategic Partners</h3>
            <div className="flex gap-12 mt-10">
              <Image src="/lnp.svg" alt="LNP/BP Association" width={86} height={86} />
              <Image src="/bitlight-labs.svg" alt="Bitlight Labs" width={227} height={66} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
