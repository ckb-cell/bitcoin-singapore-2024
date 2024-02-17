import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitch from './language-switch';
import { NAV_ITEMS } from '../constants';
import { Suspense } from 'react';

export default function Navbar() {
  return (
    <div className="container max-w-[1240px] mx-auto">
      <nav className="flex justify-between sticky top-[38px]">
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
          <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
          <Suspense>
            <LanguageSwitch />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}
