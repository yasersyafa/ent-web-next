import Navbar from "@/components/partials/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/pattern.svg')] bg-no-repeat object-cover relative">
      <Navbar />
      {/* decorative elements */}
      <div className="absolute left-20 bottom-80 hidden lg:block animate-bounce">
        <div className="relative">
          <div className="h-16 w-16 bg-[#134679]"></div>
          <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-teal-400"></div>
        </div>
      </div>

      <div className="absolute right-20 top-32 hidden lg:block animate-bounce">
        <div className="relative">
          <div className="h-12 w-12 bg-teal-400"></div>
          <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-[#134679]"></div>
        </div>
      </div>
      {/* jumbotron */}
      <div className="flex items-center flex-col justify-evenly min-h-screen w-full">
        <div className="font-medium text-8xl max-w-4xl text-center">
          <div className="group flex justify-center items-center gap-5">
            <h1>EEPIS</h1>
            <h1 className="group-hover:translate-x-10 transition-all ease-in-out">NEWS</h1>
          </div>
          <h1>AND</h1>
          <div className="group flex justify-center items-center gap-5">
            <h1 className="group-hover:-translate-x-10 transition-all ease-in-out">NETWORK</h1>
            <h1>TEAM</h1>
          </div>
        </div>
        {/* cta button */}
        <Button size={'lg'} className="rounded-full text-xl relative inline-flex gap-5 justify-center items-center px-12 py-6 overflow-hidden bg-[#134679] group hover:bg-[#134179] hover:translate-y-1 transition-all ease-in-out" asChild>
          <Link href={'/auth'} className="mx-auto">
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
