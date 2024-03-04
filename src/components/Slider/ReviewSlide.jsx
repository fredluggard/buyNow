import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";

function ReviewSlide() {
  var settings = {
    autoplay: true,
    autoplayDelay: 500,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="w-[100%] flex justify-center items-center">
        <div className="review-card1 mx-[25%] w-[50%] flex flex-col justify-center items-center">
          <div className="mainImage flex flex-col gap-2 justify-center items-center">
            <div className="image flex justify-center items-center w-[60px] h-[60px] p-1 border-2 border-gray-400 rounded-full">
              <img src="images/user-1.png" alt="User-1" />
            </div>
            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>
          </div>

          <div className="write-up my-10">
            <p className="text-center font-bold text-sm">
              The sofa is not only incredibly stylish, but also very comfortable
              to lounge on. The clean lines and minimalist designs makes it a
              perfect fit for my modern living room, and the neutral color
              scheme allows me to easily incorporate other accent pieces. The
              sofa is also very sturdy and well-constructed, so I know it will
              last me for years to come.{" "}
            </p>
            <p className="opacity-60 my-5 text-center text-sm">
              - Larry Johnson -
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="review-card2 mx-[25%] w-[50%] flex flex-col justify-center items-center">
          <div className="mainImage flex flex-col gap-2 justify-center items-center">
            <div className="image flex justify-center items-center w-[60px] h-[60px] p-1 border-2 border-gray-400 rounded-full">
              <img src="images/user-2.png" alt="User-2" />
            </div>
            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>
          </div>

          <div className="write-up my-10">
            <p className="text-center font-bold text-sm">
              The sofa is not only incredibly stylish, but also very comfortable
              to lounge on. The clean lines and minimalist designs makes it a
              perfect fit for my modern living room, and the neutral color
              scheme allows me to easily incorporate other accent pieces. The
              sofa is also very sturdy and well-constructed, so I know it will
              last me for years to come.{" "}
            </p>
            <p className="opacity-60 my-5 text-center text-sm">
              - Larry Johnson -
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="review-card3 mx-[25%] w-[50%] flex flex-col justify-center items-center">
          <div className="mainImage flex flex-col gap-2 justify-center items-center">
            <div className="image flex justify-center items-center w-[60px] h-[60px] p-1 border-2 border-gray-400 rounded-full">
              <img src="images/user-3.png" alt="User-3" />
            </div>
            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>
          </div>

          <div className="write-up my-10">
            <p className="text-center font-bold text-sm">
              The sofa is not only incredibly stylish, but also very comfortable
              to lounge on. The clean lines and minimalist designs makes it a
              perfect fit for my modern living room, and the neutral color
              scheme allows me to easily incorporate other accent pieces. The
              sofa is also very sturdy and well-constructed, so I know it will
              last me for years to come.{" "}
            </p>
            <p className="opacity-60 my-5 text-center text-sm">
              - Larry Johnson -
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="review-card4 mx-[25%] w-[50%] flex flex-col justify-center items-center">
          <div className="mainImage flex flex-col gap-2 justify-center items-center">
            <div className="image flex justify-center items-center w-[60px] h-[60px] p-1 border-2 border-gray-400 rounded-full">
              <img src="images/user-4.png" alt="User-4" />
            </div>
            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>
          </div>

          <div className="write-up my-10">
            <p className="text-center font-bold text-sm">
              The sofa is not only incredibly stylish, but also very comfortable
              to lounge on. The clean lines and minimalist designs makes it a
              perfect fit for my modern living room, and the neutral color
              scheme allows me to easily incorporate other accent pieces. The
              sofa is also very sturdy and well-constructed, so I know it will
              last me for years to come.{" "}
            </p>
            <p className="opacity-60 my-5 text-center text-sm">
              - Larry Johnson -
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="review-card5 mx-[25%] w-[50%] flex flex-col justify-center items-center">
          <div className="mainImage flex flex-col gap-2 justify-center items-center">
            <div className="image flex justify-center items-center w-[60px] h-[60px] p-1 border-2 border-gray-400 rounded-full">
              <img src="images/user-5.png" alt="User-5" />
            </div>
            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>
          </div>

          <div className="write-up my-10">
            <p className="text-center font-bold text-sm">
              The sofa is not only incredibly stylish, but also very comfortable
              to lounge on. The clean lines and minimalist designs makes it a
              perfect fit for my modern living room, and the neutral color
              scheme allows me to easily incorporate other accent pieces. The
              sofa is also very sturdy and well-constructed, so I know it will
              last me for years to come.{" "}
            </p>
            <p className="opacity-60 my-5 text-center text-sm">
              - Larry Johnson -
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ReviewSlide;
