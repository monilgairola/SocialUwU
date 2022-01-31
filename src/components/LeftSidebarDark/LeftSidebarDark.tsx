import React from "react";
import "./LeftSidebarDark.css";

const LeftSidebarDark = () => {
  return (
    <div>
      <div className="topicsfollowdark">
        <div className="upper">
          <h2>Topics to follow</h2>
          <h3>More topics</h3>
        </div>
        <div className="tags-wrapper">
          <span className="tag">
            <small>Typescript</small>
          </span>
          <span className="tag">
            <small>Jaba</small>
          </span>
          <span className="tag">
            <small>Brainfck</small>
          </span>
          <span className="tag">
            <small>Javscript</small>
          </span>
          <span className="tag">
            <small>Shit</small>
          </span>
          <span className="tag">
            <small>VirginScript</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebarDark;