import { useState, useEffect } from "react";
import { getCountryByName } from "../services/countryService";

export const useCountry = (countryName) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountry() {
      if (!countryName) {
        return;
      }

      const country = await getCountryByName(countryName);
      setCountry(country);
    }

    getCountry();
  }, [countryName]);

  return country;
};
