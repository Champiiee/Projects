import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "80px" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our App
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <Button component={Link} to="/login" variant="contained" color="primary" style={{ marginRight: "10px" }}>
          Login
        </Button>
        <Button component={Link} to="/signup" variant="outlined" color="secondary">
          Sign Up
        </Button>
      </div>
    </Container>
  );
}

export default LandingPage;
