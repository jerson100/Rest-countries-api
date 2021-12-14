import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
      margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
      font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
