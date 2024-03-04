import Featured_Products from "./components/FeaturedProducts/Featured_Products";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroPage/Hero";
import Navbar from "./components/NavBar/Navbar";
import Hanging_Ad from "./components/Product-Ads/Hanging_Ad";
import Product_Ad from "./components/Product-Ads/Product_Ad";
import Reviews from "./components/Reviews/Reviews";
import Why_Us from "./components/Why-Us/Why_Us";
import Homepage from "./pages/Homepage";
import { StoreProvider } from "./store/StoreProvider";
import "./styles/App.scss";

function App() {
  return (
    <StoreProvider>
      <Navbar />
      <Hero />
      <Product_Ad />
      <Reviews />
      <Featured_Products />
      <Hanging_Ad />
      <Why_Us />
      <Footer />
    </StoreProvider>
  );
}

export default App;
