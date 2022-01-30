import React from "react";
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
        </div>
      </main>
    </div>
  );
};

export default Home;
