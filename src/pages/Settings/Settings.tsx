import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarDark from "../../components/NavbarDark/NavbarDark";
import SettingsMiddleStuff from "../../components/SettingsMiddleStuff/SettingsMiddleStuff";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Settings.css";

const Settings = () => {
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
    document.title = "SocialUwU - Settings";
  }, []);
  return (
    <div>
      {theme === "dark" ? <NavbarDark /> : <Navbar />}
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
