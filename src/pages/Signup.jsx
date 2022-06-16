import React, { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import Image2 from "../assets/images/image2.svg";

const Signup = () => {
  const options = ["Teacher", "Student"];
  const defaultOption = options[0];
  const [isTeacher, setTeacher] = useState(true);
  let ShowUsn = () => {
    if (!isTeacher) {
      return (
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Usn
          </label>
          <input
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usn"
            type="text"
            placeholder="Usn"
          />
        </div>
      );
    }
  };
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto">
      <div className="flex justify-center items-center">
        <img src={Image2} alt="" className="m-auto md:h-screen"></img>
      </div>
      <div className="flex flex-col md:h-screen justify-center items-center">
        <form
        // onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              // onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              // onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <ShowUsn />
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              // onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Designation
          </label>
            <ReactDropdown
              options={options}
              value={defaultOption}
              onChange={(value) => {
                console.log(value);
                if (value.value === "Student") {
                  setTeacher(false);
                } else {
                  setTeacher(true);
                }
              }}
              placeholder="Select Designation"
            />
          </div>

          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
