import Image from 'next/image';
import Title from '../title';
import Link from 'next/link';
import partners from '../../partners.json';

export default function PartnersSection() {
  return (
    <div className="w-full py-20" id="partners">
      <div className="relative h-[1056px]">
        <Image
          src="/partners-background-left.png"
          alt="partners"
          className="absolute top-0 left-0"
          width={96}
          height={1056}
        />
        <Image
          src="/partners-background-right.png"
          alt="partners"
          className="absolute top-0 right-0"
          width={96}
          height={1056}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <Title>Partners</Title>
          <div className="w-full flex flex-col items-center mt-8">
            <h3 className="text-[36px]">Host</h3>
            <div className="flex gap-12 items-center mt-10">
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
          <div className="w-full flex flex-col items-center mt-20">
            <h3 className="text-[20px]">Strategic Partners</h3>
            <div className="flex gap-24 items-center mt-10">
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
          <div className="w-full flex flex-col items-center mt-20">
            <h3 className="text-[20px]">Partners</h3>
            <div className="flex gap-24 items-center mt-10">
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
          <div className="w-full flex flex-col items-center mt-20">
            <h3 className="text-[20px]">Media Partners</h3>
            <div className="flex gap-24 items-center mt-10">
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
  );
}
