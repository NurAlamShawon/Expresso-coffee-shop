import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { ValueContext } from "../Context/ValueContext";

const Cards = () => {
  const { coffees, currentuser } = useContext(ValueContext);
  const [coffeedata, setcoffeedata] = useState([]);

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
        fetch(`https://coffee-shop-server-orpin.vercel.app/coffees/${id}`, {
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

  const handleOrder = (coffee) => {
    Swal.fire({
      title: `Order ${coffee.name}?`,
      text: `Do you want to order this coffee for ${coffee.price} TAKA?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Order it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Log or save the ordered coffee
        const order = {
          coffeeId: coffee._id,
          name: coffee.name,
          price: coffee.price,
          time: new Date().toLocaleString(),
        };
        fetch(`https://coffee-shop-server-orpin.vercel.app/order/${currentuser.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Order saved", data);
          });

        Swal.fire("Ordered!", `${coffee.name} has been ordered.`, "success");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 pt-10">
        {coffeedata.map((data) => (
          <div key={data._id} className="bg-[#F5F4F1] rounded-2xl p-8">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-4">
                <img
                  src={data.photo}
                  alt={data.name}
                  className="w-44 h-56 p-4"
                />
              </div>
              <div className="col-span-6">
                <h1 className="text-xl font-bold">
                  Name <span className="font-normal">{data.name}</span>
                </h1>
                <h1 className="text-xl font-bold">
                  Chef <span className="font-normal">{data.chef}</span>
                </h1>
                <h1 className="text-xl font-bold">
                  Price <span className="font-normal">{data.price} TAKA</span>
                </h1>
              </div>
              <div className="col-span-2">
                {role === "user" ? (
                  <Link to={`/description/${data._id}`}>
                    <button className="btn bg-[#D2B48C] mb-3 hover:bg-[#e4d2ba]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                {role === "admin" ? (
                  <Link to={`/edit/${data._id}`}>
                    <button className="btn bg-[#3C393B] mb-3 hover:bg-[#767475]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                {role === "admin" ? (
                  <button
                    className="btn bg-[#EA4744] hover:bg-[#d1a9a9]"
                    onClick={() => handledelete(data._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {role === "user" ? (
              <div className="mx-auto w-30">
                <button
                  className="btn btn-success"
                  onClick={() => handleOrder(data)}
                >
                  Order Coffee
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
