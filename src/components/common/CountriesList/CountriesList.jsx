import React from "react";
import Country from "../Country/Country";
import { CountriesListStyle } from "./countriesList.style";

const CountriesList = ({ countries, loading }) => {
  return (
    <>
      {!loading ? (
        <CountriesListStyle>
          {countries.map(
            ({
              flags,
              name: { common: commonName },
              population,
              region,
              capital,
            }) => {
              return (
                <Country
                  key={commonName}
                  src={flags && flags.png}
                  name={commonName}
                  population={population}
                  region={region}
                  capital={capital ? capital[0] : ""}
                />
              );
            }
          )}
        </CountriesListStyle>
      ) : (
        "cargando..."
      )}
    </>
  );
};

export default CountriesList;
