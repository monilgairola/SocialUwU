import React from "react";
import "./RightSidebarDark.css";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RightSidebarDark = () => {
  const navigate = useNavigate();
  return (
    <div className="rightsidebardark">
      <Tooltip title="Creator of this shit">
        <div className="profile" style={{
          cursor: "pointer"
        }}>
          <div className="profile-img">
            <img
              src="/catboi.jpeg"
              alt=""
            />
          </div>
          <div className="stuff">
            <h4 style={{
              color: "white"
            }}>Painman</h4>
            <p style={{
              color: "white"
            }}>@painman</p>
          </div>
        </div>
      </Tooltip>
      <div className="sidebardark">
        {window.location.href === "https://socialuwu.netlify.app/" ? (
          <div className="sidebar-item home-sidebar-active">
            <span>
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </div>
        ) : (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate("/");
            }}
          >
            <span>
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </div>
        )}
        {window.location.href === "https://socialuwu.netlify.app/explore" ? (
          <div className="sidebar-item explore-sidebar-active">
            <span>
              <i className="uil uil-compass"></i>
            </span>
            <h3>Explore</h3>
          </div>
        ) : (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate("/explore");
            }}
          >
            <span>
              <i className="uil uil-compass"></i>
            </span>
            <h3>Explore</h3>
          </div>
        )}
        {window.location.href ===
          "https://socialuwu.netlify.app/notifications" ? (
          <div className="sidebar-item notification-sidebar-active">
            <span>
              <i className="uil uil-bell"></i>
            </span>
            <h3>Notifications</h3>
          </div>
        ) : (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <span>
              <i className="uil uil-bell"></i>
            </span>
            <h3>Notifications</h3>
          </div>
        )}
        {window.location.href === "https://socialuwu.netlify.app/bookmarks" ? (
          <div className="sidebar-item bookmarks-sidebar-active">
            <span>
              <i className="uil uil-bookmark"></i>
            </span>
            <h3>Bookmarks</h3>
          </div>
        ) : (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate("/bookmarks");
            }}
          >
            <span>
              <i className="uil uil-bookmark"></i>
            </span>
            <h3>Bookmarks</h3>
          </div>
        )}
        {window.location.href === "https://socialuwu.netlify.app/settings" ? (
          <div className="sidebar-item settings-sidebar-active">
            <span>
              <i className="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </div>
        ) : (
          <div
            className="sidebar-item"
            onClick={() => {
              navigate("/settings");
            }}
          >
            <span>
              <i className="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </div>
        )}
      </div>
      <p className="createpostbutton">Create Post</p>
    </div>
  );
};

export default RightSidebarDark;
