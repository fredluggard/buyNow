import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center my-36">
      <div className="text-center">
        <h1 className="mb-[40px] font-bold text-3xl">
          Oops! Seems you lost your way.
        </h1>
        <Link
          className="d cursor-pointer bg-green-600 p-2 rounded-lg text-white"
          to="/"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
