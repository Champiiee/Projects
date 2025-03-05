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
        overflow: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "12px",
          width: "80%",
          maxWidth: "900px",
          minWidth: "400px",
          backgroundColor: "#fff",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          opacity: 0,
          animation: "fadeIn 0.5s ease-in-out forwards",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to my App
        </Typography>
        <div>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            variant="outlined"
            color="secondary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
