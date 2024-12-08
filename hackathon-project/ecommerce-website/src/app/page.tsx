import TopHeader from '@/Components/TopHeader'
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Editors from "@/Components/Editors";
import ProductCard from "@/Components/ProductCards";
import GreenDiv from "@/Components/Green-div";
import Whitediv from "@/Components/White-div";
import Footers from "@/Components/Footers";
export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Carousel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Footers/>
    </div>
  );
}
