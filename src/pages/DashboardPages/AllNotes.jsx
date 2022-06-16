import { useState, useEffect } from "react";
import { firestore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    const ref = collection(firestore, "notes");
    const getNotes = async () => {
      const data = await getDocs(ref);
      setNotesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary rounded-t-lg p-8 m-5 w-full font-mono">
      {notesList.map((note) => {
        const date = Date(note.dateModified);
        return (
          <div
            className="flex row bg-white rounded-md shadow-md p-3 m-2 w-full"
            // onClick={() => {
            //   onClickUrl(pdfUrl+note.);
            // }}
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
                {date + " | uploaded by " + note.uploaderName}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllNotes;
