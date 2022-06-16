import { useState, useEffect } from "react";
import { firestore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Circulars = () => {
  const [circularList, setCircularList] = useState([]);

  useEffect(() => {
    const ref = collection(firestore, "circular");
    const getCirculars = async () => {
      const data = await getDocs(ref);
      setCircularList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCirculars();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary rounded-t-lg p-8 m-5 w-full font-mono">
      {circularList.map((note) => {
        const date = Date(note.dateModified);
        return (
          <div className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full">
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-primary h-10 p-5"
          />
          <div className="flex flex-col  justify-center text-primary-dark">
            <h1 className="px-3 py-2">
              {note.name}
            </h1>
            <h5 className="px-3 text-xs">
              {date + " | uploaded by " + note.uploaderName}
            </h5>
          </div>
        </div>
      );
    })}
  </div>
  );
}

export default Circulars