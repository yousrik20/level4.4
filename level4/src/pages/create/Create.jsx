import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css";
import React from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
export default function Create() {
  return (
    <Box component="form" sx={{ width: "380px" }}>
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <TextField
        fullWidth
        label="Transaction Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
       <ColorButton sx={{mt:'22px'}} variant="contained">Submit <ChevronRight/></ColorButton>
    </Box>
  );
}
