export default function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <h2 className="inline -mt-5 text-[96px] leading-[96px] font-bold bg-gradient-to-r from-[#FF9900] to-white bg-clip-text text-transparent">
      {children}
    </h2>
  );
}
