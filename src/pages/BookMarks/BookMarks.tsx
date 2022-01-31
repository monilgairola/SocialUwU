import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./BookMarks.css";
import BookMarksMiddleStuff from "../../components/BookMarksMiddleStuff/BokkMarksMiddleStuff";
import NavbarDark from "../../components/NavbarDark/NavbarDark";
import LeftSidebarDark from "../../components/LeftSidebarDark/LeftSidebarDark";

const BookMarks = () => {
  const [theme, setTheme] = useState<string>("");
  console.log(theme === "dark");
  useEffect(() => {
    const themeboi = localStorage.getItem("theme");
    if (!themeboi) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(themeboi);
    }
  }, []);
  useEffect(() => {
    document.title = "SocialUwU - BookMarks";
  }, []);
  return (
    <div>
      {theme === "dark" ? <NavbarDark /> : <Navbar />}
      <main>
        <div className="container">
          <RightSidebar />
          <BookMarksMiddleStuff />
          {theme === "dark" ? <LeftSidebarDark /> : <LeftSidebar />}
        </div>
      </main>
    </div>
  );
};

export default BookMarks;
