import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faBook,
  faSquarePlus,
  faBell,
  faAddressBook,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  var [currentPage, setCurrentPage] = useState("My Notes");
  return (
    <div className="object-top h-screen flex flex-col font-mono">
      <h1 className="ml-10 mt-10 mx-4 text-3xl text-center  text-primary-dark font-bold">
        {currentPage}
      </h1>
      <ul className="ml-10 mt-10 text-3xl flex flex-row text-primary">
        <li className="flex w-full mx-4 justify-between p-2  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(0);
              setCurrentPage("My Notes");
            }}
          >
            <FontAwesomeIcon icon={faUserNinja} />
            <span className="text-sm  ml-2">My notes</span>
          </div>
        </li>
        <li className="flex w-full mx-4 p-2 justify-between  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(1);
              setCurrentPage("All Notes");
            }}
          >
            <FontAwesomeIcon icon={faBook} />
            <span className="text-sm  ml-2">All Notes</span>
          </div>
        </li>
        <li className="flex w-full mx-4 justify-between p-2  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(2);
              setCurrentPage("Dashboard");
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            <span className="text-sm  ml-2">Dashboard </span>
          </div>
        </li>
        <li className="flex w-full mx-4 justify-between p-2  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(3);
              setCurrentPage("Circualars");
            }}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="text-sm  ml-2">Circulars </span>
          </div>
        </li>
        <li className="flex w-full mx-4 justify-between p-2  cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(4);
              setCurrentPage("Contacts");
            }}
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="text-sm  ml-2">Contacts </span>
          </div>
        </li>
        <li className="flex w-full mx-4 justify-between p-2 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              // props.handlePage(4);
            }}
          >
            <FontAwesomeIcon icon={faSignOut} />
            <span className="text-sm  ml-2">Logout </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
