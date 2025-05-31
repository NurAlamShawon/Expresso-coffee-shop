import { updateProfile } from "firebase/auth";
import React from "react";
import { auth } from "../firebase-init";
import { ToastContainer, toast } from "react-toastify";

const Updateprofile = () => {
  const handleprofile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photourl = e.target.photo.value;

    console.log(name.length);

    if (name.length !== 0 && photourl.length !== 0) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photourl,
      })
        .then(() => {
          // Profile updated!
          toast("You have updated your profile");
        })
        .catch((error) => {
          // An error occurred
          // ...
          console.log(error);
        });
    } else {
      toast("Please Enter Name and PhotoURL");
      return;
    }
  };

  return (
    <div>
      <form className="space-y-6  m-20 " onSubmit={handleprofile}>
        <h1 className="font-semibold text-2xl text-center">
          Update your account
        </h1>
        <div className="border-1 border-gray-200 mx-2"></div>
        <label for="name">Your Name</label>
        <br></br>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input w-full"
        />
        <br></br>
        <label for="photo">Photo URL</label>
        <br></br>
        <input
          type="text"
          name="photo"
          placeholder="Enter your photo url"
          className="input w-full"
        />

        <br></br>

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

export default Updateprofile;
