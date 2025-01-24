import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import UserProfile from "../Pages/UserProfile";
import Notifications from "../Pages/Notifications";
import Chat from "../Pages/Chat";
import AdminDashboard from "../Pages/AdminDashboard";
//import Login from "../Pages/Login";
import TwoFactorAuth from "../pages/TwoFactorAuth";
import Calendar from "../Pages/Calendar";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home {...props} />} />
      <Route path="/events" element={<Events />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/2fa" element={<TwoFactorAuth />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default AppRoutes;
