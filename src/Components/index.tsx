import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SideMenubar from "./Menu/SideMenubar";
import SubscribedAccountsSidebar from "./SubscribedAccount/SubscribedAccountsSidebar";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";
import CentralPost from "./CentralPost/CentralPost";
import axios from "axios";
import ProfileScreen from "./ProfileSidebar/ProfileMobileScreen/ProfileScreen";
const Index = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   // const token2 = localStorage.removeItem("token");

  //   if (!token) {
  //     navigate("/");
  //     return;
  //   }

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/userAuth/user`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (response.status == 500) {
  //         navigate("/");
  //       }
  //       if (response.status == 401) {
  //         navigate("/");
  //       }
  //       if (response.data == null) {
  //         navigate("/");
  //       }
  //       if (response.data != null) {
  //         navigate("/home");
  //       }
  //     } catch (error) {
  //       navigate("/");
  //     }
  //   };

  //   fetchData();
  // }, [navigate]);

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
