import React from "react";
import {
  Home,
  Group,
  Subscriptions,
  Search,
  Person2,
} from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import "./SideMenubar.css";

const SideMenubar: React.FC = () => {
  const location = useLocation();

  // Determine the active link based on the current path
  const getActiveLink = () => {
    switch (location.pathname) {
      case "/home":
        return "For You";
      case "/following":
        return "Following";
      case "/subscribed":
        return "Subscribed";
      case "/discover":
        return "Discover";
      case "/profile":
        return "Profile";
      case "/edit-profile":
        return "Profile";
      case "/message":
        return "Message";
      case "/add-post":
        return "Add-Post";
      default:
        return "For You";
    }
  };

  const activeLink = getActiveLink();
  if (activeLink == "Add-Post") {
    return null;
  }
  return (
    <>
      {activeLink == "Message" ? null : (
        <div className="menu-container">
          <ul className="menu">
            <li>
              <Link
                to="/home"
                className={activeLink === "For You" ? "active" : ""}
              >
                <Home className="icon" /> For You
              </Link>
            </li>
            <li>
              <Link
                to="/following"
                className={activeLink === "Following" ? "active" : ""}
              >
                <Group className="icon" /> Following
              </Link>
            </li>
            <li>
              <Link
                to="/subscribed"
                className={activeLink === "Subscribed" ? "active" : ""}
              >
                <Subscriptions className="icon" /> Subscribed
              </Link>
            </li>
            <li>
              <Link
                to="/discover"
                className={activeLink === "Discover" ? "active" : ""}
              >
                <Search className="icon" /> Discover
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={activeLink === "Profile" ? "active" : ""}
              >
                <Person2 className="icon" /> Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="bottom-tab-bar-container">
        <div className="bottom-tab-bar">
          <Link to="/home" className={activeLink === "For You" ? "active" : ""}>
            <Home className="icon" />
            <span>For You</span>
          </Link>
          <Link
            to="/following"
            className={activeLink === "Following" ? "active" : ""}
          >
            <Group className="icon" />
            <span>Following</span>
          </Link>
          <Link
            to="/subscribed"
            className={activeLink === "Subscribed" ? "active" : ""}
          >
            <Subscriptions className="icon" />
            <span>Subscribed</span>
          </Link>
          <Link
            to="/discover"
            className={activeLink === "Discover" ? "active" : ""}
          >
            <Search className="icon" />
            <span>Discover</span>
          </Link>
          <Link
            to="/profile"
            className={activeLink === "Profile" ? "active" : ""}
          >
            <Person2 className="icon" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideMenubar;
