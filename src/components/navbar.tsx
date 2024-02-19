import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitch from './language-switch';
import { NAV_ITEMS } from '../constants';
import { Suspense } from 'react';
import { getLocale } from '@/lib/context';
import { getDictionary } from '@/lib/dictionaries';

export default async function Navbar() {
  const local = getLocale();
  const dictionary = await getDictionary(local);

  return (
    <div className="sticky top-0 left-0 w-full bg-black z-50 py-4">
      <div className="container max-w-[1240px] mx-auto">
        <nav className="flex justify-between">
          <ul className="flex gap-10 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link className="text-xl" href={item.href}>
                  {dictionary[item.label as keyof typeof dictionary]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-9">
            <Link href="https://t.me/btcsingapore2024" target="_blank">
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Suspense fallback={<div className="h-[70px]" />}>
              <div className="hidden lg:block">
                <LanguageSwitch />
              </div>
            </Suspense>
          </div>
        </nav>
      </div>
    </div>
  );
}
