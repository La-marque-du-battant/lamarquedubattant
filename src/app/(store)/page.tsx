import About from "@/components/store/pages/About";
import Banner from "@/components/store/pages/Banner";
import Collections from "@/components/store/pages/Collections";
import Events from "@/components/store/pages/Events";
import Products from "@/components/store/pages/Product";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <About />
      <Collections />
      <Events />
    </div>
  );
}
