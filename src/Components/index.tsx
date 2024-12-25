import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

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
    </>
  );
};

export default Index;
