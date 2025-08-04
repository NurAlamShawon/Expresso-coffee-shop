import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ValueContext } from "../Context/ValueContext";

const Navbar = () => {
  const { signout, currentuser } = useContext(ValueContext);
  const navigate = useNavigate();

  const [role, setrole] = useState("");

  useEffect(() => {
    if (!currentuser || !currentuser.email) return;

    fetch(`https://coffee-shop-server-orpin.vercel.app/users/role?email=${currentuser.email}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("role", result);
        setrole(result.role);
      });
  }, [currentuser]);

  const handlelogout = () => {
    signout()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlelogin = () => {
    navigate("/authentication");
  };

  return (
    <div className="bg-[url('https://i.postimg.cc/xdgJJXZ1/15.jpg')] bg-cover bg-center">
      <div
        className="flex items-center xl:mx-5 
          justify-between"
      >
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/MZgDKLRr/logo1.png"
            alt=""
            className="xl:w-19 xl:h-22  w-10 h-10"
          />
          <h1 className="rancho font-normal text-white xl:text-5xl text-xl">
            Espresso Emporium
          </h1>
        </div>

        {currentuser && role === "user" && (
          <div className="flex items-center cursor-pointer ">
            <div className="hover:scale-110">
              <Link to="/my-orders" className=" flex items-center">
                <h1 className="xl:text-xl text-base text-white">My Orders</h1>

                <button title="My Orders">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="xl:w-8 xl:h-8  w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 6.75L5.25 19.5A2.25 2.25 0 007.5 21h9a2.25 2.25 0 002.25-1.5l.75-12.75H4.5zM9 6.75V5.25A2.25 2.25 0 0111.25 3h1.5A2.25 2.25 0 0115 5.25v1.5"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        )}
        {currentuser ? (
          <button
            onClick={handlelogout}
            className="bg-[#E3B577] raleway text-black text-base xl:text-xl py-4 px-6 cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handlelogin}
            className="bg-[#E3B577] raleway text-black text-base xl:text-xl py-4 px-6 cursor-pointer hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
