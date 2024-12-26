import React from "react";
import { Avatar } from "@mui/material";
import {
  FavoriteBorder,
  ChatBubbleOutline,
  Repeat,
  Share,
  Visibility,
} from "@mui/icons-material";
import "./TweakComponent.css";

const TweakComponent = () => {
  return (
    <div className="tweak-component">
      <div className="tweak-header">
        <div className="user-info-container">
          <Avatar
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-image-tweakComponent"
          />
          <div className="user-info">
            <span className="fullname-tweakComponent">John Doe</span>
            <span className="username-tweakComponent">@johndoe</span>
          </div>
        </div>
        <div className="date-tweakComponent">Posted on 1/1/2023 </div>
      </div>
      <div className="tweak-content">
        <p>
          This is an example of a tweet-like component. It supports images,
          likes, shares, and other actions just like Twitter.
        </p>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Tweak Content"
          className="content-image"
        />
      </div>
      <div className="tweak-actions">
        <div className="action">
          <ChatBubbleOutline />
          <span>123</span>
        </div>
        <div className="action">
          <Repeat />
          <span>45</span>
        </div>
        <div className="action">
          <FavoriteBorder />
          <span>678</span>
        </div>
        <div className="action">
          <Share />
        </div>
        <div className="action">
          <Visibility />
          <span>10K</span>
        </div>
      </div>
    </div>
  );
};

export default TweakComponent;
