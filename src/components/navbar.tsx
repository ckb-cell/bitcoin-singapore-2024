import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitch from './language-switch';
import { NAV_ITEMS } from '../constants';
import { Suspense } from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full bg-black z-50 py-4">
      <div className="container max-w-[1240px] mx-auto">
        <nav className="flex justify-between">
          <ul className="flex gap-10 items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link className="text-xl" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-9">
            <Link href="https://t.me/btcsingapore2024" target="_blank">
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Suspense>
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
