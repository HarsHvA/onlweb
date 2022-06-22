import React, { useState } from "react";
import { useLocation } from "react-router";
import AllNotes from "./DashboardPages/AllNotes";
import NotesPage from "./DashboardPages/NotesPage";
import TeacherPanel from "./DashboardPages/TeacherPanel";
import Circulars from "./DashboardPages/Circulars";
import Contacts from "./DashboardPages/Contacts";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      const uid = user.uid;
      navigate("/unauthorized", { state: { uid: uid } });
    }
  });
  const [currentPage, setCurrentPage] = useState(<AllNotes />);
  const { state } = useLocation();
  const { uid } = state;
  const handlePages = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        setCurrentPage(<AllNotes />);
        break;
      case 1:
        setCurrentPage(<NotesPage />);
        break;
      case 2:
        setCurrentPage(<TeacherPanel />);
        break;
      case 3:
        setCurrentPage(<Circulars />);
        break;
      case 4:
        setCurrentPage(<Contacts />);
        break;
      default:
        return <NotesPage />;
    }
  };
  return (
    <div className="flex flex-col h-screen items-center m-0">
      <div className="hidden sm:flex">
        <Navbar handlePage={handlePages} uid={uid} />
      </div>
      <div className="sm:hidden">
        <MobileNavbar handlePage={handlePages} uid={uid} />
      </div>

      <div className="flex flex-col items-center justify-center m-auto w-11/12">
        {currentPage}
      </div>
    </div>
  );
};

export default Dashboard;
