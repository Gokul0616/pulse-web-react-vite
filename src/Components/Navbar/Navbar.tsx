import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="logo">Pulse</div>
        <div className="icons">
          <div className="icon">
            <div
              className="message"
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
