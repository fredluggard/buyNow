import React from "react";
import { IoIosSearch, IoIosArrowDown, IoIosHeartEmpty } from "react-icons/io";
import { PiBagLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function UpperNavbar() {
  return (
    <div className="shadow-lg bg-white">
      {/* Main container */}
      <div className="container pb-2 mx-10 my-5 flex gap-10 items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <img className="" src="/images/logo.png" alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="search-bar flex justify-center items-center h-9 border-2 border-solid border-gray-300">
          <IoIosSearch className="ml-2" />
          <input
            type="search"
            name="search-bar"
            id="search"
            className=" p-3 h-7 outline-none"
            placeholder="Search Something"
          />
        </div>

        {/* Navigation Link */}
        <div className="nav-links">
          <ul className="flex gap-10 text-sm font-bold">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link className="flex items-center" to="/product">
                SHOP <IoIosArrowDown />
              </Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </div>

        {/* Cart and Favorite */}
        <div className="cart-box">
          <ul className="flex gap-10 text-sm font-bold">
            <li>
              <Link className="flex items-center" to="/wishlist">
                <IoIosHeartEmpty className="mr-1" />
                LOVE
              </Link>
            </li>
            <li>
              <Link className="flex items-center" to="/cart">
                <PiBagLight className="mr-1" /> CART
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpperNavbar;
