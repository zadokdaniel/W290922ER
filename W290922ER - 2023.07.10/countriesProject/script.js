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

// render

const $countrySelector = document.getElementById("country-selector");
const $countryInformation = document.getElementById("country-information");

init();

async function init() {
  await populateCountrySelector();
  $countrySelector.addEventListener("change", (e) =>
    countriesSelectorUpdated(e.target.value)
  );
  countriesSelectorUpdated($countrySelector.value);
}

async function populateCountrySelector() {
  const countries = await getAllCountriesNames();

  $countrySelector.innerHTML = countries
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    .map(
      ({ name: { common, official } }) =>
        `<option value="${official}">${common}</option>`
    )
    .join("");
}

async function countriesSelectorUpdated(countryName) {
  const countryInformation = await getCountryByName(countryName);
  $countryInformation.innerHTML = renderCountry(countryInformation);
}

// fetch(`${API_BASE}/all`)
//   .then((resp) => resp.json())
//   .then((countries) => {
//     return countries.map((country) => country.currencies);
//   })
//   .then(console.log);

function renderCountry({
  name: { common: commonName },
  flags: { svg: flagSvg, alt: flagAlt },
  timezones,
  population,
  capital,
  area,
  languages,
  currencies,
}) {
  return `
  <div class="card w-100">
    <img
      src="${flagSvg}"
      class="card-img-top"
      alt="${flagAlt ? flagAlt : `${commonName} flag`}"
    />

    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-clock"></i>
        <span class="fw-bold">Timezone: </span>
        <span class="flex-fill text-center">${timezones.join(", ")}</span>
      </li>
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-people-fill"></i>
        <span class="fw-bold">Population: </span>
        <span class="flex-fill text-center">${population.toLocaleString()}</span>
      </li>
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-building"></i>
        <span class="fw-bold">Capital: </span>
        <span class="flex-fill text-center">${
          capital ? capital.join(", ") : "Unknown"
        }</span>
      </li>
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-geo-fill"></i>
        <span class="fw-bold">Area: </span>
        <span class="flex-fill text-center">
          ${area.toLocaleString()} m<sup>2</sup>
        </span>
      </li>
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-translate"></i>
        <span class="fw-bold">Languages: </span>
        <span class="flex-fill text-center">${
          languages ? Object.values(languages).join(", ") : "Unknown"
        }</span>
      </li>
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-cash-coin"></i>
        <span class="fw-bold">Currencies: </span>
        <span class="flex-fill text-center">
        ${
          currencies
            ? Object.values(currencies)
                .map(({ name, symbol }) => `${name} (${symbol})`)
                .join(", ")
            : "Unknown"
        }
        </span>
      </li>
    </ul>
  </div>`;
}
