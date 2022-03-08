import React, { useState, useEffect } from "react";
import "./RightSidebar.css";
import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createPost } from "../../actions/posts";
import { useDispatch } from "react-redux";

const RightSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Input = styled('input')({
    display: 'none',
  });

  const [postData, setPostData] = useState({
    caption: "",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1"
  })

  //@ts-ignore
  const imageUpload = (e) => {
  }

  //@ts-ignore
  const token = JSON.parse(localStorage.getItem("token"));
  //@ts-ignore  
  const tokenboi = token?.token

  const createPostboi = () => {
    handleClose()
    dispatch(createPost(postData, tokenboi))
  }


  return (
    <div className="rightsidebar">
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
            <h4>Painman</h4>
            <p>@painman</p>
          </div>
        </div>
      </Tooltip>
      <div className="sidebar">
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
      <p className="createpostbutton" onClick={handleClickOpen}>Create Post</p>
      {/* create post modal */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <p style={{
            color: "black",
            fontSize: "1.4rem",
            fontWeight: "bold"
          }}>Create Post</p>
          <IconButton onClick={handleClose}>
            <i className="uil uil-multiply"></i>
          </IconButton>
        </DialogTitle>
        <DialogContent style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
          gap: "1rem"
        }}>
          <TextField
            id="outlined-textarea"
            placeholder="Caption ..."
            multiline
            rows={4}
            sx={{
              width: "540px"
            }}
            onChange={(e) => {
              setPostData({ ...postData, caption: e.target.value })
            }}
          />
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" type="file" onChange={imageUpload} />
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
          {postData?.image ? <img src={postData?.image} alt="" style={{
            width: "100%",
            height: "auto",
          }} /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {postData?.image && postData?.caption?.trim()?.length > 5 && postData?.caption?.trim()?.length < 100 ? <Button onClick={createPostboi}>
            Create
          </Button> : <Button disabled>
            Create
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RightSidebar;
