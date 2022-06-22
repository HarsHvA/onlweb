import { useState, useEffect } from "react";
import { firestore } from "../../Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { storage } from "../../Firebase";
import { getDownloadURL, ref } from "firebase/storage";

const AllNotes = () => {
  const [notesList, setNotesList] = useState([]);
  // const pdfUrl = "http://drive.google.com/viewerng/viewer?embedded=true&url=";

  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  // const onClickUrl = (url) => {
  //   return () => openInNewTab(url);
  // };

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
            key={note.name}
            className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full"
            onClick={() => {
              openDocument(note.name);
            }}
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              className="text-primary h-10 p-5"
            />
            <div className="flex flex-col  justify-center">
              <h1 className="px-3 py-2 text-primary-dark">
                {note.name + " | module-" + note.moduleNo}
              </h1>
              <h5 className="px-3 text-xs text-primary-dark">
                {"uploaded by " + note.uploaderName}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllNotes;
