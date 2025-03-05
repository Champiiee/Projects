import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  const body = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
  };
  const innerBody = {
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
  };
  return (
    <div
      style={{
        ...body
      }}
    >
      <div
        style={{
          ...innerBody,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to my App
        </Typography>
      
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
