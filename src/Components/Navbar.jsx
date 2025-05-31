import React, { useContext } from "react";
import { ValueContext } from "../Context/ValueContext";

const Navbar = () => {
  const { signout, currentuser } = useContext(ValueContext);

  const handlelogout = () => {
    signout()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[url('../../src/assets/images/more/15.jpg')] bg-cover bg-center">
      {/* Flex container with conditional justify */}
      <div className={`flex items-center mx-5 ${currentuser ? "justify-between" : "justify-center"}`}>
        <div className="flex items-center">
          <img
            src="../../src/assets/images/more/logo1.png"
            alt=""
            className="w-19 h-22"
          />
          <h1 className="rancho font-normal text-white text-5xl">
            Espresso Emporium
          </h1>
        </div>
        {currentuser && (
          <div>
            <button
              onClick={handlelogout}
              className="bg-[#E3B577] raleway text-black text-xl py-4 px-6 cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
