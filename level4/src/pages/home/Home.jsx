import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React from "react";
import { Close } from "@mui/icons-material";

export default function Home() {
  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          position: "relative",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          GYM
        </Typography>
        <Typography
          sx={{
            mr: "33px",
            fontWeight: "500",
            fontSize: "1.4em",
            opacity: "0.8",
          }}
          variant="h6"
        >
          $100
        </Typography>
        <IconButton
          aria-label=""
          sx={{ position: "absolute", top: "0px", right: "0px" }}
        >
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          position: "relative",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          GYM
        </Typography>
        <Typography
          sx={{
            mr: "33px",
            fontWeight: "500",
            fontSize: "1.4em",
            opacity: "0.8",
          }}
          variant="h6"
        >
          $100
        </Typography>
        <IconButton
          aria-label=""
          sx={{ position: "absolute", top: "0px", right: "0px" }}
        >
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
