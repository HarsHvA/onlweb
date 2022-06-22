import React, { useState } from "react";
import Image5 from "../assets/images/image5.svg";
import { storage, firestore } from "../Firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router";

const UploadCircular = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      const uid = user.uid;
      navigate("/unauthorized", { state: { uid: uid } });
    }
  });
  const [fileUpload, setFileUpload] = useState(null);
  const [fileName, setfileName] = useState("");
  const [progress, setProgress] = useState("");

  const uploadCircularStore = async () => {
    const ref = collection(firestore, "circular");
    await addDoc(ref, {
      name: fileName,
      uploaderName: "Ashutosh",
      dateCreated: serverTimestamp(),
    });
  };

  const uploadFile = async () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `circular/${fileName}`);
    const uploadTask = uploadBytesResumable(fileRef, fileUpload);
    await uploadCircularStore();
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress("Upload is " + Math.round(progress) + "% done");
      if (progress === 100) {
        setProgress("Circular Uploaded!");
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
            }
          }}
        >
          <h1 className="text-s text-center text-primary-dark mb-2 font-bold text-xl p-3">
            Upload circular
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pick file
            </label>
            <input
              type="file"
              onChange={(event) => {
                setFileUpload(event.target.files[0]);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Heading
            </label>
            <input
              onChange={(e) => {
                setfileName(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="circular"
              type="text"
              placeholder="Enter heading"
            />
          </div>

          <div className="flex flex-col items-center ">
            <button
              className="w-80 bg-primary text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg hover:bg-primary-dark outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Upload pdf
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

export default UploadCircular;
