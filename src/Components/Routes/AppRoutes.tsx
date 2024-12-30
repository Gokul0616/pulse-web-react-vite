import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthPage from "../Authpage/Authpage";
import Index from "..";
import MessageComponent from "../Message/MessageList";
import ProfileScreen from "../ProfileSidebar/ProfileMobileScreen/ProfileScreen";
import SideMenubar from "../Menu/SideMenubar";
import Navbar from "../Navbar/Navbar";
import EditProfile from "../ProfileSidebar/EditProfile/EditProfile";
import axios from "axios";
import UploadPage from "../GeneralComponents/UploadPaga/UploadPage";
interface UserData {
  name: string;
  profileUrl: string;
  username: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  llikesCount: number;
}
const AppRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const token = localStorage.getItem("token");

  const fallbackProfileUrl =
    "https://cdn-icons-png.flaticon.com/128/1077/1077114.png";

  const profileData = {
    avatar: userData?.profileUrl || fallbackProfileUrl,
    fullname: userData?.name || "John Doe",
    username: userData?.username || "username",
    bio: userData?.bio || "No bio available",
    followers: userData?.followersCount || 0,
    following: userData?.followingCount || 0,
    likes: userData?.llikesCount || 0,
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/userAuth/user`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setUserData(response.data);

  //     if (response.data) {
  //       setIsAuthenticated(true);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //   } catch (error) {
  //     console.error("Authentication error:", error);
  //     setIsAuthenticated(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Index />} />

        {/* {isAuthenticated && ( */}

        <Route path="/home" element={<Index />} />
        <Route path="/message" element={<MessageComponent />} />
        <Route path="/add-post" element={<UploadPage />} />
        <Route path="/profile" element={<ProfileScreen {...profileData} />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<AuthPage />} />

        {/* )} */}
        <Route path="*" element={<AuthPage />} />
      </Routes>

      {/* {isAuthenticated && ( */}
      <>
        <Navbar />
        <SideMenubar />
      </>
      {/* )} */}
    </Router>
  );
};


export default AppRoutes;
