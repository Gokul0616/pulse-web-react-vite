import React, { useState } from "react";
import "./CurrentPostSidebar.css";

interface Post {
  profileImage: string;
  fullName: string;
  username: string;
  description: string;
}

const currentPost: Post = {
  profileImage: "https://via.placeholder.com/50",
  fullName: "John Doe",
  username: "@johndoe",
  description:
    "This is a description of the current post. It gives more details about the post content. It goes on and explains more about the context and the meaning behind the post, providing a deeper understanding for the audience.",
};

const CurrentPostSidebar: React.FC = () => {
  const [isFullDescriptionVisible, setFullDescriptionVisible] = useState(false);

  const handleToggleDescription = () => {
    setFullDescriptionVisible(!isFullDescriptionVisible);
  };

  return (
    <div
      className={`current-post-sidebar ${
        isFullDescriptionVisible ? "zindex1" : ""
      }`}
    >
      <div className="profile-info">
        <img
          src={currentPost.profileImage}
          alt={`${currentPost.fullName}'s profile`}
          className="profile-image"
        />
        <div>
          <span className="full-name">{currentPost.fullName}</span>
          <span className="username">{currentPost.username}</span>
        </div>
      </div>
      <div className="post-description">
        <p className={isFullDescriptionVisible ? "full" : "truncated"}>
          {currentPost.description}
        </p>
        <button className="see-more-btn" onClick={handleToggleDescription}>
          {isFullDescriptionVisible ? "See Less" : "See More"}
        </button>
      </div>
      <div className="action-buttons">
        <button className="subscribe-button">Subscribe to Channel</button>
        <button className="follow-button">Follow</button>
      </div>
    </div>
  );
};

export default CurrentPostSidebar;
