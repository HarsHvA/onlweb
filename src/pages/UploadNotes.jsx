import React, { useState } from "react";
import Image5 from "../assets/images/image5.svg";
import { storage, firestore } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { ref, uploadBytesResumable } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router";

const UploadNotes = () => {
  const navigate = useNavigate();
  const [uploaderName, setUploaderName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      const uid = user.uid;
      navigate("/unauthorized", { state: { uid: uid } });
    } else {
      setUploaderName(user.displayName);
    }
  });
  const [fileUpload, setFileUpload] = useState(null);
  const [fileName, setfileName] = useState("");
  const [progress, setProgress] = useState("");
  const [courseName, setCourseName] = useState("");
  const [moduleNo, setModuleNo] = useState("");
  const [sem, setSem] = useState(1);

  const uploadNoteStore = async () => {
    const ref = collection(firestore, "notes");
    await addDoc(ref, {
      name: fileName,
      uploaderName: uploaderName,
      dateModified: serverTimestamp(),
      courseName: courseName,
      moduleNo: moduleNo,
      sem: sem,
    });
  };

  const uploadFile = async () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `notes/${fileName}`);
    const uploadTask = uploadBytesResumable(fileRef, fileUpload);
    await uploadNoteStore();
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress("Upload is " + Math.round(progress) + "% done");
      if (progress === 100) {
        setProgress("Notes Uploaded!");
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 grid-rows-2 h-screen content-center m-auto font-mono">
      <div className="flex justify-center items-center">
        <img src={Image5} alt="" className="m-auto md:h-screen"></img>
      </div>
      <div className="flex flex-col md:h-screen justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (fileName !== "") {
              uploadFile();
            } else {
              console.log("ghchgvvhbb");
            }
          }}
        >
          <h1 className="text-s text-center text-primary-dark mb-2 font-bold text-xl p-3">
            Upload notes
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Course Name
            </label>
            <input
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
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
              onChange={(e) => {
                setModuleNo(e.target.value);
              }}
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
              onChange={(e) => {
                setSem(parseInt(e.target.value));
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="semester"
              type="number"
              placeholder="Enter semester"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pick file
            </label>
            <input
              type="file"
              onChange={(event) => {
                setFileUpload(event.target.files[0]);
                setfileName(event.target.files[0].name);
              }}
            />
          </div>

          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Upload
            </button>
            <span className="mt-2 text-s leading-normal text-black">
              {progress}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNotes;
