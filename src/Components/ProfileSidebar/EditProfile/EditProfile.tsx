import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    bio: "",
    email: "",
    profileUrl: "",
    likesCount: 0,
    followersCount: 0,
    followingCount: 0,
  });

  const [originalUsername, setOriginalUsername] = useState<string>("");
  const [usernameAvailable, setUsernameAvailable] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ username?: string }>({});
  console.log(profileData.profileUrl);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "username" && value !== originalUsername) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/userAuth/checkUsername`,
          value
        );
        setUsernameAvailable(response.data);

        if (!response.data) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: "Username already exists",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: "",
          }));
        }
      } catch (error: any) {
        if (error.response?.status === 400) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: error.response.data,
          }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.username) return;

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/userAuth/user/update`,
        {
          username: profileData.username,
          email: profileData.email,
          name: profileData.name,
          profileUrl: profileData.profileUrl,
          bio: profileData.bio,
          likesCount: profileData.likesCount,
          followersCount: profileData.followersCount,
          followingCount: profileData.followingCount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

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
        setProfileData(response.data);
        setOriginalUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        axios
          .post(`${import.meta.env.VITE_API_URL}/upload/image`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            setProfileData((prevData) => ({
              ...prevData,
              profileUrl: response.data,
            }));
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
            alert("Image upload failed");
          });
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image");
      }
    }
  };

  return (
    <div className="editProfile-container">
      <div className="editProfile-header">
        <button
          onClick={() => navigate("/profile")}
          className="editprofile-back-button"
        >
          {"<"} Back
        </button>
        <h2>Edit Profile</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="editProfile-avatar">
          <img
            className="editProfile-avatar-image"
            src={
              profileData.profileUrl
                ? profileData.profileUrl
                : "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
            }
            alt="Profile"
          />
          <div className="editProfile-camera-overlay">
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="file-input" className="editProfile-camera-icon">
              <img
                className="editProfile-camera-icon"
                src="https://cdn-icons-png.flaticon.com/128/45/45010.png"
                alt="Edit Icon"
              />
            </label>
          </div>
        </div>
        <div className="editProfile-field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="editProfile-field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={profileData.username || ""}
            disabled
            onChange={handleInputChange}
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
        </div>
        <div className="editProfile-field">
          <label>Bio</label>
          <input
            type="text"
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="editProfile-save-btn"
          disabled={
            !usernameAvailable && profileData.username !== originalUsername
          }
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
