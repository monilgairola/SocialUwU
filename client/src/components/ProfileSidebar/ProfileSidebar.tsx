import React from "react";
import "./ProfileSidebar.css";
import { Avatar, Tooltip, Button } from "@mui/material";

const ProfileSidebar = () => {
  return (
    <div className="profilesidebar">
      <div className="profilesidebarboi">
        <div className="body">
          <div className="stuff">
            <Tooltip title="Varun" arrow>
              <Avatar
                alt=""
                style={{
                  cursor: "pointer",
                  height: "12rem",
                  width: "12rem",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                }}
              />
            </Tooltip>
            <h1>Varun</h1>
            <p>
              Proffesional dumbass :) idiot piece of shit and many more stuff
              lol lol lol
            </p>
            <div className="stats">
              <div>
                <h6>Followers</h6>
                <p>69</p>
              </div>
              <div>
                <h6>Following</h6>
                <p>420</p>
              </div>
            </div>
            <div className="buttons">
              <Button variant="outlined">Follow</Button>
              <Button variant="outlined">Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
