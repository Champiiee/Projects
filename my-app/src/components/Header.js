import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ color: "inherit", textDecoration: "none" }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;