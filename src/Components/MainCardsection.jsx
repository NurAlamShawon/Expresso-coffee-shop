import React from "react";
import Cards from "./Cards";
import { Link } from "react-router";

const MainCardsection = () => {
  return (
    <div className="pt-20 mb-20 ">
      <img
        src="../../src/assets/images/more/1.png"
        alt=""
        className="absolute z-0  w-full"
      />
      <div className="space-y-4  relative z-10">
        
        <h2 className=" text-xl raleway text-center">--- Sip & Savor ---</h2>
        <h1
          className="text-5xl font-extrabold rancho text-center"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Our Popular Products
        </h1>

        <Link to="/add-item">
          <button
            className="btn flex items-center border-2 bg-[#E3B577] hover:bg-white hover:text-black text-white border-[#331A15] p-2 rounded-xl mx-auto cursor-pointer"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Add Coffee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#331A15"
              fill="none"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8h13a2 2 0 012 2v5a5 5 0 01-5 5H8a5 5 0 01-5-5V8zm0 0a3 3 0 013-3h4m8 8h2a2 2 0 002-2V9a2 2 0 00-2-2h-2"
              />
            </svg>
          </button>
        </Link>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default MainCardsection;
