import React, { useState } from "react";
import AllNotes from "./DashboardPages/AllNotes";
import NotesPage from "./DashboardPages/NotesPage";
import TeacherPanel from "./DashboardPages/TeacherPanel";
import Circulars from "./DashboardPages/Circulars";
import Contacts from "./DashboardPages/Contacts";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(<NotesPage />);
  const handlePages = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        setCurrentPage(<NotesPage />);
        break;
      case 1:
        setCurrentPage(<AllNotes />);
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
    <div className="flex flex-col h-screen  sm:flex-row m-0">
      <div className="hidden sm:contents">
        <Navbar handlePage={handlePages} />
      </div>
      <div className="flex flex-col items-center justify-center m-auto">
        {currentPage}
      </div>
      <div className="contents sm:hidden">
        <MobileNavbar handlePage={handlePages} />
      </div>
    </div>
  );
};

export default Dashboard;
