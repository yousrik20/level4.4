import React from "react";
import Appbar from "../MUI-components/Appbar";

import { Outlet } from "react-router-dom";
import Drawerr from "../MUI-components/Drawer";
import { Box } from "@mui/material";

const drawerWidth = 240;
export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth}/>
      <Drawerr drawerWidth={drawerWidth}/>     
      <Box className="border" sx={{ml:`${drawerWidth}px`,display:'flex',justifyContent:'center'}}>
        <Outlet />
      </Box>
      
    </div>
  );
}
