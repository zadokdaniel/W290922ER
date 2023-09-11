import { useState, useEffect } from "react";
import { useCountriesNames } from "../hooks/useCountriesNames";

import CountryCard from "./countryCard";
import { useCountry } from "../hooks/useCountry";
const Countries = () => {
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const countriesNames = useCountriesNames();
  const country = useCountry(selectedCountryName);

  useEffect(() => {
    if (countriesNames.length) {
      setSelectedCountryName(countriesNames[0].name.official);
    }
  }, [countriesNames]);

  return (
    <div className="container mt-5 p-4 bg-light border">
      <div className="row">
        <div className="col-8 mx-auto">
          <select
            value={selectedCountryName}
            onChange={(e) => setSelectedCountryName(e.target.value)}
            className="w-100"
            id="country-selector"
          >
            {countriesNames.map((country) => (
              <option key={country.name.official} value={country.name.official}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-5">
        <div id="country-information" className="col-8 mx-auto">
          <CountryCard />
        </div>
      </div>
    </div>
  );
};

export default Countries;
