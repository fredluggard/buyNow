import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Navbar from "../components/NavBar/Navbar";
import productItems from "../components/Product-Ads/DisplayProducts";
import "../styles/style.css";
import Footer from "../components/Footer/Footer";
import NumberOfProducts from "../components/NumberOfProducts";

function Products() {
  const [detail, setDetail] = useState([]);
  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setStyle("block");
  };
  const [style, setStyle] = useState("hidden");
  const dynamicStyle = `detail_container fixed top-[50%] left-[50%] translate-x-[-70%] -translate-y-[50%] border-gray-100 z-10 items-center w-[900px] h-[400px] bg-[#e8e8e8] mx-[15%] py-[20px] px-[30px] rounded-[10px] ${style}`;
  const reset = () => {
    setDetail([]);
    setStyle("hidden");
  };
  const handleClick = (items) => {};
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-extrabold text-center my-8">
        Available Products
      </h1>
      <div className="container flex w-[100%] gap-4 my-12 mx-12  flex-wrap items-center justify-between">
        <div className={dynamicStyle}>
          <div className="detail_item">
            {detail.map((x) => {
              return (
                <>
                  <button
                    onClick={() => {
                      reset();
                    }}
                  >
                    <MdClose className="text-2xl hover:bg-black hover:text-white hover:rounded" />
                  </button>
                  <div className="detail_info flex gap-4 justify-between mt-[5px] text-center">
                    <div className="image_box">
                      <img
                        className="h-[300px] w-[500px]"
                        src={x.img}
                        alt={x.title}
                      />
                    </div>
                    <div className="product_details">
                      <h2 className="font-bold my-4 text-xl">{x.title}</h2>
                      <p className="font-bold my-4 text-lg">${x.price}</p>
                      <p>{x.des}</p>
                      <NumberOfProducts />
                      <button
                        className="rounded text-white bg-red-500 my-4 px-4 py-2"
                        onClick={() => {
                          reset();
                          handleClick(x);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
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
                    <button
                      onClick={() => detailPage(item)}
                      className="rounded-full text-white bg-red-500 px-4 py-2"
                    >
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
