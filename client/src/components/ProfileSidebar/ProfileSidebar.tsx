import React from "react";
import "./ProfileSidebar.css";
import { Avatar, Tooltip, Button, IconButton, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Shit {
  profileData: any;
}

const ProfileSidebar = (props: Shit) => {
  const navigate = useNavigate();
  const profileData = props.profileData;
  const { authData } = useSelector((user: any) => user.user);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profilesidebar">
      <div className="profilesidebarboi">
        <div className="body">
          <div className="stuff">
            <Tooltip title={profileData?.username} arrow>
              <Avatar
                alt=""
                style={{
                  cursor: "pointer",
                  height: "12rem",
                  width: "12rem",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                }}
              />
            </Tooltip>
            <h1>{profileData?.username}</h1>
            <p>{profileData?.bio}</p>
            <div className="stats">
              <div>
                <h6>Followers</h6>
                <p>{profileData?.followers?.length}</p>
              </div>
              <div>
                <h6>Following</h6>
                <p>{profileData?.following?.length}</p>
              </div>
            </div>
            {authData?._id === profileData?._id ? (
              <div className="buttons">
                <Button variant="outlined" onClick={handleClickOpen}>
                  Update Profile
                </Button>
              </div>
            ) : (
              <div className="buttons">
                <Button variant="outlined">Follow</Button>
                <Button variant="outlined">Message</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Update Profile
          <IconButton onClick={handleClose}>
            <i className="uil uil-multiply"></i>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Bio"
              variant="outlined"
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              multiline
              rows={4}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileSidebar;
