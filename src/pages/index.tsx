import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center 
      justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans`}
    >
      <Header/>
    </div>
  );
}
