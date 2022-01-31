import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./BookMarks.css";
import BookMarksMiddleStuff from "../../components/BookMarksMiddleStuff/BokkMarksMiddleStuff";

const BookMarks = () => {
  useEffect(() => {
    document.title = "SocialUwU - BookMarks";
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <RightSidebar />
          <BookMarksMiddleStuff />
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
};

export default BookMarks;
