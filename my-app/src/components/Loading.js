import React from "react";
import { CircularProgress, Typography } from "@mui/material";

function Loading() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f9f9f9"
    }}>
      <img 
        src="/loading.png"  // Change this to your image path
        alt="Loading Icon"
        style={{ width: "80px", height: "80px", marginBottom: "10px" }}
      />

      <CircularProgress size={50} color="primary" />

      <Typography variant="h6" sx={{ marginTop: "15px" }}>
        Loading...
      </Typography>
    </div>
  );
}

export default Loading;
