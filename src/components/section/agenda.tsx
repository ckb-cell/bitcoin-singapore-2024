import Title from '../title';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { getLocale } from '@/lib/context';
import { getAgenda, getDictionary, getSpeakers } from '@/lib/dictionaries';
import SectionBackground from '../section-background';

export default async function AgendaSection() {
  const local = getLocale();
  const agenda = await getAgenda(local);
  const speakers = await getSpeakers(local);
  const dictionary = await getDictionary(local);

  return (
    <div className="w-full py-20" id="agenda">
      <div className="relative">
        <SectionBackground
          left="bg-[url(/agenda-background-left.tablet.png)] h-[3040px] lg:bg-[url(/agenda-background-left.png)]"
          right="bg-[url(/agenda-background-right.tablet.png)] h-[3040px] lg:bg-[url(/agenda-background-right.png)]"
        />
        <div className="lg:max-w-[1240px] flex flex-col h-full mx-auto px-16 sm:px-36 xl:px-24">
          <Title>{dictionary.agenda}</Title>
          <div
            className={cn(
              'relative flex flex-col w-full border-collapse mt-16',
              'after:absolute after:top-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75',
            )}
          >
            {agenda.map((item, index) => {
              return (
                <div
                  key={item.time}
                  className={cn(
                    'relative flex flex-col lg:flex-row text-[18px] sm:text-[22px] py-4 zh:py-[21px]',
                    {
                      'after:absolute after:bottom-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1 after:scale-y-75':
                        index !== agenda.length - 1,
                      'bg-[#FF9900]/45 rounded-[10px]': item.speaker.length === 0,
                    },
                  )}
                >
                  <span className="lg:flex-1 max-w-[300px] px-2 sm:px-4">{item.time}</span>
                  <span className="lg:flex-2 lg:w-[440px] px-2 sm:px-4">{item.title}</span>
                  <div className="lg:flex-1 min-h-[33px] lg:text-right text-[#FF9900] px-2 sm:px-4">
                    {item.speaker.map((name) => {
                      const twitter = speakers.find((speaker) =>
                        name.includes(speaker.name),
                      )?.twitter;
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
