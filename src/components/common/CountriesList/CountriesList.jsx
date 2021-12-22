import React from "react";
import Country from "../Country/Country";
import { CountriesListStyle } from "./countriesList.style";

const CountriesList = ({ countries }) => {
  return (
    <CountriesListStyle>
      {countries.map(({ id, src, name, population, region, capital }) => {
        return (
          <Country
            key={id}
            src={src}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountriesListStyle>
  );
};

export default CountriesList;
