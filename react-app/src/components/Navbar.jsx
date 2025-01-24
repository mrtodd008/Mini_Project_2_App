import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#007bff" }}>
      <Toolbar>
        {/* Logo or App Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          as={Link}
          to="/"
        >
          My App
        </Typography>

        {/* Desktop Links */}
        <div className="desktop-links" style={{ display: "flex", gap: "20px" }}>
          <Typography
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/events"
            style={{ textDecoration: "none", color: "white" }}
          >
            Events
          </Typography>
          <Typography
            component={Link}
            to="/profile"
            style={{ textDecoration: "none", color: "white" }}
          >
            Profile
          </Typography>
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
            Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/admin">
            Admin
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
