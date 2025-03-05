import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: "center", backgroundColor: "#f1f1f1", mt: "auto" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;