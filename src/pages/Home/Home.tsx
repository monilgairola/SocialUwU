import React from "react";
import MiddleStuff from "../../components/MiddleStuff/MiddleStuff";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <RightSidebar />
          <MiddleStuff />
        </div>
      </main>
    </div>
  );
};

export default Home;
