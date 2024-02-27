'use client';

import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { NAV_ITEMS } from '../constants';
import Link from 'next/link';
import Button from './button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export type MobileNavProps = {
  locale: 'en' | 'zh';
  dictionary: Record<string, string>;
};

export default function MobileNav({ dictionary, locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button>
          <Image src="/hamburger-open.svg" alt="Hamburger" width={25} height={16} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="fixed top-0 left-0 w-screen h-[400px] backdrop-blur-sm bg-black/75 z-50 pt-4 pb-10 px-10 rounded-b-lg text-white">
          <motion.div initial={{ y: '-100%' }} animate={{ y: 0, transition: { type: 'tween' } }}>
            <div className="pb-4 flex justify-between items-center">
              <Image
                src="/hamburger-close.svg"
                alt="Hamburger"
                width={25}
                height={16}
                onClick={() => setIsOpen(false)}
              />
              <div className="text-3xl font-bold flex items-start">
                <Image
                  className="block mr-2 h-[28px] w-[105px]"
                  src="/btc.svg"
                  alt="Bitcoin"
                  width={105}
                  height={28}
                />
                <span>Singapore</span>
              </div>
            </div>
            <div className="flex justify-between pt-6 border-t border-[#DDE3E3]">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label} className="py-1">
                    <div
                      className="text-xl"
                      onClick={() => {
                        router.replace(
                          locale !== 'en' ? `/?lang=${locale}${item.href}` : `/${item.href}`,
                        );
                        setIsOpen(false);
                      }}
                    >
                      {dictionary[item.label as keyof typeof dictionary]}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">{dictionary.cooperation}</span>
                <Link href="https://t.me/gracegui43" target="_blank" className="flex items-center">
                  <span className="text-xl mr-2">Telegram</span>
                  <Image src="/open-link.svg" alt="Telegram" width={14} height={14} />
                </Link>
                <Link href="mailto:grace@deltalabs.pro" className="flex items-center">
                  <span className="text-xl mr-2">Email</span>
                  <Image src="/open-link.svg" alt="Email" width={14} height={14} />
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <Link href="https://lu.ma/vobk70pd" target="_blank">
                <Button className="w-full justify-center">{dictionary.register}</Button>
              </Link>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
