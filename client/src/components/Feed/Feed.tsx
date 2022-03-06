import React, { useState, useEffect } from "react";
import { Avatar, Tooltip } from "@mui/material";
import "./Feed.css";
import { format } from "timeago.js"
import axios from "axios";
import { useNavigate } from "react-router-dom"

type Props = {
  posts: any,
}

type UserType = {
  username: string
  email: string
  _id: number
}

const Feed = (props: Props) => {
  const navigate = useNavigate();
  const [postUser, setPostUser] = useState<UserType>({
    username: "",
    email: "",
    _id: 0
  })
  useEffect(() => {
    axios.get(`https://socialuwu.herokuapp.com/api/users/getbyid/${props?.posts?.userId}`).then((response) => {
      setPostUser(response.data);
    })
  }, [axios])
  const profileRedirect = () => {
    navigate("/profile/" + postUser?._id);
  }
  return (
    <div className="feed">
      <div className="header">
        <div className="user">
          <div className="pfpboi">
            <Tooltip title={postUser?.username}>
              <Avatar src="" alt="" sx={{
                width: 48,
                height: 48,
                cursor: "pointer"
              }} onClick={profileRedirect} />
            </Tooltip>
          </div>
          <div className="userinfo">
            <h3>{postUser?.username}</h3>
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
          <div style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px"
          }}>
            <span>
              <i className="uil uil-heart"></i>
            </span>
            <p style={{
              color: "black",
              fontSize: "16px"
            }}>{props?.posts?.likes?.length}</p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px"
          }}>
            <span>
              <i className="uil uil-comment"></i>
            </span>
            <p style={{
              color: "black",
              fontSize: "16px"
            }}>{props?.posts?.comments?.length}</p>
          </div>
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

export default Feed;
