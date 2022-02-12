import React from "react";
import "./ProfileSidebar.css";
import { Avatar, Tooltip, Button } from "@mui/material";
import { useSelector } from "react-redux";

interface Shit {
  profileData: any;
}

const ProfileSidebar = (props: Shit) => {
  const profileData = props.profileData;
  const { authData } = useSelector((user: any) => user.user);
  return (
    <div className="profilesidebar">
      <div className="profilesidebarboi">
        <div className="body">
          <div className="stuff">
            <Tooltip title={profileData?.username} arrow>
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
            <h1>{profileData?.username}</h1>
            <p>{profileData?.bio}</p>
            <div className="stats">
              <div>
                <h6>Followers</h6>
                <p>{profileData?.followers?.length}</p>
              </div>
              <div>
                <h6>Following</h6>
                <p>{profileData?.following?.length}</p>
              </div>
            </div>
            {authData?._id === profileData?._id ? (
              <div className="buttons">
                <Button variant="outlined">Update Profile</Button>
              </div>
            ) : (
              <div className="buttons">
                <Button variant="outlined">Follow</Button>
                <Button variant="outlined">Message</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
