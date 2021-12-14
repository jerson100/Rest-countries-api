import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppRouter from "./components/routes/AppRouter";
import { THEME } from "./configs/style";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after{
      margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    background-color: ${({ theme: { BACKGROUND } }) => BACKGROUND};
    color: ${({ theme: { TEXT } }) => TEXT};
  }

`;

function App() {
  const [theme, settheme] = useState("DARK");
  return (
    <>
      <ThemeProvider theme={THEME[theme]}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
