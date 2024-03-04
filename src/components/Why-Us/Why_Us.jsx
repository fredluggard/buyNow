import React from "react";
import { LiaGlobeAfricaSolid, LiaAwardSolid } from "react-icons/lia";
import { BsBoxSeam, BsCreditCard2Back, BsTelephonePlus } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function Why_Us() {
  return (
    <div className="mt-48 mb-40 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold my-4">WHY CHOOSE US</h1>
      <div className="services flex gap-5 mt-[50px]">
        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <LiaGlobeAfricaSolid className="text-6xl my-5" />
          <h2 className="font-bold">GLOBAL DELIVERY</h2>
          <p className="mt-5 text-center opacity-50">
            Experience Hassle Free and Seamless Global Connectivity with Our
            Trustworthy and Efficient Delivery Service, Bringing the World to
            Your Fingertips!
          </p>
        </div>

        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <BsBoxSeam className="text-6xl my-5" />
          <h2 className="font-bold">FREE SHIPPING</h2>
          <p className="mt-5 text-center opacity-50">
            Shop to Your Heart's Content Without Worrying About Shipping Cost:
            Our Free Shipping Delivers Your Purchases with a Smile, Straight to
            Your Doorstep!
          </p>
        </div>

        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <BsTelephonePlus className="text-6xl my-5" />
          <h2 className="font-bold">24/7 SUPPORTING</h2>
          <p className="mt-5 text-center opacity-50">
            Shop with Confidence Anytime, Anywhere: Our Free Shipping Service
            Comes with 24/7 Support to Ensure Your Packages Arrives Safely and
            on Time!
          </p>
        </div>
      </div>

      <div className="services flex gap-5 mt-[50px]">
        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <MdOutlineMail className="text-6xl my-5" />
          <h2 className="font-bold">DAILY EMAIL</h2>
          <p className="mt-5 text-center opacity-50">
            Stay Up-to-Date with Your Deliveries: Enjoy the Convenience of Daily
            Email Updates with Our Free Shipping Service. Making Your Online
            Shopping Experience Even More Enjoyable!
          </p>
        </div>

        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <BsCreditCard2Back className="text-6xl my-5" />
          <h2 className="font-bold">EASY PAYMENT</h2>
          <p className="mt-5 text-center opacity-50">
            Shop and Pay with Ease: Our Free Shipping Service Not Only Delivers
            Your Packages for Free, but Also Offers Easy Payment Options, Making
            Shopping Experience a Breeze!
          </p>
        </div>

        <div className="service1 w-[350px] flex flex-col justify-center items-center">
          <LiaAwardSolid className="text-6xl my-5" />
          <h2 className="font-bold">MONTHLY VOUCHER</h2>
          <p className="mt-5 text-center opacity-50">
            More Than Just Free Shipping: Our Services Rewards Your Loyalty with
            Monthly Vouchers, Giving You More Reasons to Shop and Save on Your
            Favorite Products!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why_Us;
