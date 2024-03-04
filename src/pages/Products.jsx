import React from "react";
import Navbar from "../components/NavBar/Navbar";
import productItems from "../components/Product-Ads/DisplayProducts";
import "../styles/style.css";
import Footer from "../components/Footer/Footer";

function Products() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-extrabold text-center my-8">
        Available Products
      </h1>
      <div className="container flex w-[100%] gap-4 my-12 mx-12  flex-wrap items-center justify-between">
        {productItems.map((item) => {
          return (
            <>
              <div className="box w-[400px] h-[520px] overflow-hidden bg-hangingBanner rounded-xl">
                <div className="content flex flex-col justify-center items-center">
                  <div className="img-box w-[100%] flex justify-center">
                    <img
                      className="w-[100%] h-[350px]"
                      src={item.img}
                      alt="Product Image"
                      loading="lazy"
                    />
                  </div>
                  <div className="details text-center">
                    <div className="info">
                      <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                      <p className="text-lg font-semibold py-4">
                        ${item.price}
                      </p>
                    </div>
                    <button className="rounded-full text-white bg-red-500 px-4 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
