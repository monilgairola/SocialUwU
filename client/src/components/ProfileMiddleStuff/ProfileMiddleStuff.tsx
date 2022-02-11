import React from "react";
import "./ProfileMiddleStuff.css";
import Feed from "../Feed/Feed";

const ProfileMiddleStuff = () => {
  return (
    <div>
      <div className="feeds">
        <Feed />
        <Feed />
      </div>
    </div>
  );
};

export default ProfileMiddleStuff;
