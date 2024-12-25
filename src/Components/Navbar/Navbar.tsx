import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">Pulse</div>
        <input className="search-bar" type="text" placeholder="Search" />
        <div className="icons">
          <div className="icon">
            <div className="notification">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3024/3024593.png"
                alt="message"
              />
            </div>
            <div className="notification-count">1</div>
          </div>

          <div className="icon">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
