import { useState, useEffect } from "react";
import { getAllCountriesNames } from "../services/countryService";

export const useCountriesNames = () => {
  const [countriesNames, setCountriesNames] = useState([]);

  useEffect(() => {
    async function getCountriesNames() {
      const countries = (await getAllCountriesNames()).sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );

      setCountriesNames(countries);
    }

    getCountriesNames();
  }, []);

  return countriesNames;
};
