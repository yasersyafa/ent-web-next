import BouncingSquares from "@/components/animations/bouncing-square";
import Navbar from "@/components/partials/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/pattern.svg')] bg-no-repeat object-cover relative">
      <Navbar />
      {/* decorative elements */}
      <BouncingSquares isMobile={false} size={'lg'} className="left-20 bottom-80" />
      <BouncingSquares isMobile={false} size={'lg'} className="right-20 top-32" />

      {/* mobile decorative elements */}
      <BouncingSquares isMobile size={'sm'} className="right-6 top-36" />
      <BouncingSquares isMobile size={'sm'} className="right-6 bottom-36" />

      
      {/* jumbotron */}
      <div className="flex md:items-center items-start max-sm:px-6 flex-col justify-evenly min-h-screen max-h- w-full select-none">
        <div className="font-medium text-5xl md:text-6xl lg:text-8xl max-w-4xl md:text-center max-sm:space-y-5">
          <div className="group flex max-sm:flex-col md:justify-center md:items-center gap-5">
            <h1>EEPIS</h1>
            <h1 className="group-hover:translate-x-10 transition-all ease-in-out">NEWS</h1>
          </div>
          <h1>AND</h1>
          <div className="group flex max-sm:flex-col md:justify-center md:items-center gap-5">
            <h1 className="group-hover:-translate-x-10 transition-all ease-in-out">NETWORK</h1>
            <h1>TEAM</h1>
          </div>
        </div>
        {/* cta button */}
        <Button size={'lg'} className="rounded-full text-xl relative inline-flex gap-5 justify-center items-center px-12 py-6 overflow-hidden bg-[#134679] group hover:bg-[#134179] hover:translate-y-1 transition-all ease-in-out" asChild>
          <Link href={'/auth'} className="md:mx-auto">
            Be Part of ENT
            <span className="absolute right-4 translate-x-[10px] opacity-0 font-bold group-hover:translate-x-0 group-hover:block group-hover:opacity-100 transition-all ease-in-out duration-500">
              <Image src={'/arrow-right.png'} alt="arrow" width={12} height={12} />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
