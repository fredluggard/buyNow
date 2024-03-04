import React from "react";
import { IoIosStar } from "react-icons/io";

function Hanging_Ad() {
  return (
    <div className="w-[100%] mt-36 bg-hangingBanner">
      <div className="container h-[300px] flex justify-center items-center">
        <div className="modern w-[300px]">
          <h1 className="text-2xl font-bold my-4">
            MODERN BRONZE HANGING LIGHT
          </h1>
          <div className="stars flex gap-1 mb-6">
            <IoIosStar className="text-xs" />
            <IoIosStar className="text-xs" />
            <IoIosStar className="text-xs" />
            <IoIosStar className="text-xs" />
            <IoIosStar className="text-xs" />
          </div>
          <p className="line-through opacity-50 my-0 font-semibold">$3252.41</p>
          <div className="newPrice">
            <h1 className="text-2xl font-bold mr-2 my-0 inline-block">
              $2352.41
            </h1>
            <p className="text-[10px] text-white relative -top-1 bg-red-600 inline-block px-2 py-1 rounded-md">
              -30%
            </p>
          </div>
        </div>

        <img
          className="relative top-[70px]"
          src="images/login-img.png"
          alt="hanging light"
        />

        <div className="stunning w-[350px]">
          <p className="text-right">
            Stunning lighting fixture that combines contemporary style with
            timeless elegance.
          </p>
          <p className="text-right">
            Featuring a sleek and minimalist design, this hanging light is
            crafted from high-quality bronze and finished with a smooth and
            lustrous surface.
          </p>

          <p className="mt-[70px] ml-[150px] py-3 px-8 bg-black text-white text-center">
            <a href="/">BUY NOW</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hanging_Ad;
