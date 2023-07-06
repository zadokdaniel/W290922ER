// api requests
const API_BASE = "https://restcountries.com/v3.1";

async function getAllCountriesNames() {
  const response = await fetch(`${API_BASE}/all?fields=name`);
  return await response.json();
}

async function getCountryByName(officialName) {
  const response = await fetch(
    `${API_BASE}/name/${officialName}?fullText=true`
  );
  const countryInformation = await response.json();
  return countryInformation[0];
}

fetch(`${API_BASE}/all`)
  .then((resp) => resp.json())
  .then((countries) => {
    return countries.map((country) => country.timezones);
  })
  .then(console.log);
