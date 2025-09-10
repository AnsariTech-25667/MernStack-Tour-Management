import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout(); // call parent logout logic (e.g., clear token)
    navigate("/"); // redirect to home
  };

  return (
    <AppBar position="static" color="default" sx={{ mb: 3 }}>
      <Toolbar>
        {/* App Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: "none" }}
          component={Link}
          to="/"
        >
          Tour Management
        </Typography>

        {/* Links */}
        <Button component={Link} to="/">
          Home
        </Button>

        {user ? (
          <>
            <Button component={Link} to="/bookings">
              My Bookings
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/login">
              Login
            </Button>
            <Button component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
