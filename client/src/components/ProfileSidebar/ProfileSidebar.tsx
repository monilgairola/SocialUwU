import React from "react";
import "./ProfileSidebar.css";
import { Avatar, Tooltip, Button, IconButton, TextField, Skeleton } from "@mui/material";
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
            {profileData ? <Tooltip title={profileData?.username} arrow>
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
            </Tooltip> : <Skeleton animation="wave" variant="circular" width={200} height={200} />}
            {profileData ? <h1>{profileData?.username}</h1> : <Skeleton animation="wave" variant="text" width={140} height={30} style={{
              marginTop: "5px"
            }} />}
            {profileData ? <p>{profileData?.bio}</p> : <Skeleton animation="wave" variant="text" width={190} height={40} style={{
              marginTop: "5px"
            }} />}
            <div className="stats">
              <div>
                {profileData ? <h6>Followers</h6> : <Skeleton animation="wave" variant="text" width={90} height={20} style={{
                  marginTop: "5px"
                }} />}
                {profileData ? <p>{profileData?.followers?.length}</p> : <Skeleton animation="wave" variant="text" width={50} height={20} style={{
                  marginTop: "5px"
                }} />}
              </div>
              <div>
                {profileData ? <h6>Following</h6> : <Skeleton animation="wave" variant="text" width={90} height={20} style={{
                  marginTop: "5px"
                }} />}
                {profileData ? <p>{profileData?.following?.length}</p> : <Skeleton animation="wave" variant="text" width={50} height={20} style={{
                  marginTop: "5px"
                }} />}
              </div>
            </div>
            {authData?._id === profileData?._id ? (
              <div className="buttons">
                {profileData ? <Button variant="outlined" onClick={handleClickOpen}>
                  Update Profile
                </Button> : <Skeleton animation="wave" variant="text" width={200} height={40} style={{
                  marginTop: "5px"
                }} />}
              </div>
            ) : (
              <div className="buttons">
                {profileData ? <Button variant="outlined">Follow</Button> : <Skeleton animation="wave" variant="text" width={100} height={40} style={{
                  marginTop: "5px"
                }} />}
                {profileData ? <Button variant="outlined">Message</Button> : <Skeleton animation="wave" variant="text" width={100} height={40} style={{
                  marginTop: "5px"
                }} />}
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
