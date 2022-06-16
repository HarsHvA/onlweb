import React from "react";
import Image5 from "../assets/images/image5.svg";

const UploadNotes = () => {
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto font-mono">
    <div className="flex justify-center items-center">
      <img src={Image5} alt="" className="m-auto md:h-screen"></img>
    </div>
    <div className="flex flex-col md:h-screen justify-center items-center">
      <form
      // onSubmit={handleSubmit}
      >
        <h1 className="text-s text-center text-primary-dark mb-2 font-bold text-xl p-3">
          Upload notes
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Course Name
          </label>
          <input
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            type="text"
            placeholder="Enter course name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Module no
          </label>
          <input
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="module"
            type="text"
            placeholder="Enter module no"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Semester
          </label>
          <input
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="semester"
            type="text"
            placeholder="Enter semester"
          />
        </div>

        <div className="flex flex-col items-center ">
          <button
            className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default UploadNotes