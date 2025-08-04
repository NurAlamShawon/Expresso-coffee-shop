import React, { useContext, useEffect, useState } from "react";
import { ValueContext } from "../Context/ValueContext";
import { Link } from "react-router"; 

const MyOrders = () => {
  const { currentuser } = useContext(ValueContext);
  const [logs, setLogs] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch logs
  useEffect(() => {
    if (currentuser?.email) {
      fetch(`https://coffee-shop-server-orpin.vercel.app/logs/${currentuser.email}`)
        .then((res) => res.json())
        .then((data) => setLogs(data));
    }
  }, [currentuser]);

  // Calculate total price on logs update
  useEffect(() => {
    const total = logs.reduce((sum, item) => sum + parseFloat(item.price), 0);
    setTotalPrice(total);
  }, [logs]);

  // Delete a coffee from orders
  const handleDelete = (coffeeId) => {
    const confirm = window.confirm("Are you sure you want to delete this coffee?");
    if (confirm && currentuser?.email) {
      fetch(
        `https://coffee-shop-server-orpin.vercel.app/logs/${currentuser.email}/${coffeeId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            setLogs(logs.filter((log) => log.coffeeId !== coffeeId));
          }
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-5">
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

      <h2 className="text-3xl font-semibold mb-6">☕ My Ordered Coffees</h2>

      {logs.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {logs.map((item) => (
            <div
              key={item.coffeeId}
              className="border p-4 rounded-lg shadow bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p>Price: {item.price} TAKA</p>
              <p className="text-sm text-gray-500">
                Ordered at: {new Date(item.time).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(item.coffeeId)}
                className="btn btn-error mt-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {logs.length > 0 && (
        <div className="mt-6">
          <p className="text-xl font-semibold mb-2">
            🧾 Total Price: <span className="text-green-600">{totalPrice} TAKA</span>
          </p>
          <button className="btn btn-success mt-2">Make Payment</button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
