import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "../Authpage/Authpage";
import Index from "..";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Index />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
