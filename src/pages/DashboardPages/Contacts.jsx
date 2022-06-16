import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  const contacts = [
    {
      Name: "Mr. A.R. ASWATHA",
      Designation: "Professor & Head",
      Email: "hod-tc@dayanandasagar.edu",
    },
    {
      Name: "Mr. Chetan Umadi",
      Designation: "Assistant Professor",
      Email: "chetan-tce@dayanandasagar.edu",
    },
    {
      Name: "Dr. Smitha Sasi",
      Designation: "Associate Professor",
      Email: "smitha-tce@dayanandasagar.edu",
    },
    {
      Name: "Mrs. Deepti Raj",
      Designation: "Assistant Professor",
      Email: "deepthi-tce@dayanandasagar.edu",
    },
    {
      Name: "Mr. Santosh B",
      Designation: "Assistant Professor",
      Email: "santosh-tce@dayanandasagar.edu",
    },
    {
      Name: "Dr.Vinod B Durdi",
      Designation: "Professor",
      Email: "vinoddurdi-tce@dayanandasagar.edu",
    },
    {
      Name: "Mr. Vivek Raj K",
      Designation: "Assistant Professor",
      Email: "vivek-tce@dayanandasagar.edu",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary rounded-t-lg p-8 m-5 w-full font-mono">
      {contacts.map((contact) => {
        return (
          <div className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-primary h-10 p-5"
            />
            <div
              className="flex flex-col  justify-center text-primary-dark"
              onClick={(e) => {
                window.location.href = "mailto:"+ contact.Email;
                e.preventDefault();
              }}
            >
              <h1 className="px-3 ">{contact.Name}</h1>
              <h5 className="px-3  text-s">{contact.Designation}</h5>
              <h5 className="px-3 text-xs">Email : {contact.Email}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
