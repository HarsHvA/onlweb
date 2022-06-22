import React, { useState } from "react";
import { auth } from "../Firebase";
import Image3 from "../assets/images/image3.svg";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto font-mono">
      <div className="flex justify-center items-center">
        <img src={Image3} alt="" className="m-auto md:h-screen"></img>
      </div>
      <div className="flex flex-col md:h-screen justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendPasswordResetEmail(auth, email)
              .then(() => {
                setMsg("Password reset email sent!!");
              })
              .catch((error) => {
                setMsg(error.toString());
              });
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter registered email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send password reset email
            </button>
          </div>
        </form>
        <span className="mt-2 text-s p-2 leading-normal text-black">{msg}</span>
      </div>
    </div>
  );
};

export default ForgotPassword;
