import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../../../views/HomeView";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
