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

  const form = {
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    opacity: 0,
    animation: "fadeIn 0.5s ease-in-out forwards",
    maxHeight: "calc(100vh - 128px)",
    overflowY: "auto",
  };

  const body = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "auto",
  position: "relative",
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
    </div>
  );
}

export default Signup;