import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://res.cloudinary.com/do4v7miwh/image/upload/v1683219458/MiniProjects/Netflix/Netflix_Logo_PMS_bgqbne.png"
            alt="logo"
            className="logo"
          />
          <span className="nav-link">HomePage</span>
          <span className="nav-link">Series</span>
          <span className="nav-link">Movies</span>
          <span className="nav-link">New and Popular</span>
          <span className="nav-link">My List</span>
        </div>
        <div className="right">
          <SearchIcon className="navbar-icon" />
          <span className="kid-button">KID</span>
          <NotificationsNoneIcon className="navbar-icon" />
          <img
            src="https://res.cloudinary.com/do4v7miwh/image/upload/v1683367111/MiniProjects/Netflix/AAAABZ2iWyDq0fR9TY_uztNZ4TcwWkPPdS2NdTtUt3EHjC_rkiEAexSxSUfbrAYTaiI5pcHVs5QMIAhgo1tVaDJr67VjRcr_ZCw_sjp2ag.png"
            alt="userProfile"
            className="user-profile"
          />
          <div className="profile">
            <ArrowDropDownIcon className="navbar-icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
