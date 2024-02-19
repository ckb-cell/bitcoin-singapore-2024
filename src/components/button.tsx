import { cn } from '@/lib/utils';

export default function Button({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={cn(
        'py-[10px] px-[24px] text-[28px] leading-none text-black font-semibold rounded-full flex items-center',
        'bg-gradient-to-r from-[#FF9900] to-white hover:bg-gradient-to-l',
        'transition-all duration-1000 ease-in-out',
        className,
      )}
    >
      {children}
    </button>
  );
}
