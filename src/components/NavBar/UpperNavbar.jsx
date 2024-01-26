import React from "react";
import { FaSearch } from "react-icons/fa";

function UpperNavbar() {
  //   <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>;
  //   function googleTranslateElementInit() {
  //     new google.translate.TranslateElement(
  //       { pageLanguage: "en" },
  //       "google_translate_element"
  //     );
  //   }
  return (
    <div>
      {/* Main container */}
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img className="hidden" src="images/BuyNow.png" alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="search">
          <button>All</button>
          <input type="text" name="search-bar" id="search-bar" />
          <button type="submit">
            <FaSearch />
          </button>
        </div>

        {/* Language Translator */}
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
}

export default UpperNavbar;
