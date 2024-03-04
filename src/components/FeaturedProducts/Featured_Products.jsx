import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";

function Featured_Products() {
  const [underlinedElements, setUnderlinedElements] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    setUnderlinedElements((prevUnderlined) =>
      prevUnderlined.map((isUnderlined, i) =>
        i === index ? !isUnderlined : isUnderlined
      )
    );
  };

  const renderText = (text, index) => {
    const textStyle = {
      borderBottom: underlinedElements[index] ? "2px solid black" : "none",
      cursor: "pointer",
      marginRight: "10px",
    };

    return (
      <span
        className="text-xs font-extrabold opacity-50"
        key={index}
        style={textStyle}
        onClick={() => handleClick(index)}
      >
        {text}
      </span>
    );
  };

  return (
    <div>
      <div className="container flex flex-col mt-36 justify-center items-center">
        <h1 className="text-2xl font-bold my-4">FEATURED PRODUCTS</h1>
        <ul className="flex gap-5">
          <li>{renderText("ALL", 0)}</li>
          <li>{renderText("ON-SALE", 1)}</li>
          <li>{renderText("SOFA", 2)}</li>
          <li>{renderText("HANGING LIGHT", 3)}</li>
        </ul>
      </div>

      <div className="listed-products mt-20 flex flex-col items-center justify-center">
        <div className="upside flex flex-row mx-32 gap-5 items-center justify-center">
          <div className="first-product flex flex-col justify-center items-center">
            <img src="images/pro-1.png" alt="product" />

            <p className="my-3 text-sm font-semibold">URBAN LUX HIGH CHAIR</p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$2668.15</p>
          </div>

          <div className="second-product flex flex-col justify-center items-center">
            <img src="images/pro-3.png" alt="product" />

            <p className="my-3 text-sm font-semibold">
              MODERN BLACK HANGING LIGHT
            </p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$1595.6</p>
          </div>

          <div className="third-product flex flex-col justify-center items-center">
            <img src="images/pro-5.png" alt="product" />

            <p className="my-3 text-sm font-semibold">METRO FUSION TABLE</p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$2238.30</p>
          </div>
        </div>

        <div className="downside flex flex-row mx-32 gap-5 items-center justify-center">
          <div className="first-product flex flex-col justify-center items-center">
            <img src="images/pro-6.png" alt="product" />

            <p className="my-3 text-sm font-semibold">LUMIN DESK LAMP</p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$1477.80</p>
          </div>

          <div className="second-product flex flex-col justify-center items-center">
            <img src="images/pro-8.png" alt="product" />

            <p className="my-3 text-sm font-semibold">
              TIMELESS EDGE HANGING CLOCK
            </p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$1071.6</p>
          </div>

          <div className="third-product flex flex-col justify-center items-center">
            <img src="images/pro-9.png" alt="product" />

            <p className="my-3 text-sm font-semibold">ZENITH PENDENT LIGHT</p>

            <div className="stars flex gap-1">
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
              <IoIosStar className="text-xs" />
            </div>

            <p className="my-3 text-sm font-bold">$2069.59</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured_Products;
