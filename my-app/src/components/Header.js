import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;