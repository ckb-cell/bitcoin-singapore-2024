import Image from 'next/image';
import Title from '../title';
import speakers from '../../speakers.json';
import Link from 'next/link';

export default function SpeakersSection() {
  return (
    <div className="w-full py-52" id="speakers">
      <div className="relative h-[770px]">
        <Image
          src="/speakers-background-left.png"
          alt="speakers"
          className="absolute top-0 left-0"
          width={96}
          height={770}
        />
        <Image
          src="/speakers-background-right.png"
          alt="speakers"
          className="absolute top-0 right-0"
          width={96}
          height={770}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <Title>Speakers</Title>
          <div className="grid grid-cols-4 mt-10 gap-y-4">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="flex flex-col items-center">
                <Image
                  src={speaker.avatar}
                  alt={speaker.name}
                  width={200}
                  height={200}
                  className="rounded-[10px]"
                />
                <span className="-mt-3 text-[22px]">{speaker.name}</span>
                <Link href={`https://twitter.com/${speaker.twitter.replace('@', '')}`}>
                  <div className="bg-gradient-to-r from-[#FF9900] to-white p-[1px] rounded-full mt-1">
                    <div className="bg-black rounded-full px-[10px] py-[2px] flex items-center gap-[6px]">
                      <Image src="/x.svg" alt="Twitter" width={12} height={12} />
                      <span className="text-[12px]">{speaker.twitter}</span>
                    </div>
                  </div>
                </Link>
                <div className="text-center px-4 mt-2 leading-tight">
                  {speaker.description.map((desc, index) => (
                    <p key={desc}>
                      {desc}
                      {index !== speaker.description.length - 1 ? ';' : ''}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
