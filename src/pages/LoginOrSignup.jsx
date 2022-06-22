import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/images/image1.svg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const LoginOrSignup = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/dashboard", { state: { uid: uid } });
    }
  });
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto font-mono">
      <div className="flex justify-center items-center">
        <img src={Image1} alt="" className="m-auto md:h-screen"></img>
      </div>
      <div className="flex flex-col md:h-screen justify-center items-center">
        <div className="flex flex-col items-center my-8">
          <h1 className="font-sans text-2xl sm:text-5xl mb-3">
            Online notes library
          </h1>
          <p className="font-sans">Telecommunication department</p>
        </div>
        <button
          className="md:w-1/2 w-11/12  bg-primary text-white  font-bold uppercase text-base md:px-8 py-3 rounded shadow-md hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="md:w-1/2 w-11/12 text-black bg-transparent border border-solid border-black  font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginOrSignup;
