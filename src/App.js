
import { ColorModeContext, useMode} from "./theme";
import { CssBaseline,createTheme, ThemeProvider,colors } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
    const [theme, colorMode] = useMode();
 return(
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

          <Topbar />
      
      </ThemeProvider>
      </ColorModeContext.Provider>
 )
  

}


export default App;
