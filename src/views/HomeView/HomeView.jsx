import React from "react";
import NavigationHeader from "../../components/common/NavigationHeader";
import Search from "../../components/common/Search/Search";
import { HomeViewContainerStyle, MainStyle } from "./homeView.style";

const HomeView = () => {
  return (
    <>
      <NavigationHeader />
      <MainStyle>
        <Search />
        <HomeViewContainerStyle>
          <p>Bienvenido...</p>
        </HomeViewContainerStyle>
      </MainStyle>
    </>
  );
};

export default HomeView;
