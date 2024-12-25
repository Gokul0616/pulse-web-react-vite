import React, { useState } from "react";
import { Home, Group, Subscriptions, Search } from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("For You");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="menu-container">
        <ul className="menu">
          <li>
            <a
              href="#"
              className={activeLink === "For You" ? "active" : ""}
              onClick={() => handleLinkClick("For You")}
            >
              <Home className="icon" /> For You
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "Following" ? "active" : ""}
              onClick={() => handleLinkClick("Following")}
            >
              <Group className="icon" /> Following
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "Subscribed" ? "active" : ""}
              onClick={() => handleLinkClick("Subscribed")}
            >
              <Subscriptions className="icon" /> Subscribed
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "Discover" ? "active" : ""}
              onClick={() => handleLinkClick("Discover")}
            >
              <Search className="icon" /> Discover
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-tab-bar-container">
        <div className="bottom-tab-bar">
          <a
            href="#"
            className={activeLink === "For You" ? "active" : ""}
            onClick={() => handleLinkClick("For You")}
          >
            <Home className="icon" />
            <span>For You</span>
          </a>
          <a
            href="#"
            className={activeLink === "Following" ? "active" : ""}
            onClick={() => handleLinkClick("Following")}
          >
            <Group className="icon" />
            <span>Following</span>
          </a>
          <a
            href="#"
            className={activeLink === "Subscribed" ? "active" : ""}
            onClick={() => handleLinkClick("Subscribed")}
          >
            <Subscriptions className="icon" />
            <span>Subscribed</span>
          </a>
          <a
            href="#"
            className={activeLink === "Discover" ? "active" : ""}
            onClick={() => handleLinkClick("Discover")}
          >
            <Search className="icon" />
            <span>Discover</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
