import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="w-full min-h-[1032px] bg-[url(/about-background.png)] bg-cover bg-center pt-[360px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12 mb-[80px]">
          <div className="flex-1">
            <p className="text-2xl">
              <span className="text-[#FF9900]">Bitcoin</span>
              {` Singapore is a one-day conference focused on the latest developments in the
            Bitcoin community and dispel the myths that Ethereum had imposed on us in the past. Join
            experts and enthusiasts as we explore Bitcoin's past, present, and future.`}
            </p>
          </div>
          <Image src="/key-vision.svg" alt="Key Vision" width={380} height={380} />
          <div className="flex-1">
            <p className="text-2xl">
              The topics of conversation centered on Bitcoin, covering technological progress, new
              product ideas, and different cultural characteristics. The format is mainly individual
              talks, supplemented by panel discussion at the end.
            </p>
          </div>
        </div>
        <p className="text-2xl">
          {`This gathering is perfect for Bitcoin enthusiasts seeking insights from industry veterans
          and peers. Connect with like-minded individuals, exchange knowledge, and pave the way for
          Bitcoin's future. Don't miss out on networking opportunities and engaging discussions.`}
        </p>
      </div>
    </div>
  );
}
