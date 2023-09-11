const API_BASE = "https://restcountries.com/v3.1";

export async function getAllCountriesNames() {
  const url = `${API_BASE}/all?fields=name`;
  const response = await fetch(url);
  return await response.json();
}

export async function getCountryByName(officialName) {
  const url = `${API_BASE}/name/${officialName}?fullText=true`;
  const response = await fetch(url);
  const $countryInformation = await response.json();
  return $countryInformation[0];
}

const countryService = {
  getAllCountriesNames,
  getCountryByName,
};

export default countryService;
