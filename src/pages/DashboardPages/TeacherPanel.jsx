import React from "react";
import { useNavigate } from "react-router";
import Image4 from "../../assets/images/image4.svg";

const TeacherPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse min-h-screen items-center justify-start rounded-t-lg p-8 m-5 w-full font-mono">
      <div className="flex justify-center items-center">
        <img src={Image4} alt="" className="m-auto h-screen"></img>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form
        // onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={() => navigate("/uploadnotes")}
            >
              Upload Notes
            </button>
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 mt-2 ease-linear transition-all duration-150"
              type="submit"
              onClick={() => navigate("/uploadcircular")}
            >
              Upload circular
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherPanel;
