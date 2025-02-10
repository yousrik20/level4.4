import Appbar from "../MUI-components/Appbar";
import { Outlet } from "react-router-dom";
import Drawerr from "../MUI-components/Drawer";
import { Box } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState ,useMemo} from "react";
import { grey,teal } from "@mui/material/colors";
import React from "react";
import getDesignTokens from "../styles/Mytheme";


const drawerWidth = 240;
export default function Root() {

  const [mode, setMyMode] = useState(
        localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark",);
  const darkTheme = createTheme({
    
  });
  const [noneOrBlock,setNoneOrBlock]=useState('none');
  const [drawerType,setDrawerType]=useState('permanent');
  const showDrawer = () => { 
    setDrawerType("temporary");
    setNoneOrBlock("block"); 
   }
  const hideDrawer=()=>{
    setNoneOrBlock('none');
    setDrawerType('permanent');
  }
  
  // @ts-ignore
  const theme =useMemo(()=>createTheme(getDesignTokens(mode),[mode]));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth}  showDrawer={showDrawer}/>
        <Drawerr drawerWidth={drawerWidth} setMyMode={setMyMode} noneOrBlock={noneOrBlock}  drawerType={drawerType} hideDrawer={hideDrawer}/>
        <Box 
        // className="border"
          component="main"
          sx={{
            ml: {sm:`${drawerWidth}px`},
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
