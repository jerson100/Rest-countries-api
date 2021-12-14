import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../../../views/HomeView";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
