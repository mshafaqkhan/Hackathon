import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Promotion />
      <Products />
    </div>
  )
}
