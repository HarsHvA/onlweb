import { useState, useEffect } from "react";

// import ReactDropdown from "react-dropdown";
import { firestore } from "../../Firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const NotesPage = () => {
  const [notesList, setNotesList] = useState([]);
  // const options = [1, 2, 3, 4, 5, 6, 7, 8];
  // const [sem, setSem] = useState(1);
  // const defaultOption = options[0];

  useEffect(() => {
    const ref = collection(firestore, "notes");
    const q = query(
      ref,
      where("sem", "==", 3),
      orderBy("dateModified", "desc")
    );
    const getNotes = async () => {
      const data = await getDocs(q);
      setNotesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary rounded-t-lg p-8 m-5 w-full font-mono">
      {/* <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select semester
        </label>
        <ReactDropdown
          options={options}
          value={defaultOption}
          onChange={(value) => {
            setSem(parseInt(value));
            console.log(value);
          }}
          placeholder="Select semester"
        />
      </div> */}
      {notesList.map((note) => {
        return (
          <div className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full">
            <FontAwesomeIcon
              icon={faFilePdf}
              className="text-primary h-10 p-5"
            />
            <div className="flex flex-col  justify-center text-primary-dark">
              <h1 className="px-3 py-2">
                {note.name + " | module-" + note.moduleNo}
              </h1>
              <h5 className="px-3 text-xs">
                {"uploaded by " + note.uploaderName}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotesPage;
