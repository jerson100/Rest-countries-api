import React from "react";
import Container from "../../components/common/Container";
import CountriesList from "../../components/common/CountriesList";
import Search from "../../components/common/Search";
import Select from "../../components/common/Select";
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
      <Container>
        <Form regions={regions} />
        <CountriesList countries={countries} />
      </Container>
    </HomeViewStyle>
  );
};

export default HomeView;
