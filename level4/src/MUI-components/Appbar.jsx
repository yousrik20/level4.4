import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
export default function Appbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position="static"
    >
      <Toolbar>
        <Link
          sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
          underline="none"
          color="inherit"
          href="/"
        >
          My Expenses
        </Link>
        <Typography variant="body1" color="inherit" mr={2}>
          Youssri Salem
        </Typography>
        <Avatar alt="Youssri Salem" src="./1.png" />
      </Toolbar>
    </AppBar>
  );
}
