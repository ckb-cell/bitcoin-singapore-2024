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
        <div className="flex justify-between pt-8 pb-20">
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link className="text-xl" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
          </div>
          <div className="max-w-[860px]">
            <h1 className="text-7xl font-bold">
              <span className="text-[#FF9900]">Bitcoin</span> Singapore 2024
            </h1>
            <div className="mt-8">
              <TimeLocation />
            </div>
            <div className="mt-4">
              <Button>Register</Button>
            </div>
          </div>
          <div className="flex flex-col items-end gap-5">
            <span className="text-xl font-bold">Cooperation</span>
            <Link href="/" className="flex items-center">
              <span className="text-xl mr-2">Tetegram</span>
              <Image src="/open-link.svg" alt="Telegram" width={14} height={14} />
            </Link>
            <Link href="/" className="flex items-center">
              <span className="text-xl mr-2">Email</span>
              <Image src="/open-link.svg" alt="Email" width={14} height={14} />
            </Link>
          </div>
        </div>
      </div>
      <Image src="/key-vision-line-bottom.png" alt="Key Vision" width={1440} height={276} />
    </div>
  );
}
