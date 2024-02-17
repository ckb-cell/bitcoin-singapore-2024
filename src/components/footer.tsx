import Image from 'next/image';
import TimeLocation from './time-location';
import Button from './button';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '../constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full pt-52">
      <div
        className={cn(
          'relative max-w-[1240px] mx-auto',
          'after:absolute after:top-0 after:left-0 after:border-b after:border-[#484D4E] after:w-full after:h-1',
        )}
      >
        <div className="flex justify-between pt-8">
          <div className="flex-1 flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link className="text-xl" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="https://t.me/btcsingapore2024" target="_blank">
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
          </div>
          <div className="relative max-w-[860px] pb-20 overflow-hidden">
            <div className="absolute right-0 bottom-0 w-[635px] h-[180px] bg-[url(/key-vision-bottom.svg)] bg-right-bottom bg-contain bg-no-repeat" />
            <h1 className="text-[78px] leading-none font-bold">
              <span className="text-[#FF9900]">Bitcoin</span> Singapore 2024
            </h1>
            <div className="mt-8">
              <TimeLocation />
            </div>
            <div className="mt-4">
              <Link href="https://lu.ma/vobk70pd" target="_blank">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end gap-5">
            <span className="text-xl font-bold">Cooperation</span>
            <Link href="https://t.me/gracegui43" target="_blank" className="flex items-center">
              <span className="text-xl mr-2">Tetegram</span>
              <Image src="/open-link.svg" alt="Telegram" width={14} height={14} />
            </Link>
            <Link href="mailto:grace@deltalabs.pro" className="flex items-center">
              <span className="text-xl mr-2">Email</span>
              <Image src="/open-link.svg" alt="Email" width={14} height={14} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-white">
        <Image className="-mt-[1px]" src="/key-vision-line-bottom.png" alt="Key Vision" width={1440} height={276} />
      </div>
    </div>
  );
}
