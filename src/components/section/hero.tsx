import Image from "next/image";
import Button from "../button";
import TimeLocation from "../time-location";

export default function HeroSection() {
  return (
    <div className="w-full h-[540px] bg-[url(/key-vision-top.svg)] bg-right-bottom bg-contain bg-no-repeat">
      <div className="container max-w-[1240px] mx-auto pt-2">
        <div>
          <h1 className="text-8xl font-bold">
            <span className="text-[#FF9900]">Bitcoin</span> Singapore <br />
          </h1>
          <span className="block text-8xl font-bold mt-2">2024</span>
        </div>
        <div className="mt-4">
          <TimeLocation />
        </div>
        <div className="mt-6">
          <Button>Register</Button>
        </div>
        <div className="mt-6">
          <span>Host</span>
          <div className="flex gap-12 mt-4">
            <Image src="/nervos.svg" alt="Nervos Network" width={60} height={40} />
            <Image src="/abcde.svg" alt="ABCDE" width={52} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
