import { Avatar, IconButton, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./FeedDark.css";
import { format } from "timeago.js"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deletePost, likePost, updatePost } from "../../actions/posts"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button"
import Checkbox from '@mui/material/Checkbox';
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';

type Props = {
  posts: any,
}

type UserType = {
  username: string
  email: string
  _id: number
}

const FeedDark = (props: Props) => {
  const dispatch = useDispatch()
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
  const userboi = useSelector((user: any) => user?.user?.authData);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //@ts-ignore
  const token = JSON.parse(localStorage.getItem("token"));
  //@ts-ignore  
  const tokenboi = token?.token

  const deletePostboi = () => {
    handleClose()
    dispatch(deletePost(props?.posts?._id, tokenboi))
  }
  const [openreport, setOpenreport] = React.useState(false);

  const handleClickOpenreport = () => {
    setOpenreport(true);
  };

  const handleClosereport = () => {
    setOpenreport(false);
  };

  const reportPost = () => {
    handleClosereport()
    toast.success("Post Reported", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  const likePostBoi = () => {
    dispatch(likePost(props?.posts?._id, tokenboi))
  }

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenUpdate = () => {
    handleClose()
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const Input = styled('input')({
    display: 'none',
  });

  const [postDataUpdate, setPostDataUpdate] = useState({
    caption: props?.posts?.caption,
    image: props?.posts?.image
  })

  //@ts-ignore
  const imageUpload = (e) => {
    //@ts-ignore
    const data = new FormData()
    data.append("file", e?.target?.files[0])
    data.append("upload_preset", "socialuwu")
    data.append("cloud_name", "painmanbrand")
    fetch("https://api.cloudinary.com/v1_1/painmanbrand/image/upload", {
      method: "POST",
      body: data
    }).then(res => res.json())
      .then(data => {
        setPostDataUpdate({ ...postDataUpdate, image: data?.url })
      })
      .catch(err => console.log(err))
  }

  const updatePostBoi = () => {
    dispatch(updatePost(postDataUpdate, tokenboi, props?.posts?._id))
  }

  return (
    <>
      <div className="feeddark">
        <div className="header">
          <div className="user" style={{
            gap: "9px"
          }}>
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
          {props?.posts?.userId === userboi?._id ? <span className="edit" onClick={handleClick}>
            <i className="uil uil-ellipsis-v"></i>
          </span> : ""}
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
              <span onClick={likePostBoi}>
                {props?.posts?.likes.includes(userboi?._id) ? <i className="material-icons" style={{
                  fontSize: "1.3rem"
                }}>
                  favorite
                </i> : <i className="uil uil-heart"></i>}
              </span>
              <p style={{
                color: "white",
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
                color: "white",
                fontSize: "16px"
              }}>{props?.posts?.comments?.length}</p>
            </div>
            <span onClick={handleClickOpenreport}>
              <i className="uil uil-megaphone"></i>
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
      {/* edit delete menu  */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickOpenUpdate} style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <i className="uil uil-edit" style={{
            fontSize: "1.2rem",
            color: "#1d94d6"
          }}></i>
          <p style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#1d94d6"
          }}>Edit Post</p>
        </MenuItem>
        <MenuItem onClick={deletePostboi} style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}>
          <i className="uil uil-trash-alt" style={{
            fontSize: "1.2rem",
            color: "#d74545"
          }}></i>
          <p style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#d74545"
          }}>Delete Post</p>
        </MenuItem>
      </Menu>
      {/* report dialog */}
      <Dialog
        open={openreport}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Report Post"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            flexDirection: "column"
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <p>He/She copied my post :uganda:</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox defaultChecked disabled />
              <p>Shit post</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <p>Siuuuuuuuuuuuuuuu</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <p>Wait you dont know what karlson is ?</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <p>Idk what i am doing with my lyfe help</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosereport}>Close</Button>
          <Button onClick={reportPost}>
            Report
          </Button>
        </DialogActions>
      </Dialog>
      {/* update post dialog */}
      <Dialog
        open={openUpdate}
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
          }}>Update Post</p>
          <IconButton onClick={handleCloseUpdate}>
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
              setPostDataUpdate({ ...postDataUpdate, caption: e.target.value })
            }}
            defaultValue={postDataUpdate?.caption}
          />
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" type="file" onChange={imageUpload} />
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
          {postDataUpdate?.image ? <img src={postDataUpdate?.image} alt="" style={{
            width: "100%",
            height: "auto",
          }} /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {postDataUpdate?.image === "" ? <Button disabled>
            Update
          </Button> : <Button onClick={updatePostBoi}>
            Update
          </Button>}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedDark;
