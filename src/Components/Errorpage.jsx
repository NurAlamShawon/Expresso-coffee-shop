import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Link to="/">
        <h1
          className="w-34 mt-6 mx-auto p-4 cursor-pointer flex items-center rancho tex-[#374151] font-2xl mb-6 hover:bg-[#D2B48C] hover:text-[#374151]"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to home
        </h1>
      </Link>

      <div>
        <img
          src="https://i.postimg.cc/fTkKwNJd/404.gif"
          alt=""
          className="mx-auto"
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
