
import Banner from "@/components/homePage/Banner";
import PopulerProducts from "@/components/homePage/PopulerProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopulerProducts></PopulerProducts>
    </div>
  );
}
