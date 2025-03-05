import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", formData);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      window.alert("Login successful!");
      navigate("/home");
    } else {
      window.alert("Invalid email or password!");
    }
  };

  const form = {
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "700px", // Increased maxWidth to enlarge the form
    backgroundColor: "#fff",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    opacity: 0,
    animation: "fadeIn 0.5s ease-in-out forwards",
  };

  const body = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
    minHeight: "100vh",
  };

  return (
    <div style={body}>
      <form onSubmit={handleSubmit} style={form}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
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
        <Button
          component={Link}
          to="/signup"
          color="secondary"a
          sx={{ marginTop: "15px" }}
        >
          New here? Create an account
        </Button>
      </form>
      
    </div>
  );
}

export default Login;