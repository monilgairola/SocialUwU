import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import "./FeedDark.css";
import { format } from "timeago.js"

type Props = {
  posts: any,
}

const FeedDark = (props: Props) => {
  return (
    <div className="feeddark">
      <div className="header">
        <div className="user" style={{
          gap: "9px"
        }}>
          <div className="pfpboi">
            <Tooltip title="Idiot">
              <Avatar src="" alt="" sx={{
                width: 48,
                height: 48,
                cursor: "pointer"
              }} />
            </Tooltip>
          </div>
          <div className="userinfo">
            <h3>Idiot</h3>
            <small>{format(props?.posts?.createdAt)}</small>
          </div>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-v"></i>
        </span>
      </div>
      <div className="image">
        <img
          alt=""
          src={props?.posts?.image}
        />
      </div>
      <div className="buttons">
        <div className="rightbuttons">
          <span>
            <i className="uil uil-heart"></i>
          </span>
          <span>
            <i className="uil uil-comment"></i>
          </span>
          <span>
            <i className="uil uil-share-alt"></i>
          </span>
        </div>
        <div className="leftbuttons">
          <span>
            <i className="uil uil-bookmark"></i>
          </span>
        </div>
      </div>
      <div className="caption">
        <span>
          {props?.posts?.caption}
        </span>
      </div>
      <p className="viewcomments">View all comments</p>
    </div>
  );
};

export default FeedDark;
