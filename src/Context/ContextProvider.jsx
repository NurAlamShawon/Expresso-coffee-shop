import React, { useEffect, useState } from "react";
import { ValueContext } from "./ValueContext";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-init";



const ContextProvider = ({ children }) => {
  const [coffees, setcoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentuser, setCurrentUser] = useState(null);


  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const res = await fetch("https://coffee-shop-server-orpin.vercel.app/coffees");
        const data= await res.json();
        setcoffees(data);
      } catch (error) {
        console.error("Failed to fetch coffees:", error);
      }
    };
    fetchCoffees();
  }, []);

  // Authentication methods
  const signupwithgoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signupwithemail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginwithemail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetpassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Context value
  const userinfo = {
    coffees,
    signupwithgoogle,
    signupwithemail,
    loginwithemail,
    loading,
    currentuser,
    signout,
    resetpassword,
  };

  return (
    <ValueContext.Provider value={userinfo}>{children}</ValueContext.Provider>
  );
};

export default ContextProvider;
