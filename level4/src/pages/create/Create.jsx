import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
export default function Create() {
  // const [title, setTitle] = useState("");

  // const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ title, price }) => {
    console.log({ price, title });
    price=Number(price);
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      component="form"
      sx={{ width: "380px" }}
    >
      <TextField
        {...register("title", {
          required: { value: true, message: "Required Field" },
          minLength: { value: 3, message: "Minumm length 3" },
        })}
        // onChange={(eo) => {
        //   setTitle(eo.target.value);
        // }}
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
        error={Boolean(errors.title)}
        helperText={Boolean(errors.title) ? errors.title.message.toString() : null}
      />
      <TextField
        {...register("price", {required:{value: true, message: "Required Field"  }})}
        // onChange={(eo) => {
        //   setPrice(Number(eo.target.value));
        // }}
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
        type="number"
        error={Boolean(errors.price)}
        helperText={Boolean(errors.price) ? errors.title?.message.toString() : null}
      />
      <ColorButton
        type="submit"
        onClick={() => {}}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}
