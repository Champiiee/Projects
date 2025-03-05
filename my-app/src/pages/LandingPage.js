import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
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
    </div>
  );
}

export default LandingPage;