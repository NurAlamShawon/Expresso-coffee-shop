import React, { useEffect, useState } from "react";
import { Link } from "react-router"




const Userdetailis = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000/users");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-20 mb-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table header */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-sm opacity-50">{user.address}</div>
                </td>
                <td>
                  <div className="text-sm opacity-50">{user.phone}</div>
                </td>
                <th>
                  <Link to={`/users-profile-update/${user._id}`}>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userdetailis;
