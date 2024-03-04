import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Product_Ad() {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex my-32 mx-0 h-[584px] overflow-hidden w-[90%] gap-5 justify-center items-center">
        <div className="first-product bg-sideBanner relative h-[100%] w-[25%]">
          <img src="images/banner-1.png" alt="Product Image" />
          <div className="absolute top-[250px] right-0 m-6">
            <h2 className="font-bold text-lg my-4">HANGING LIGHT</h2>
            <p className="opacity-60">
              Upgrade your space with our modern hanging light, featuring sleek
              lines, energy-efficient LED lighting and adjustable height.
            </p>
            <Link
              to="/product/hangingLight"
              className="relative flex justify-center items-center top-7 opacity-60"
            >
              View more <IoIosArrowForward className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="second-product bg-mainBanner relative h-[100%] w-[40%]">
          <div className="absolute top-[20px] right-0 m-6">
            <h2 className="font-bold text-lg text-center my-4">
              DESIGNED SOFA
            </h2>
            <p className="text-center opacity-60">
              Introducing our newest sofa, the perfect combination of style and
              comfort, to elevate your living space and provide ultimate
              relaxation
            </p>
            <Link
              to="/product/designedSofa"
              className="relative flex justify-center items-center top-7 opacity-60"
            >
              View more <IoIosArrowForward className="ml-1" />
            </Link>
          </div>
          <img
            className="relative top-[280px]"
            src="images/banner-2.png"
            alt="Product Image"
          />
        </div>

        <div className="third-product bg-sideBanner relative h-[100%] w-[25%]">
          <img src="images/banner-3.png" alt="Product Image" />
          <div className="absolute top-[20px] right-0 m-6 ">
            <h2 className="font-bold text-lg my-4">NOVA CHAIR</h2>
            <p className="opacity-60">
              A stylish and comfortable addition to any room, with it's sleek
              design and plush cushions creating the ultimate seating
              experience.
            </p>
            <Link
              to="/product/novaChair"
              className="relative flex justify-center items-center top-7 opacity-60"
            >
              View more <IoIosArrowForward className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Ad;
