import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/images/image1.svg";

const LoginOrSignup = () => {
    const navigate = useNavigate();
    return (
        <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto">
          <div className="flex justify-center items-center">
            <img src={Image1} alt="" className="m-auto md:h-screen"></img>
          </div>
          <div className="flex flex-col md:h-screen justify-center items-center">
            <div className="flex flex-col items-center my-8">
              <h1 className="font-sans text-xl md:text-5xl">Online notes library</h1>
              <p className="font-sans">Telecommunication department</p>
            </div>
            <button
              className="md:w-1/2 w-11/12  bg-primary text-white  font-bold uppercase text-base md:px-8 py-3 rounded shadow-md hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>navigate("/login")}
            >
              Login
            </button>
           
            <button
              className="md:w-1/2 w-11/12 text-black bg-transparent border border-solid border-black  font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      );
};

export default LoginOrSignup;
