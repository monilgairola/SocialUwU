import React, { useEffect, useState } from "react";
import "./LeftSidebarDark.css";
import axios from "axios"
import { Avatar, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSidebarDark = () => {
  const [loading, setloading] = useState(true)
  const [profileToFollow, setprofileToFollow] = React.useState([])
  const navigate = useNavigate()
  //@ts-ignore
  const token = JSON.parse(localStorage.getItem("token"));
  //@ts-ignore  
  const tokenboi = token?.token
  useEffect(() => {
    axios.get("https://socialuwu.herokuapp.com/api/users/whotofollow", {
      headers: {
        "token": tokenboi
      }
    }).then(res => {
      setprofileToFollow(res.data)
      setloading(false)
    })
  }, [axios])
  const profileRedirect = (id: any) => {
    navigate(`/profile/${id}`)
  }
  const { authData } = useSelector((user: any) => user.user);
  return (
    <div className="leftsidebarfollowdark">
      <div className="whotofollowdark">
        <div className="upper">
          <h2>Who to follow</h2>
          <h3>View more</h3>
        </div>
        <div className="body">
          {loading ? <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <CircularProgress />
            <CircularProgress />
            <CircularProgress />
          </div> :
            profileToFollow?.map((profile: any) => (
              <div className="idiots">
                <div className="idiotinfo">
                  <Avatar src="" alt="" sx={{
                    width: 43,
                    height: 43
                  }} onClick={() => { profileRedirect(profile?._id) }} />
                  <p>{profile?.username?.length > 4 ? profile?.username?.slice(0, 5) + "..." : profile?.username}</p>
                </div>
                <p className="follow" onClick={() => { profileRedirect(profile?._id) }}>{profile?.followers?.includes(authData?._id) ? "Unfollow" : "Follow"}</p>
              </div>
            ))}
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
