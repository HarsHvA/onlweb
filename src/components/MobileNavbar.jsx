import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faBook,
  faSquarePlus,
  faBell,
  faAddressBook,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { doc, getDoc, collection } from "firebase/firestore";
import { auth, firestore } from "../Firebase";

const MobileNavbar = (props) => {
  var [currentPage, setCurrentPage] = useState("All Notes");
  var [isTeacher, setIsteacher] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/logout");
  };

  const showTeacherPanel = async () => {
    const teachRef = collection(firestore, "teacher");
    const teachDocRef = doc(teachRef, props.uid);
    const teachDocSnap = await getDoc(teachDocRef);
    if (teachDocSnap.exists()) {
      setIsteacher(true);
    } else {
      setIsteacher(false);
    }
  };

  const Dash = () => {
    showTeacherPanel();
    if (isTeacher) {
      return (
        <li className="flex justify-between   cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(2);
              setCurrentPage("Dashboard");
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus}  />
          </div>
        </li>
      );
    }
  };

  return (
    <div className="object-top flex flex-col font-mono w-screen justify-center">
      <h1 className=" mt-10 mx-4 text-xl text-center  text-primary-dark font-bold">
        {currentPage}
      </h1>
      <ul className="mt-10 text-3xl flex flex-row text-primary justify-evenly">
        <li className="flex justify-between  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(0);
              setCurrentPage("All Notes");
            }}
          >
            <FontAwesomeIcon icon={faBook} />
          </div>
        </li>
        <li className="flex justify-between   cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(1);
              setCurrentPage("My Notes");
            }}
          >
            <FontAwesomeIcon icon={faUserNinja}  />
          </div>
        </li>
        <Dash />
        <li className="flex justify-between   cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(3);
              setCurrentPage("Circualars");
            }}
          >
            <FontAwesomeIcon icon={faBell} />
          </div>
        </li>
        <li className="flex justify-between  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(4);
              setCurrentPage("Contacts");
            }}
          >
            <FontAwesomeIcon icon={faAddressBook}  />
          </div>
        </li>
        <li className="flex justify-between cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              logout();
            }}
          >
            <FontAwesomeIcon icon={faSignOut}  />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
