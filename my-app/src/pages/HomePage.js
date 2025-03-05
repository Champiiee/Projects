import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import homeImage from "../assets/img.png"; // Import the image

function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to my world
      </Typography>
      <img src={homeImage} alt="Home" style={{ width: "100%", maxWidth: "300px"}} />
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
      >
        Logout
      </Button>
    </Container>
  );
}

export default HomePage;