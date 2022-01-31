import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SettingsMiddleStuff from "../../components/SettingsMiddleStuff/SettingsMiddleStuff";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Settings.css";

const Settings = () => {
  useEffect(() => {
    document.title = "SocialUwU - Settings";
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <RightSidebar />
          <SettingsMiddleStuff />
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
};

export default Settings;
