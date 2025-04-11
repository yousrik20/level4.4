import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

export default function Home() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);
  const handleDelete =(item)=>{
    fetch(`http://localhost:3100/mydata/${item.id}`,{
      method:'DELETE'
    })

    const newArr=myData.filter((myObject)=>{
      return myObject.id !==  item.id
    })
    setMyData(newArr);
  }
  let totalPrice=0;

  return (
    <Box>
      {myData.map((item)=>{
        totalPrice+=item.price;
        return(
<Paper 
        key={item.id}
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
          {item.title}
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
          ${item.price}
        </Typography>
        <IconButton 
          onClick={()=>{
            handleDelete(item)
          }}
          aria-label=""
          sx={{ position: "absolute", top: "0px", right: "0px" }}
        >
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
        )
      })}



      <Typography variant="h6" sx={{textAlign:'center',mt:'55px'}}>👉 You Spend $ {totalPrice}</Typography>
    </Box>
  );
}
