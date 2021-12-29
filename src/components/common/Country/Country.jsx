import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CountryFlagStyle,
  CountryHeaderStyle,
  CountryListStyle,
  CountryStyle,
  CountryTitleStyle,
} from "./country.style";

const Country = ({ src, name, population, region, capital }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/countries/${name}`);
  };
  return (
    <CountryStyle onClick={handleClick}>
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
