import React, { useState, useEffect } from "react";
import "./Profile.css";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { get_user_by_id } from "../../actions/user";
import NavbarDark from "../../components/NavbarDark/NavbarDark";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebarDark from "../../components/RightSidebarDark/RightSidebarDark";
import RightSidebar from "../../components/Sidebar/RightSidebar";
import ProfileMiddleStuffDark from "../../components/ProfileMiddleStuffDark/ProfileMiddleStuffDark";
import ProfileMiddleStuff from "../../components/ProfileMiddleStuff/ProfileMiddleStuff";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [theme, setTheme] = useState<string>("");
  useEffect(() => {
    const themeboi = localStorage.getItem("theme");
    if (!themeboi) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(themeboi);
    }
  }, []);
  useEffect(() => {
    document.title = "SocialUwU - Profile";
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#272729" : "#dae0e6";
  }, [theme]);
  useEffect(() => {
    let token = [];
    try {
      //@ts-ignore
      token = JSON.parse(localStorage.getItem("token"));
    } catch (error) {
      localStorage.removeItem("token");
      window.location.href = "/auth";
    }
    if (!token) {
      navigate("/auth");
    } else {
      const tokenboi = token?.token;
      const userinfo = jwt_decode(tokenboi);
      //@ts-ignore
      dispatch(get_user_by_id(userinfo?.user?._id, navigate));
    }
  }, [navigate, dispatch]);
  return (
    <div>
      {theme === "dark" ? <NavbarDark /> : <Navbar />}
      <main>
        <div className="container">
          {theme === "dark" ? <RightSidebarDark /> : <RightSidebar />}
          {theme === "dark" ? (
            <ProfileMiddleStuffDark />
          ) : (
            <ProfileMiddleStuff />
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
