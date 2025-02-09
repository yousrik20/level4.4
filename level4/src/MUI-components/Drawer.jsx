import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  useTheme,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import { useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";

export default function Drawerr({ drawerWidth, setMyMode }) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Button onClick={() => { setMyMode(theme.palette.mode === 'light' ? 'dark' : 'light') }} variant="contained" color="warning">Dark</Button> */}

      <List>
        <ListItem sx={{display:'flex',justifyContent:"center"}}>
        <IconButton
          onClick={() => {
            setMyMode(theme.palette.mode === "light" ? "dark" : "light");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7 sx={{ color: "orange" }} />
          ) : (
            <Brightness4 />
          )}
        </IconButton>
        </ListItem>
        
        <Divider />

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/create");
            }}
          >
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2 />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
