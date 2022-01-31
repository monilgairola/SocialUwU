import React, { useEffect } from "react";
import MiddleStuff from "../../components/MiddleStuff/MiddleStuff";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Explore.css";

const Explore = () => {
  useEffect(() => {
    document.title = "SocialUwU - Explore";
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <RightSidebar />
          <MiddleStuff />
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
};

export default Explore;
