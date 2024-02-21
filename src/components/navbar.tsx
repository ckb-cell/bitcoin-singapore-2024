import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitch from './language-switch';
import { NAV_ITEMS } from '../constants';
import { Suspense } from 'react';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';
import MobileNav from './mobile-nav';

export default async function Navbar() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="sticky top-0 left-0 w-full bg-black z-40 py-4 px-12 lg:px-8 xl:px-0">
      <div className="container max-w-[1240px] mx-auto">
        <nav className="flex items-center justify-between">
          <ul className="hidden sm:flex gap-4 lg:gap-10 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link className="text-xl" href={item.href}>
                  {dictionary[item.label as keyof typeof dictionary]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <MobileNav dictionary={dictionary} />
          </div>
          <div className="flex items-center gap-9">
            <Link href="https://t.me/btcsingapore2024" target="_blank">
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Suspense fallback={<div className="h-[70px]" />}>
              <LanguageSwitch />
            </Suspense>
          </div>
        </nav>
      </div>
    </div>
  );
}
