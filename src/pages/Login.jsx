import React, { useState } from "react";
import { useNavigate } from "react-router";
import Image2 from "../assets/images/image2.svg";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  const login = async () => {
    try {
      setMsg("Logging in...");
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      await sleep(2000);
      console.log("uuudi :" + user.uid);
      setMsg("Logged in");
      navigate("/dashboard", { state: { uid: user.uid } });
    } catch (error) {
      setMsg(error.toString());
    }
  };
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto font-mono">
      <div className="flex justify-center items-center">
        <img src={Image2} alt="" className="m-auto md:h-screen"></img>
      </div>
      <div className="flex flex-col md:h-screen justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Login
            </button>
          </div>
          <h1
            className="text-s text-center text-primary-dark mt-2 underline"
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot password?
          </h1>
        </form>
        <span className="mt-2 text-s leading-normal text-black">{msg}</span>
      </div>
    </div>
  );
};

export default Login;
