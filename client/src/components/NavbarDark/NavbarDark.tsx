import "./NavbarDark.css";
import React, { useEffect, useState } from "react";
import { Avatar, Tooltip, Menu, MenuItem, IconButton, Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createPost } from "../../actions/posts";

const NavbarDark: React.FC = () => {
  const navigate = useNavigate();
  const userboi = useSelector((user: any) => user.user);
  const user = userboi?.authData;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    handleClose();
    navigate("/auth");
    dispatch({
      type: "LOGOUT",
    });
  };
  const profileRedirect = () => {
    navigate(`/profile/${user?._id}`);
    handleClose();
  };

  const [opencreate, setOpencreate] = React.useState(false);

  const handleClickOpencreate = () => {
    setOpencreate(true);
  };

  const handleClosecreate = () => {
    setOpencreate(false);
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
    handleClosecreate()
    dispatch(createPost(postData, tokenboi))
  }

  return (
    <nav className="navbarboidark">
      <div className="containerdark">
        <h2 className="logodark">SocialUwU</h2>
        <div className="searchbar">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search shit ..." />
        </div>
        <div className="leftstuffdark">
          <p className="create-btn" onClick={handleClickOpencreate}>Create</p>
          {user ? <Tooltip arrow title={user?.username}>
            <IconButton
              onClick={handleClick}
              sx={{
                padding: "2px",
              }}
            >
              <Avatar
                alt=""
                sx={{
                  width: 45,
                  height: 45,
                }}
              />
            </IconButton>
          </Tooltip> : <Skeleton animation="wave" variant="circular" width={50} height={50} sx={{ bgcolor: 'grey.900' }} />}
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={profileRedirect}
          style={{
            fontSize: "1.2rem",
            display: "flex",
            gap: "0.4rem",
            fontWeight: "bold",
          }}
        >
          <i className="uil uil-user"></i>
          Profile
        </MenuItem>
        <MenuItem
          onClick={profileRedirect}
          style={{
            fontSize: "1.2rem",
            display: "flex",
            gap: "0.4rem",
            fontWeight: "bold",
          }}
        >
          <i className="uil uil-edit"></i>
          Update Profile
        </MenuItem>
        <MenuItem
          onClick={logout}
          style={{
            fontSize: "1.2rem",
            display: "flex",
            gap: "0.4rem",
            fontWeight: "bold",
          }}
        >
          <i className="uil uil-signout"></i>
          Logout
        </MenuItem>
      </Menu>
      {/* create post modal */}
      <Dialog
        open={opencreate}
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
          <IconButton onClick={handleClosecreate}>
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
          <Button onClick={handleClosecreate}>Close</Button>
          {postData?.image && postData?.caption?.trim()?.length > 5 && postData?.caption?.trim()?.length < 100 ? <Button onClick={createPostboi}>
            Create
          </Button> : <Button disabled>
            Create
          </Button>}
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default NavbarDark;
