import React from "react";
import Footer_Links from "./Footer_Links";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col">
      <Footer_Links />
      <div className="flex mx-[10%] justify-between items-center py-8">
        <p className="opacity-50">
          Furnitur &copy; Copyright 2024. Inc. All rights reserved
        </p>
        <div className="socials flex gap-6">
          <a href="/">
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaPinterest />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
