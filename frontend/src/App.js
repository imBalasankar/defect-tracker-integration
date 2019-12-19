import React from "react";
import "./App.css";
import MainDrawer from "./components/Main/MainDrawer";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [dark, setDark] = React.useState(false);

  const changeTheme = () => {
    setDark(!dark);
  };

  const prefersDarkMode = dark;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <MainDrawer onToggleDark={changeTheme} isDark={dark} />
    </ThemeProvider>
  );
}

export default App;
