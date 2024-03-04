import React from "react";

function Hero() {
  return (
    <div className="w-[100%] relative">
      <img src="images/hero.png" alt="Hero image w-[100%]" />
      <div className="hero-text absolute top-20 right-64 w-96 text-black text-opacity-70">
        <h3 className="font-bold">WELCOME TO OUR</h3>
        <h1 className="font-bold text-6xl my-4">FURNITURE GALLERY</h1>
        <div className="line h-0.5 w-56 bg-black my-6"></div>
        <h3 className="font-bold">BROWSE OUR SELECTIONS</h3>
        <p>
          Featuring sleek designs and innovative materials that seamlessly blend
          form and function
        </p>
      </div>
    </div>
  );
}

export default Hero;
