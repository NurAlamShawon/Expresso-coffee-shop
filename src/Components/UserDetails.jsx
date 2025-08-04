import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://coffee-shop-server-orpin.vercel.app/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

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
        fetch(`https://coffee-shop-server-orpin.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((items) => {
            if (items.deletedCount) {
              const update = users.filter((item) => item._id !== id);
              setUsers(update);
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-20 mb-20">
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table header */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {users.map((user) => {
              const totalSpent =
                user.logs?.reduce((sum, log) => sum + Number(log.price), 0) ||
                0;

              return (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt={user.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          💰 Spent:{" "}
                          <span className="font-semibold">{totalSpent}</span>{" "}
                          TAKA
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </td>
                  <td>
                    <div className="text-sm opacity-50">{user.phone}</div>
                  </td>
                  <th className="flex items-center">
                    <Link to={`/users-profile-update/${user._id}`}>
                      <button className="btn bg-[#3C393B] hover:bg-[#767475]">
                        ✏️
                      </button>
                    </Link>
                    <button
                      className="btn bg-[#EA4744] hover:bg-[#d1a9a9]"
                      onClick={() => handledelete(user._id)}
                    >
                      🗑️
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
