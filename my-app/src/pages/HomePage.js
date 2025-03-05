import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import homeImage from "../assets/img.png";

function HomePage() {
  const body = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };
  const innerBody = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };
  const content = {
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };
  return (
    <div style={body}>
      <div style={innerBody}>
        <div style={content}>
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
    </div>
  );
}

export default HomePage;
