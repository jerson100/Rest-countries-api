import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView/HomeView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={HomeView} />
        <Route path="/" element={HomeView} />
      </Routes>
    </Router>
  );
}

export default App;
