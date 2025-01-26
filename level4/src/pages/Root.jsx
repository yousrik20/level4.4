import React from "react";
import Appbar from "../MUI-components/Appbar";

import { Outlet } from "react-router-dom";
import Drawerr from "../MUI-components/Drawer";

const drawerWidth = 240;
export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth}/>
      <Drawerr drawerWidth={drawerWidth}/>     
      <Outlet />
    </div>
  );
}
