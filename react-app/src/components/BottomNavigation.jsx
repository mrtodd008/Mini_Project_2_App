import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 0) navigate("/");
        if (newValue === 1) navigate("/events");
        if (newValue === 2) navigate("/profile");
      }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#007bff",
        color: "#fff",
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Events" icon={<EventIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
