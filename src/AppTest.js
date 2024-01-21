import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, createTheme, ThemeProvider, colors } from "@mui/material";
import { useMemo, useState } from "react";

import Btn from "./componentsTest/Btn";
import Toolbar from "./componentsTest/ToolBar";
import Counter from "./scenesTest/Counter";
import Topbar from "./scenesTest/global/TopbarT"
import MyApp from "./progTest/context/MyAppc";
import Appm from "./progTest/memo/Appm";
import SidebarT from "./scenesTest/global/SidebarT";
import { Routes, Route } from "react-router-dom";
// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: colors.red[900],
//     },
//   },
// });

function AppTest() {
  const [theme, colorMode] = useMode();
  
 
  return (
    <>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SidebarT />
        <Topbar />
        <Routes>
          <Route path="/toolbar" element={<Toolbar />} />
          <Route path="/counter" element={<Counter />} />
        </Routes> 
      </ThemeProvider>
      {/* <Appm /> */}
      </ColorModeContext.Provider>
    </>
  );
}

export default AppTest;
