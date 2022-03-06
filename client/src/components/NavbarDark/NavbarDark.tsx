import "./NavbarDark.css";
import React from "react";
import { Avatar, Tooltip, Menu, MenuItem, IconButton, Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  return (
    <nav className="navbarboidark">
      <div className="containerdark">
        <h2 className="logodark">SocialUwU</h2>
        <div className="searchbar">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search shit ..." />
        </div>
        <div className="leftstuffdark">
          <p className="create-btn">Create</p>
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
    </nav>
  );
};

export default NavbarDark;
