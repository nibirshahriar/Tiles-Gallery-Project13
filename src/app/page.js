import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import TopTiles from "@/components/TopTiles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marquee />
      <TopTiles />
    </div>
  );
}
