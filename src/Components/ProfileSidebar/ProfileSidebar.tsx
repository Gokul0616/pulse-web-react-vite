import React, { useEffect, useState } from "react";
import "./ProfileSidebar.css";
import axios from "axios";

interface User {
  profileImage: string;
  name: string;
  username: string;
  followers: number;
  following: number;
  likes: number;
}

const ProfileSidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/userAuth/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userData = response.data;

        const fetchedUser: User = {
          profileImage:
            userData.profileImage || "https://via.placeholder.com/100",
          name: userData.name,
          username: `@${userData.username}`,
          followers: userData.followers || 0,
          following: userData.following || 0,
          likes: userData.likes || 0,
        };

        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <div className="profile-sidebar">
      {user ? (
        <>
          <div className="profile-info">
            <img
              src={user.profileImage}
              alt={`${user.name}'s profile`}
              className="profile-image-sidebar"
            />
            <div className="profile-details">
              <span className="full-name-sidebar">{user.name}</span>
              <span className="username-sidebar">{user.username}</span>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="stat-count">{user.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-count">{user.following}</span>
              <span className="stat-label">Following</span>
            </div>
            <div className="stat">
              <span className="stat-count">{user.likes}</span>
              <span className="stat-label">Likes</span>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileSidebar;
