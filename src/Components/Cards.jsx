import React, { useContext, useEffect, useState } from "react";
import { ValueContext, Coffee } from "../Context/ValueContext";
import { Link } from "react-router"; // Correct import
import Swal from "sweetalert2";

const Cards = () => {
  const {coffees} = useContext(ValueContext);


  const [coffeedata, setcoffeedata] = useState([]);

  useEffect(() => {
    setcoffeedata(coffees);
  }, [coffees]);

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((items) => {
            if (items.deletedCount) {
              const update = coffeedata.filter((item) => item._id !== id);
              setcoffeedata(update);
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 pt-10">
        {coffeedata.map((data) => (
          <div key={data._id} className="grid grid-cols-12 items-center bg-[#F5F4F1] rounded-2xl p-8">
            <div className="col-span-4">
              <img src={data.photo} alt={data.name} className="w-44 h-56 p-4" />
            </div>
            <div className="col-span-6">
              <h1 className="text-xl font-bold">Name <span className="font-normal">{data.name}</span></h1>
              <h1 className="text-xl font-bold">Chef <span className="font-normal">{data.chef}</span></h1>
              <h1 className="text-xl font-bold">Price <span className="font-normal">{data.price} TAKA</span></h1>
            </div>
            <div className="col-span-2">
              <Link to={`/description/${data._id}`}>
                <button className="btn bg-[#D2B48C] mb-3 hover:bg-[#e4d2ba]">View</button>
              </Link>
              <Link to={`/edit/${data._id}`}>
                <button className="btn bg-[#3C393B] mb-3 hover:bg-[#767475]">Edit</button>
              </Link>
              <button className="btn bg-[#EA4744] hover:bg-[#d1a9a9]" onClick={() => handledelete(data._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
