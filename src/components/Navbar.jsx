import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faBook,
  faSquarePlus,
  faBell,
  faAddressBook,
  faSignOut
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="w-1/4 bg-gray-100 h-screen">
      <h1 className="ml-10 mt-10 text-3xl">Online notes library</h1>
      <ul className="ml-10 mt-10 text-3xl ">
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(0);
            }}
          >
            <FontAwesomeIcon icon={faUserNinja} />
            <span className="text-sm  ml-2">My notes</span>
          </div>
        </li>
        <li className="flex w-full mb-4 p-2 justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(1);
            }}
          >
            <FontAwesomeIcon icon={faBook} />
            <span className="text-sm  ml-2">All Notes</span>
          </div>
        </li>
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(2);
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            <span className="text-sm  ml-2">Dashboard </span>
          </div>
        </li>
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(3);
            }}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="text-sm  ml-2">Circulars </span>
          </div>
        </li>
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(4);
            }}
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="text-sm  ml-2">Contacts </span>
          </div>
        </li>
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
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
