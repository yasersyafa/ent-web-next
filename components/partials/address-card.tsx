import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AddressCard() {
  return (
    <Card className="w-full max-w-md mx-auto bg-white px-8 py-5 rounded-2xl z-30">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-blue-900">Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-blue-900 leading-relaxed">
          Gedung Pasca Sarjana Politeknik Elektronika Negeri Surabaya, Lt. 1, Ruangan PS1011, Jl. Raya ITS, Keputih,
          Kec. Sukolilo, Surabaya, Jawa Timur 60111.
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-green-50" asChild>
            <Link target="_blank" href={'https://www.whatsapp.com'}>
                <Image src={'/icons/whatsapp.svg'} alt="whatsapp.svg" width={24} height={24} />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-blue-50" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Image src={'/icons/linkedin.svg'} alt="linkedin.svg" width={24} height={24} />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-pink-50" asChild>
            <Link href="#" aria-label="Instagram">
              <Image src={'/icons/instagram.svg'} alt="instagram.svg" width={24} height={24} />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-red-50" asChild>
            <Link href="#" aria-label="YouTube">
              <Image src={'/icons/youtube.svg'} alt="youtube.svg" width={24} height={24} />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-gray-100" asChild>
            <Link href="#" aria-label="TikTok">
              <Image src={'/icons/tiktok.svg'} alt="tiktok.svg" width={24} height={24} />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
