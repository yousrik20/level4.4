import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function NotFound() {
    const theme=useTheme();
  return (
    <Box>
      <Typography variant="h5" color={theme.palette.error.main}>There is no design yet<br/><br/>please try again later.</Typography>
    </Box>
  );
}
