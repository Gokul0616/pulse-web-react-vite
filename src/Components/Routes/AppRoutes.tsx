import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "../Authpage/Authpage";
import Index from "..";
import MessageComponent from "../Message/MessageList";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Index />} />
        <Route path="/message" element={<MessageComponent />} />
        <Route path="*" element={<AuthPage />} /> */}
        <Route path="/" element={<Index />} />
        <Route path="/message" element={<MessageComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
