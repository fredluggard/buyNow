import React from "react";

function Footer_Links() {
  return (
    <div className="flex justify-evenly items-center ">
      <div className="flex w-[80%] gap-5 py-20 my-2 border-y-2 border-opacity-25 border-black justify-between items-center">
        <div className="links flex flex-col gap-4">
          <h1 className="font-bold text-lg">CUSTOMER SERVICE</h1>
          <a className="opacity-50 hover:opacity-100" href="/">
            Help & FAQs
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Return & Refund
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Shipping Policy
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Custom and Taxes
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Customers's Review
          </a>
        </div>

        <div className="links flex flex-col gap-4">
          <h1 className="font-bold text-lg">COMPANY</h1>
          <a className="opacity-50 hover:opacity-100" href="/">
            About Japan with love
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Contact Us
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Special Deals & Offers
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Terms of Service
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Privacy Policy
          </a>
        </div>

        <div className="links flex flex-col gap-4">
          <h1 className="font-bold text-lg">HELP CENTER</h1>
          <a className="opacity-50 hover:opacity-100" href="/">
            Order Information
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Shipping Options
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            International Shipping
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Payment Options
          </a>
          <a className="opacity-0" href="/">
            Customers's Review
          </a>
        </div>

        <div className="links flex flex-col gap-4">
          <h1 className="font-bold text-lg">RETURN & WARRANTY</h1>
          <a className="opacity-50" href="/">
            Returns & Exchange Policy
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Returns Center
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Warranty Policy
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Warranty Registration
          </a>
          <a className="opacity-50 hover:opacity-100" href="/">
            Warranty Repair Center
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer_Links;
