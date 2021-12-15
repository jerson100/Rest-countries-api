import React from "react";
import NavigationHeader from "../../components/common/NavigationHeader";
import Search from "../../components/common/Search/Search";
import Select from "../../components/common/Select/Select";
import { HomeViewContainerStyle, MainStyle } from "./homeView.style";

const countries = [
  {
    country: "ÁFRICA",
    id: 1,
  },
  {
    country: "AMÉRICA",
    id: 2,
  },
  {
    country: "ASIA",
    id: 3,
  },
];

const HomeView = () => {
  return (
    <>
      <NavigationHeader />
      <MainStyle>
        <Search />
        <Select placeholder={"Filter by Region"} data={countries} />
        <HomeViewContainerStyle>
          <p>Bienvenido...</p>
        </HomeViewContainerStyle>
      </MainStyle>
    </>
  );
};

export default HomeView;
