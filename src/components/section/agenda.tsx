import Image from 'next/image';
import Title from '../title';
import agenda from '../../aganda.json';
import speakers from '../../speakers.json';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AgendaSection() {
  return (
    <div className="w-full py-20" id="agenda">
      <div className="relative h-[1536px]">
        <Image
          src="/agenda-background-left.png"
          alt="agenda"
          className="absolute top-0 left-0"
          width={96}
          height={1536}
        />
        <Image
          src="/agenda-background-right.png"
          alt="agenda"
          className="absolute top-0 right-0"
          width={96}
          height={1536}
        />
        <div className="max-w-[1240px] mx-auto px-24">
          <Title>Agenda</Title>
          <div
            className={cn(
              'relative table w-full border-collapse mt-16',
              'after:absolute after:top-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75',
            )}
          >
            {agenda.map((item, index) => {
              const twitter = speakers.find((speaker) => speaker.name === item.speaker)?.twitter;
              return (
                <div
                  key={item.time}
                  className={cn('relative table-row text-[22px]', {
                    'after:absolute after:bottom-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75':
                      index !== agenda.length - 1,
                  })}
                >
                  <span className="table-cell w-[300px] pt-4 pb-6">{item.time}</span>
                  <span className="table-cell w-[440px] pt-4 pb-6">{item.title}</span>
                  {twitter ? (
                    <span className="table-cell text-right text-[#FF9900] pt-4 pb-6">
                      <Link
                        href={`https://twitter.com/${twitter.replace('@', '')}`}
                        target="_blank"
                      >
                        {item.speaker}
                      </Link>
                    </span>
                  ) : (
                    <span className="table-cell text-right text-[#FF9900] pt-4 pb-7">
                      {item.speaker}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
