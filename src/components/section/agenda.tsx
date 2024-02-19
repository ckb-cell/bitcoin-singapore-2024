import Image from 'next/image';
import Title from '../title';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { getLocale } from '@/lib/context';
import { getAgenda, getDictionary, getSpeakers } from '@/lib/dictionaries';

export default async function AgendaSection() {
  const local = getLocale();
  const agenda = await getAgenda(local);
  const speakers = await getSpeakers(local);
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-20" id="agenda">
      <div className="relative h-[1727px]">
        <Image
          src="/agenda-background-left.png"
          alt="agenda"
          className="hidden lg:block absolute top-0 left-0"
          width={96}
          height={1727}
        />
        <Image
          src="/agenda-background-right.png"
          alt="agenda"
          className="hidden lg:block absolute top-0 right-0"
          width={96}
          height={1727}
        />
        <div className="lg:max-w-[1240px] mx-auto px-32 xl:px-24">
          <Title>{dictionary.agenda}</Title>
          <div
            className={cn(
              'relative table w-full border-collapse mt-16',
              'after:absolute after:top-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75',
            )}
          >
            {agenda.map((item, index) => {
              return (
                <div
                  key={item.time}
                  className={cn('relative table-row text-[22px]', {
                    'after:absolute after:bottom-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75':
                      index !== agenda.length - 1,
                  })}
                >
                  <span className="table-cell w-[300px] pt-4 pb-7">{item.time}</span>
                  <span className="table-cell w-[440px] pt-4 pb-7">{item.title}</span>
                  <div className="table-cell text-right text-[#FF9900] pt-4 pb-7">
                    {item.speaker.map((name) => {
                      const twitter = speakers.find((speaker) => name.includes(speaker.name))?.twitter;
                      if (twitter) {
                        return (
                          <p key={name}>
                            <Link
                              href={`https://twitter.com/${twitter.replace('@', '')}`}
                              target="_blank"
                            >
                              {name}
                            </Link>
                          </p>
                        );
                      }
                      return <p key={name}>{name}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
