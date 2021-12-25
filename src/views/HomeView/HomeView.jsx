import React from "react";
import Container from "../../components/common/Container";
import CountriesList from "../../components/common/CountriesList";
import Form from "./components/Form/Form";
import { HomeViewStyle } from "./homeView.style";

const regions = [
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
const countries = [
  {
    id: 1,
    name: "Germany",
    population: "81.770.900",
    capital: "Berlin",
    region: "Europe",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
  {
    id: 2,
    name: "Germany",
    population: "81.770.900",
    capital: "Berlin",
    region: "Europe",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
  {
    id: 2,
    name: "Germany",
    population: "81.770.900",
    capital: "Berlin",
    region: "Europe",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
  {
    id: 2,
    name: "Germany",
    population: "81.770.900",
    capital: "Berlin",
    region: "Europe",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  },
];

const HomeView = () => {
  return (
    <HomeViewStyle>
      <Form regions={regions} />
      <CountriesList countries={countries} />
    </HomeViewStyle>
  );
};

export default HomeView;
