import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Menu/Sidebar";

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
    </>
  );
};

export default Index;
