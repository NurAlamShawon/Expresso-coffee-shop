import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const EditCard = () => {


  const datas = useLoaderData();
  console.log(datas);


const id=useParams();




const handleEdit=(e)=>{
  e.preventDefault();
const form=e.target;
const formData=new FormData(form);
const coffeedata=Object.fromEntries(formData.entries());

fetch(`https://coffee-shop-server-orpin.vercel.app/coffees/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeedata),
    })
      .then((res) => res.json())
      .then((response) => {
        alert("Updated Successfully");
        console.log(response)
        }
      );



}



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
          <h1
            className="rancho text-[#374151] text-5xl pb-6 text-center"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Update Existing Coffee Details
          </h1>
          <p className="raleway text-lg text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleEdit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={datas.name}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Americano Coffee"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={datas.chef}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Mr. Matin Paul"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={datas.supplier}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Cappu Authorizer"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={datas.taste}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Sweet and hot"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={datas.category}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Americano"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={datas.details}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Espresso with hot water"
              />
            </div>

            {/* Photo */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={datas.photo}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="https://i.ibb.co/PGqMPr9/11.png"
              />
            </div>
            {/* price */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={datas.price}
                // onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="https://i.ibb.co/PGqMPr9/11.png"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#D2B48C] text-[#331A15] text-xl border-3 border-[#331A15] font-semibold rounded-md hover:bg-yellow-700"
              >
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
