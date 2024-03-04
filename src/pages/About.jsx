import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="text-center my-[50px] mx-[50px] pb-[200px]">
        <h1 className="font-bold text-4xl my-12">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolore.
          Nesciunt quidem quasi velit! Veniam est aspernatur magni sequi dolorem
          dolore vel eveniet exercitationem error explicabo sit asperiores ad
          quidem sint, rem vitae quis temporibus nesciunt saepe in iste
          similique. Debitis quisquam quae amet molestias velit a exercitationem
          corporis vero.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
