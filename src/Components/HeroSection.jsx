import React, { useContext } from "react";
import { Link } from "react-router";
import { ValueContext } from "../Context/ValueContext";

const HeroSection = () => {
  const { currentuser } = useContext(ValueContext);
  return (
    <div>
      <div className="relative bg-[url('../../src/assets/images/more/3.png')] bg-cover bg-center rancho h-[calc(100vh-5rem)]">
        <div className="absolute top-60 xl:top-74 xl:right-74 space-y-4 xl:p-0 p-2">
          <h1 className="text-white text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="raleway text-base text-white max-w-2xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          {currentuser
            ? ""
            :  <Link to="/authentication">
          <button className=" mr-5 bg-[#E3B577] text-black text-xl py-4 px-6 cursor-pointer  hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
            Learn More
          </button>
          </Link>}
          <Link to="/users">
            <button className=" bg-[#E3B577] text-black text-xl py-4 px-6 cursor-pointer  hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
              Users
            </button>
          </Link>
        </div>
      </div>
      <div className=" bg-[#ECEAE3] ">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="space-y-3 my-14">
            <img
              src="../../src/assets/images/icons/1.png"
              alt=""
              className="w-17 h-17 mx-auto"
            />
            <h1 className="font-regular text-center text-3xl rancho text-[#331A15]">
              Awesome Aroma
            </h1>
            <p className="text-base text-center text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-3 my-14">
            <img
              src="../../src/assets/images/icons/2.png"
              alt=""
              className="w-17 h-17 mx-auto"
            />
            <h1 className="font-regular text-center text-3xl rancho text-[#331A15]">
              High Quality
            </h1>
            <p className="text-base text-center text-[#1B1A1A]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="space-y-3 my-14">
            <img
              src="../../src/assets/images/icons/3.png"
              alt=""
              className="w-17 h-17 mx-auto"
            />
            <h1 className="font-regular text-3xl text-center rancho text-[#331A15]">
              Pure Grades
            </h1>
            <p className="text-base text-center text-[#1B1A1A]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-3 my-14">
            <img
              src="../../src/assets/images/icons/4.png"
              alt=""
              className="w-17 h-17 mx-auto"
            />
            <h1 className="font-regular text-center text-3xl rancho text-[#331A15]">
              Proper Roasting
            </h1>
            <p className="text-base text-center text-[#1B1A1A]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
