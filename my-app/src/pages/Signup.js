import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const form = {
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

  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={body}>
      <form onSubmit={handleSubmit} style={form}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
        <Button
          component={Link}
          to="/login"
          color="secondary"
          sx={{ marginTop: "15px" }}
        >
          Already have an account? Login
        </Button>
      </form>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        color="secondary"
        sx={{ position: "absolute", bottom: "20px", left: "20px" }}
      >
        Back to Landing Page
      </Button>
    </div>
  );
}

export default Signup;
