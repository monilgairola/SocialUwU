import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NotificationsMiddleStuff from "../../components/NotificationsMiddleStuff/NotificationsMiddleStuff";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <RightSidebar />
          <NotificationsMiddleStuff />
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
};

export default Notifications;
