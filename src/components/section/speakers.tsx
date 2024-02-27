import Image from 'next/image';
import Title from '../title';
import Link from 'next/link';
import { getDictionary, getSpeakers } from '@/lib/dictionaries';
import { getLocale } from '@/lib/context';
import SectionBackground from '../section-background';
import { cn } from '@/lib/utils';

export interface Speaker {
  name: string;
  avatar: string;
  twitter?: string;
  description: string[];
}

function Speaker({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex sm:w-[200px] sm:flex-col items-center gap-2 sm:gap-0">
      <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]">
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          width={150}
          height={150}
          className="rounded-[10px]"
        />
      </div>
      <div className="flex-1 flex flex-col items-start sm:items-center mt-1">
        <span className="-mt-3 sm:text-[20px]">{speaker.name}</span>
        {speaker.twitter && (
          <Link href={`https://twitter.com/${speaker.twitter.replace('@', '')}`} target="_blank">
            <div className="bg-gradient-to-r from-[#FF9900] to-white p-[1px] rounded-full mt-1">
              <div className="bg-black rounded-full px-[10px] md:py-[2px] flex items-center gap-[6px]">
                <Image src="/x.svg" alt="Twitter" width={12} height={12} />
                <span className="text-[12px]">{speaker.twitter}</span>
              </div>
            </div>
          </Link>
        )}
        <div className="sm:text-center text-[10px] sm:text-sm font-light mt-2 leading-tight whitespace-nowrap">
          {speaker.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function SpeakersSection() {
  const local = getLocale();
  const speakers = await getSpeakers(local);
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-52" id="speakers">
      <div className="relative min-h-[1500px]">
        <SectionBackground
          left="bg-[url(/speakers-background-left.tablet.png)] h-[2378px] lg:bg-[url(/speakers-background-left.png)] lg:h-[1500px]"
          right="bg-[url(/speakers-background-right.tablet.png)] h-[2378px] lg:bg-[url(/speakers-background-right.png)] lg:h-[1500px]"
        />
        <div className="max-w-[1240px] h-full flex flex-col mx-auto px-16 sm:px-36 xl:px-24">
          <Title>{dictionary.speakers}</Title>
          <div className="flex-1 flex flex-col justify-between mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6">
              {speakers.slice(0, Math.floor(speakers.length / 4) * 4).map((speaker) => (
                <div key={speaker.name} className="w-full flex sm:justify-center">
                  <Speaker speaker={speaker} />
                </div>
              ))}
            </div>
          </div>
          {speakers.length % 4 !== 0 && (
            <div
              className={cn('grid grid-cols-1 sm:grid-cols-2 gap-y-8 mt-8 sm:mt-0', {
                'lg:grid-cols-4': speakers.length % 2 === 0,
                'lg:grid-cols-3 sm:px-32': speakers.length % 2 !== 0,
              })}
            >
              {(speakers.length % 4 === 1 || speakers.length % 4 === 2) && (
                <div className="hidden lg:block w-[200px]" />
              )}
              {speakers.slice(Math.floor(speakers.length / 4) * 4).map((speaker) => (
                <div key={speaker.name} className="w-full flex sm:justify-center">
                  <Speaker speaker={speaker} />
                </div>
              ))}
              {(speakers.length % 4 === 1 || speakers.length % 4 === 2) && (
                <div className="hidden lg:block w-[200px]" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
