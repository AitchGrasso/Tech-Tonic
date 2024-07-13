import Image from "next/image";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Trending from "./components/Trending";
import Category from "./components/Category"
import Newsletter from "./components/Newsletter";
import Promo from "./components/Promo";

export default function Home() {
  return (
    
    <main className="">
    < Navigation />
    < Hero />
    < Trending/>
    <Promo />
    <Category/>
    <Newsletter/>
    </main>

  );
}
