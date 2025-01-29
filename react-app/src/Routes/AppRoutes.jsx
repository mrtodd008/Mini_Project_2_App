import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import EditProfile from "../Pages/EditProfile";
import Notifications from "../Pages/Notifications";
import Chat from "../Pages/Chat";
import AdminDashboard from "../Pages/AdminDashboard";
import ManageUsers from "../Pages/ManageUsers.jsx";
import ViewEvents from "../Pages/ViewEvents";
import ViewMessages from "../Pages/ViewMessages.jsx";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Home {...props} />} />
      <Route path="/events" element={<Events />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/events" element={<ViewEvents />} />
      <Route path="/admin/messages" element={<ViewMessages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default AppRoutes;
