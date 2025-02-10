import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Menu } from "@mui/icons-material";
export default function Appbar({ drawerWidth, showDrawer }) {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr:"9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>

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
