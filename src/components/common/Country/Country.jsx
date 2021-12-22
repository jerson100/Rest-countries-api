import React from "react";
import {
  CountryFlagStyle,
  CountryHeaderStyle,
  CountryListStyle,
  CountryStyle,
  CountryTitleStyle,
} from "./country.style";

const Country = ({ src, name, population, region, capital }) => {
  return (
    <CountryStyle>
      <CountryFlagStyle src={src} />
      <CountryHeaderStyle>
        <CountryTitleStyle>{name}</CountryTitleStyle>
        <CountryListStyle>
          <li>
            <span>Population:</span>
            <span>{population}</span>
          </li>
          <li>
            <span>Region:</span>
            <span>{region}</span>
          </li>
          <li>
            <span>Capital:</span>
            <span>{capital}</span>
          </li>
        </CountryListStyle>
      </CountryHeaderStyle>
    </CountryStyle>
  );
};

export default Country;
