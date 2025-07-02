import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from 'next/font/google'

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: "ENT Crews",
  description: "EEPIS News and Network Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className}`}>
        {children}
      </body>
    </html>
  );
}
