import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate=useNavigate();
  return (
    <Box noValidate autoComplete="off" component="form" sx={{ width: "380px" }}>
      <TextField
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        fullWidth
        label=" Transaction Title"
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
        onChange={(eo) => {
          setPrice(Number(eo.target.value));
        }}
        fullWidth
        label=" Transaction Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),

          }).then(()=>{
            navigate('/')
          })
        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}
