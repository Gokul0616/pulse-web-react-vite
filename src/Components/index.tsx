import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SideMenubar from "./Menu/SideMenubar";
import SubscribedAccountsSidebar from "./SubscribedAccount/SubscribedAccountsSidebar";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";
import CentralPost from "./CentralPost/CentralPost";
import axios from "axios";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/userAuth/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data == null) {
        navigate("/");
      }
      if (response.data != null) {
        navigate("/home");
      }
    };

    fetchData();
  }, [navigate]);
  return (
    <>
      <Navbar />
      <SideMenubar />
      <SubscribedAccountsSidebar />
      <CentralPost />
      <ProfileSidebar />
    </>
  );
};

export default Index;
