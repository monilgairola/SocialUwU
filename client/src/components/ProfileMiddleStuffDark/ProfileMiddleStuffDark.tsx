import React from "react";
import "./ProfileMiddleStuffDark.css";
import FeedDark from "../FeedDark/FeedDark";

const ProfileMiddleStuffDark: React.FC = () => {
  return (
    <div>
      <div className="feeds">
        <FeedDark />
        <FeedDark />
      </div>
    </div>
  );
};

export default ProfileMiddleStuffDark;
