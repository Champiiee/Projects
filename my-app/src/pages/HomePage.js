import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import homeImage from "../assets/img.png"; // Import the image

function HomePage() {
    
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
  );
}

export default HomePage;