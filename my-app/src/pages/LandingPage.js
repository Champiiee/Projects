import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  const body = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  };

  return (
    <div
      style={{
        ...body
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Our App
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Login
        </Button>
        <Button component={Link} to="/signup" variant="outlined" color="secondary">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;