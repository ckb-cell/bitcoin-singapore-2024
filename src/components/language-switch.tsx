'use client';
import { cn } from '@/lib/utils';
import * as Switch from '@radix-ui/react-switch';
import { useParams, useRouter } from 'next/navigation';

const LANGUAGES = {
  en: 'EN',
  zh: '中文',
};

export default function LanguageSwitch() {
  const params = useParams();
  const router = useRouter();
  const language = (params.lang ?? 'en') as keyof typeof LANGUAGES;

  const onChangeLanguage = () => {
    router.replace(language === 'en' ? '/zh' : '/');
  };

  return (
    <Switch.Root
      className="relative flex items-center bg-[#484D4E] w-[132px] h-[38px] rounded-full"
      onClick={onChangeLanguage}
    >
      <Switch.Thumb
        className={cn(
          'block bg-white text-black text-lg leading-8 w-[60px] h-[32px] rounded-full transition translate-x-[3px] z-10',
          {
            'transform translate-x-[69px]': language === 'zh',
          },
        )}
      >
        {LANGUAGES[language] ?? 'EN'}
      </Switch.Thumb>
      <div className="absolute top-0 left-0 flex items-center text-[#232323] text-lg">
        <span className="block leading-[38px] w-[63px] h-[38px]">EN</span>
        <span className="block leading-[38px] w-[63px] h-[38px]">中文</span>
      </div>
    </Switch.Root>
  );
}
