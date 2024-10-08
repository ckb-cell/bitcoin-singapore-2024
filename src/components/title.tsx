export default function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <h2 className="inline-block -mt-2 text-[40px] sm:text-[96px] leading-tight font-bold bg-gradient-to-r from-[#FF9900] to-white bg-clip-text text-transparent">
      {children}
    </h2>
  );
}
