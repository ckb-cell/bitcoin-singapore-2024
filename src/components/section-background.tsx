import { cn } from '@/lib/utils';

export type SectionBackgroundProps = {
  left: string;
  right: string;
};

export default function SectionBackground({ left, right }: SectionBackgroundProps) {
  return (
    <>
      <div
        className={cn(
          left,
          'absolute top-0 left-0 h-full',
          'bg-cover bg-top bg-no-repeat',
          'w-[48px] sm:w-[96px] h-full',
        )}
      />
      <div
        className={cn(
          right,
          'absolute top-0 right-0 h-full',
          'bg-cover bg-top bg-no-repeat',
          'w-[48px] sm:w-[96px] h-full',
        )}
      />
    </>
  );
}
