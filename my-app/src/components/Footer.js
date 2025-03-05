import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#333",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography variant="body2" color="#fff">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;