import React from "react";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="rightsidebar">
      <div className="profile">
        <div className="profile-img">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1"
            alt=""
          />
        </div>
        <div className="stuff">
          <h4>Varun</h4>
          <p>@varun</p>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-item sidebar-active">
          <span>
            <i className="uil uil-home"></i>
          </span>
          <h3>Home</h3>
        </div>
        <div className="sidebar-item">
          <span>
            <i className="uil uil-compass"></i>
          </span>
          <h3>Explore</h3>
        </div>
        <div className="sidebar-item">
          <span>
            <i className="uil uil-bell"></i>
          </span>
          <h3>Notifications</h3>
        </div>
        <div className="sidebar-item">
          <span>
            <i className="uil uil-bookmark"></i>
          </span>
          <h3>Boookmarks</h3>
        </div>
        <div className="sidebar-item">
          <span>
            <i className="uil uil-setting"></i>
          </span>
          <h3>Settings</h3>
        </div>
      </div>
      <p className="createpostbutton">Create Post</p>
    </div>
  );
};

export default RightSidebar;
