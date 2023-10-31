import { ThemeProvider } from "@mui/material";
import GlobalStyled from "./config/GlobalStyled";
import RoutesApp from "./config/routes/RoutesApp";
import DefaultTheme from "./config/theme/DefaultTheme";

function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={DefaultTheme}>
        <RoutesApp />
      </ThemeProvider>
    </>
  );
}

export default App;
