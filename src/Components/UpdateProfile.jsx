import { updateProfile } from "firebase/auth";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase-init";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UpdateProfile = () => {
  const user = useLoaderData();
  const id = useParams();
  const navigate = useNavigate();

  const handleprofile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const address = form.address.value;
    const phone = form.phone.value;

    const updateuser = {
      name,
      photo,
      address,
      phone,
    };

    if (!auth.currentUser) {
      toast("No user is currently logged in.");
      return;
    }

    if (
      name.length !== 0 &&
      photo.length !== 0 &&
      address.length !== 0 &&
      phone.length !== 0
    ) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          toast("You have updated your profile");

          fetch(`http://localhost:3000/users/${id.id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateuser),
          })
            .then((res) => res.json())
            .then((response) => {
              alert("Updated Successfully");
              console.log(response);
            });

          navigate("/users");
        })
        .catch((error) => {
          console.log(error);
          toast("Error updating profile");
        });
    } else {
      toast("Please Enter Name and PhotoURL");
      return;
    }
  };

  return (
    <div>
      <form className="space-y-6 m-20" onSubmit={handleprofile}>
        <h1 className="font-semibold text-2xl text-center">
          Update your account
        </h1>
        <div className="border-1 border-gray-200 mx-2"></div>

        <label htmlFor="name">Your Name</label>
        <br />
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          placeholder="Enter your name"
          className="input w-full"
        />
        <br />

        <label htmlFor="photo">Photo URL</label>
        <br />
        <input
          type="text"
          name="photo"
          defaultValue={user.photo}
          placeholder="Enter your photo URL"
          className="input w-full"
        />
        <br />
        <label htmlFor="photo">Adress</label>
        <br />
        <input
          type="text"
          name="address"
          defaultValue={user.address}
          placeholder="Enter your Adress"
          className="input w-full"
        />
        <br />
        <label htmlFor="photo">Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          defaultValue={user.phone}
          placeholder="Enter your Phone Number"
          className="input w-full"
        />
        <br />

        <input
          type="submit"
          value="Update"
          className="text-white btn bg-primary w-full"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
