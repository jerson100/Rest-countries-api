import React from "react";
import NavigationHeader from "../../components/common/NavigationHeader";
import { HomeViewContainerStyle } from "./homeView.style";

const HomeView = () => {
  return (
    <>
      <NavigationHeader />
      <main>
        <HomeViewContainerStyle>
          <p>Bienvenido...</p>
        </HomeViewContainerStyle>
      </main>
    </>
  );
};

export default HomeView;
