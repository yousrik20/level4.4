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
import { useLocation, useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";

export default function Drawerr({ drawerWidth, setMyMode,noneOrBlock,drawerType,hideDrawer }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation=useLocation();
  console.log(currentLocation.pathname);
  const myList=[
    {text:"Home",icon:<Home/>,path:'/'},
    {text:"Create",icon:<Create/>,path:'/create'},
    {text:"Profile",icon:<Person2/>,path:'/profile'},
    {text:"Settings",icon:<Settings/>,path:'/settings'},
  ]
  return (
    <Drawer
      sx={{
        display:{ xs:noneOrBlock,sm:'block'},
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={()=>{
        hideDrawer()
      }}
    >
      {/* <Button onClick={() => { setMyMode(theme.palette.mode === 'light' ? 'dark' : 'light') }} variant="contained" color="warning">Dark</Button> */}

      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
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
        {myList.map((item)=>{
          return(
            <ListItem  key={item.text} sx={{bgcolor:currentLocation.pathname === item.path ?  theme.palette.
// @ts-ignore
            favColor.main : null}} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          )
        })}



        
        {/* logout */}
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
