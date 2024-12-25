import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Menu/Sidebar";
import SubscribedAccountsSidebar from "./SubscribedAccount/SubscribedAccountsSidebar";
import CurrentPostSidebar from "./CurrentPostSidebar/CurrentPostSidebar";
import CurrentPostComments from "./CurrentPostComments/CurrentPostComments";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <SubscribedAccountsSidebar />
      <CurrentPostSidebar />
      <CurrentPostComments />
    </>
  );
};

export default Index;
