import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", formData);
  };
  const body = {
    background: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "100%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    opacity: 0,
    animation: "fadeIn 0.5s ease-in-out forwards",
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          ...body
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Button
          component={Link}
          to="/signup"
          color="secondary"
          sx={{ marginTop: "15px" }}
        >
          New here? Create an account
        </Button>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Container>
  );
}

export default Login;
