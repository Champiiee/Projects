import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Details:", formData);
    localStorage.setItem("user", JSON.stringify(formData));
    window.alert("Signup successful!");
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

  const today = new Date().toISOString().split("T")[0];

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
      <div style={{ ...body }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
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
            label="Birthday"
            name="birthday"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: today }}
            value={formData.birthday}
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
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Button
          component={Link}
          to="/login"
          color="primary"
          sx={{ marginTop: "15px" }}
        >
          Already have an account? Login
        </Button>
      </div>

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

export default Signup;
