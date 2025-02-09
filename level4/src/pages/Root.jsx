import React from "react";
import Appbar from "../MUI-components/Appbar";

import { Outlet } from "react-router-dom";
import Drawerr from "../MUI-components/Drawer";
import { Box } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
const drawerWidth = 240;
export default function Root() {
  const [myMode, setMyMode] = useState(
        localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark",);
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
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
