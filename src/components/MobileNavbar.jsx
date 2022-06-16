import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faBook,
  faSquarePlus,
  faBell,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const MobileNavbar = (props) => {
  return (
    <div className="h-16 w-screen object-bottom">
      <ul className="flex flex-row bg-gray-50 justify-center h-16 items-center">
        <li className="flex w-full mb-4 justify-between p-2 text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(0);
            }}
          >
            <FontAwesomeIcon icon={faUserNinja} />
          </div>
        </li>
        <li className="flex bg-black w-full mb-4 p-2 justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
          <div
            className="flex items-center"
            onClick={() => {
              props.handlePage(1);
            }}
          >
            <FontAwesomeIcon icon={faBook} />
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
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
