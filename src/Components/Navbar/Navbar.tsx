import React, { useRef } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/add-post");
  };

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
  // if (activeLink == "Add-Post") {
  //   return null;
  // }
  return (
    <header>
      <div className="header-container">
        <div className="logo" onClick={() => navigation("/")}>
          Pulse
        </div>
        <div className="icons">
          <div className="icon">
            <div title="Add Post" className="message" onClick={handleClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3161/3161837.png"
                alt="add-post"
              />
            </div>
          </div>
          <div className="icon">
            <div
              className="message"
              title="Message"
              onClick={() => {
                navigation("/message");
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3024/3024593.png"
                alt="message"
              />
            </div>
            <div className="message-count">1</div>
          </div>

          <div className="icon profile-icon-navbar">
            <div
              title="Settings"
              onClick={() => {
                console.log("clicked");
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png"
                alt="Settings"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
