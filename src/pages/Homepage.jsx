import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/HeroPage/Hero";
import Product_Ad from "../components/Product-Ads/Product_Ad";
import Reviews from "../components/Reviews/Reviews";
import Featured_Products from "../components/FeaturedProducts/Featured_Products";
import Hanging_Ad from "../components/Product-Ads/Hanging_Ad";
import Why_Us from "../components/Why-Us/Why_Us";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product_Ad />
      <Reviews />
      <Featured_Products />
      <Hanging_Ad />
      <Why_Us />
      <Footer />
    </div>
  );
}

export default Homepage;
