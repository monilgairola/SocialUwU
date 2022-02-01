import React from "react";
import "./LeftSidebarDark.css";

const LeftSidebarDark = () => {
  return (
    <div className="leftsidebarfollowdark">
      <div className="whotofollowdark">
        <div className="upper">
          <h2>Who to follow</h2>
          <h3>View more</h3>
        </div>
        <div className="body">
          <div className="idiots">
            <div className="idiotinfo">
              <img
                alt=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1"
              />
              <p>Varun</p>
            </div>
            <p className="follow">Follow</p>
          </div>
          <div className="idiots">
            <div className="idiotinfo">
              <img
                alt=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1"
              />
              <p>Varun</p>
            </div>
            <p className="follow">Follow</p>
          </div>
          <div className="idiots">
            <div className="idiotinfo">
              <img
                alt=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1"
              />
              <p>Varun</p>
            </div>
            <p className="follow">Follow</p>
          </div>
        </div>
      </div>
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
