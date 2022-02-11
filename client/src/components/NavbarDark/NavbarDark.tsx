import "./NavbarDark.css";
import React from "react";
import { Avatar, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

const NavbarDark: React.FC = () => {
  const userboi = useSelector((user: any) => user.user);
  const user = userboi?.authData;
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
          <Tooltip arrow title={user?.username}>
            <Avatar alt="" sx={{ width: 46, height: 46, cursor: "pointer" }} />
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDark;
