import React, { useEffect, useState } from "react";
import COUNTRIES_API from "../../api/countries";
import CountriesList from "../../components/common/CountriesList";
import useScrollTop from "../../hooks/useScrollTop";
import Form from "./components/Form/Form";
import { HomeViewStyle } from "./homeView.style";

const HomeView = () => {
  useScrollTop();
  const [countries, setcountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [region, setregion] = useState("all");

  useEffect(() => {
    const d = async () => {
      setLoadingCountries(true);
      try {
        const data =
          region === "all"
            ? await COUNTRIES_API.all()
            : await COUNTRIES_API.getByName(region);
        setcountries(data);
      } catch (e) {
        setcountries([]);
      } finally {
        setLoadingCountries(false);
      }
    };
    d();
  }, [region]);
  return (
    <HomeViewStyle>
      <Form setregion={setregion} region={region} />
      <CountriesList loading={loadingCountries} countries={countries} />
    </HomeViewStyle>
  );
};

export default HomeView;
