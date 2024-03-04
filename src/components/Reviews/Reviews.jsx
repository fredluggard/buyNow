import React from "react";
import ReviewSlide from "../Slider/ReviewSlide";

function Reviews() {
  return (
    <div className="container">
      <div className="review-heading flex flex-col justify-center items-center mb-12">
        <h1 className="text-2xl font-bold my-4">REVIEWS BY CUSTOMERS</h1>
        <p className="text-xs font-bold opacity-50">
          WHAT OUR CUSTOMERS THINK ABOUT US?
        </p>
      </div>

      <div className="customer-reviews">
        <ReviewSlide />
      </div>
    </div>
  );
}

export default Reviews;
