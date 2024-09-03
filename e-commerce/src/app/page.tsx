import { AboutService, AddedProducts, Carousel, HighLight } from "@/components";

export default function Home() {
  return (
    <div>
      <Carousel />
      <HighLight />
      <AddedProducts />
      <AboutService />
    </div>
  );
}
