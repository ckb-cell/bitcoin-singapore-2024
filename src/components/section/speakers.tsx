import Image from 'next/image';
import Title from '../title';
import speakers from '../../speakers.json';
import Link from 'next/link';

export interface Speaker {
  name: string;
  avatar: string;
  twitter: string;
  description: string[];
}

function Speaker({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex w-[200px] flex-col items-center">
      <Image
        src={speaker.avatar}
        alt={speaker.name}
        width={182}
        height={182}
        className="rounded-[10px]"
      />
      <span className="-mt-3 text-[22px]">{speaker.name}</span>
      <Link href={`https://twitter.com/${speaker.twitter.replace('@', '')}`} target="_blank">
        <div className="bg-gradient-to-r from-[#FF9900] to-white p-[1px] rounded-full mt-1">
          <div className="bg-black rounded-full px-[10px] py-[2px] flex items-center gap-[6px]">
            <Image src="/x.svg" alt="Twitter" width={12} height={12} />
            <span className="text-[12px]">{speaker.twitter}</span>
          </div>
        </div>
      </Link>
      <div className="text-center font-light mt-2 leading-tight whitespace-nowrap">
        {speaker.description.map((desc, index) => (
          <p key={desc}>
            {desc}
            {index !== speaker.description.length - 1 ? ';' : ''}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  const rows = Math.floor(speakers.length / 4);

  return (
    <div className="w-full py-52" id="speakers">
      <div className="relative h-[1344px]">
        <Image
          src="/speakers-background-left.png"
          alt="speakers"
          className="absolute top-0 left-0"
          width={96}
          height={1344}
        />
        <Image
          src="/speakers-background-right.png"
          alt="speakers"
          className="absolute top-0 right-0"
          width={96}
          height={1344}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <Title>Speakers</Title>
          <div className="flex flex-col gap-10 mt-16">
            {Array.from({ length: rows }).map((_, index) => (
              <div key={`speakers_row_${index}`} className="flex w-full justify-center gap-y-10 gap-x-20">
                {speakers.slice(index * 4, (index + 1) * 4).map((speaker) => (
                  <Speaker key={speaker.name} speaker={speaker} />
                ))}
              </div>
            ))}
            {speakers.length % 4 !== 0 && (
              <div className="flex w-full justify-center gap-20">
                {(speakers.length % 4 === 1 || speakers.length % 4 === 2) && <div />}
                {speakers.slice(rows * 4).map((speaker) => (
                  <Speaker key={speaker.name} speaker={speaker} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
