import Appbar from "../MUI-components/Appbar";
import { Outlet } from "react-router-dom";
import Drawerr from "../MUI-components/Drawer";
import { Box } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { grey,teal } from "@mui/material/colors";


const drawerWidth = 240;
export default function Root() {
  const [mode, setMyMode] = useState(
        localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark",);
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
      ...(mode==="light"
        ? {
          ali:{
            main:'#64748b'
          },
          favColor:{
            main:grey[300]
          }
        }
        :{
          ali:{
            main:teal[500],
  
          },
          favColor:{
            main:grey[800]
          }
        }
      )
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} />
        <Drawerr drawerWidth={drawerWidth} setMyMode={setMyMode} />
        <Box
          component="main"
          sx={{
            ml: `${drawerWidth}px`,
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
