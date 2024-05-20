import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, createTheme, ThemeProvider, colors } from "@mui/material";
import Home from './components/pages/Home.js'
import Services from './components/pages/Services'
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/Login"
import SidebarT from "./components/global/Sidebar";
import Calendar from './components/pages/calendar'
import Form from "./components/pages/form/index";
import Profile from "./components/pages/Profile";
import { Routes, Route } from "react-router-dom";
import OuterTopbar from "./components/global/OuterTopbar";
import { Box } from '@mui/material'

function AppTest() {
  const [theme, colorMode] = useMode();
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
         <CssBaseline />
         <OuterTopbar />
         <div className="app">
              <SidebarT />
              <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/form" element={<Form />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />            
                <Route path="/login" element={<Login />} />

              </Routes> 
            </main>
       
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider> 
    </>
  );
}

export default AppTest;
