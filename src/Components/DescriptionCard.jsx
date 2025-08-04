import React from "react";
import { Link, useLoaderData } from "react-router";

const DescriptionCard = () => {
  const datas = useLoaderData();
  return (
    <div className="pt-10 pb-10 bg-[url('https://i.postimg.cc/3RpsfGHK/11.png')]">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <h1
            className="w-34 p-4 cursor-pointer flex items-center rancho tex-[#374151] font-2xl mb-6 hover:bg-[#D2B48C] hover:text-[#374151]"
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

        <div className="xl:p-28 p-5 bg-[#F4F3F0] space-y-4">
          <div className="items-center grid grid-cols-12 gap-2">
            <div className="col-span-5">
              <img src={datas.photo} alt="" />
            </div>
            <div className="col-span-7">
              <h1 className="text-xl raleway font-bold">
                Name: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.name}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Chef: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.chef}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Supplier: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.supplier}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Taste: &nbsp;&nbsp;
                <span className="font-normal"> {datas.taste}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Category: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.category}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Details: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.details}</span>
              </h1>
              <h1 className="text-xl raleway font-bold">
                Price: &nbsp;&nbsp;{" "}
                <span className="font-normal"> {datas.price}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
