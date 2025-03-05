import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import homeImage from "../assets/img.png"; // Import the image

function HomePage() {
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
          Welcome to my world
        </Typography>
        <img
          src={homeImage}
          alt="Home"
          style={{ width: "100%", maxWidth: "300px", marginTop: "20px" }}
        />
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default HomePage;