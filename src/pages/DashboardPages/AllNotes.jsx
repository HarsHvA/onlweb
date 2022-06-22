import { useState, useEffect } from "react";
import { firestore } from "../../Firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { storage } from "../../Firebase";
import { getDownloadURL, ref } from "firebase/storage";

const AllNotes = () => {
  const [notesList, setNotesList] = useState([]);

  const openDocument = (name) => {
    const storag = storage;
    getDownloadURL(ref(storag, "notes/" + name))
      .then((url) => {
        window.open(url);
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  useEffect(() => {
    const ref = collection(firestore, "notes");
    const q = query(ref, orderBy("dateModified", "desc"));
    const getNotes = async () => {
      const data = await getDocs(q);
      setNotesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary rounded-t-lg p-8 m-5 w-full font-mono">
      {notesList.map((note) => {
        return (
          <div
            key={note.dateModified}
            className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full"
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              className="text-primary h-10 p-5"
            />
            <div className="flex flex-col  justify-center">
              <button>
                <h1
                  className="px-3 py-2 text-primary-dark"
                  onClick={() => {
                    openDocument(note.name);
                  }}
                >
                  {note.name + " | module-" + note.moduleNo}
                </h1>
              </button>
              <h5 className="px-3 text-xs text-primary-dark">
                {"uploaded by " + note.uploaderName}
              </h5>
              <h1
                className="px-3 underline py-2 text-xs text-primary-dark"
                onClick={async () => {
                  const ref = collection(firestore, "favourite");
                  await addDoc(ref, {
                    name: note.name,
                    uploaderName: note.uploaderName,
                    dateModified: note.dateModified,
                    courseName: note.courseName,
                    moduleNo: note.moduleNo,
                    sem: note.sem,
                  });
                }}
              >
                Favourite
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllNotes;
