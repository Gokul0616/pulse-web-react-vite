import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileScreen.css";

interface Profile {
  avatar?: string;
  fullname: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
  likes: number;
  media?: { id: number; url: string; type: "image" | "video" }[];
}

const ProfileScreen: React.FC<Profile> = ({
  avatar,
  fullname,
  username,
  bio,
  followers,
  following,
  likes,
  media,
}) => {
  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="mobileProfile-screen">
      <div className="mobileProfile-header">
        <div className="mobileProfile-avatar">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="mobileProfile-avatar-img"
          />
        </div>
        <div className="mobileProfile-info">
          <h1 className="mobileProfile-fullname">{fullname}</h1>
          <h2 className="mobileProfile-username">@{username}</h2>
          <p className="mobileProfile-bio">{bio}</p>
        </div>
      </div>

      <div className="mobileProfile-stats">
        <div className="mobileProfile-stat">
          <p className="mobileProfile-stat-value">{followers}</p>
          <p className="mobileProfile-stat-label">Followers</p>
        </div>
        <div className="mobileProfile-stat">
          <p className="mobileProfile-stat-value">{following}</p>
          <p className="mobileProfile-stat-label">Following</p>
        </div>
        <div className="mobileProfile-stat">
          <p className="mobileProfile-stat-value">{likes}</p>
          <p className="mobileProfile-stat-label">Likes</p>
        </div>
      </div>

      <div className="edit-profile-btn-container">
        <button className="edit-profile-btn" onClick={handleEditProfileClick}>
          Edit Profile
        </button>
      </div>

      <hr className="mobileProfile-divider" />

      <div className="mobileProfile-media-grid">
        {media?.map((item) => (
          <div key={item.id} className="mobileProfile-media-item">
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={`Media ${item.id}`}
                className="mobileProfile-thumbnail"
              />
            ) : (
              <video
                src={item.url}
                className="mobileProfile-thumbnail"
                muted
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
