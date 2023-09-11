const API_BASE = "https://restcountries.com/v3.1";

const $countrySelector = document.getElementById("country-selector");
const $countryInformation = document.getElementById("country-information");

init();

async function init() {
  await populateCountrySelector();
  $countrySelector.addEventListener("change", (e) => {
    countriesSelectorUpdated(e.target.value);
  });
  countriesSelectorUpdated($countrySelector.value);
}

async function getAllCountriesNames() {
  const url = `${API_BASE}/all?fields=name`;
  const response = await fetch(url);
  return await response.json();
}

async function getCountryByName(officialName) {
  const url = `${API_BASE}/name/${officialName}?fullText=true`;
  const response = await fetch(url);
  const $countryInformation = await response.json();
  return $countryInformation[0];
}

async function countriesSelectorUpdated(countryName) {
  const countryInformation = await getCountryByName(countryName);
  $countryInformation.innerHTML = renderCountry(countryInformation);
}

function renderCountry(countryInformation) {
  console.log(Object.values(countryInformation.languages).join(", "));

  return `
  <div class="card w-100">
  <img
    src="${countryInformation.flags.svg}"
    class="card-img-top"
    alt="${countryInformation.name.common} flag"
  />

  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-clock"></i>
      <span class="fw-bold">Timezone: </span>
      <span class="flex-fill text-center">${countryInformation.timezones.join(
        ", "
      )}</span>
    </li>
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-people-fill"></i>
      <span class="fw-bold">Population: </span>
      <span class="flex-fill text-center">${countryInformation.population.toLocaleString()}</span>
    </li>

    ${
      countryInformation.capital && countryInformation.capital.length
        ? `
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-building"></i>
        <span class="fw-bold">Capital: </span>
        <span class="flex-fill text-center">${countryInformation.capital.join(
          ", "
        )}</span>
      </li>
      `
        : ""
    }

    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-geo-fill"></i>
      <span class="fw-bold">Area: </span>
      <span class="flex-fill text-center">
        ${countryInformation.area.toLocaleString()} m<sup>2</sup>
      </span>
    </li>
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-translate"></i>
      <span class="fw-bold">Languages: </span>
      <span class="flex-fill text-center">${
        countryInformation.languages
          ? Object.values(countryInformation.languages).join(", ")
          : "unknown"
      }</span>
    </li>
    <li class="list-group-item d-flex">
        <i class="me-2 bi bi-cash-coin"></i>
        <span class="fw-bold">Currencies: </span>
        <span class="flex-fill text-center"> ${
          countryInformation.currencies
            ? Object.values(countryInformation.currencies)[0].name
            : "unknown"
        } (${
    countryInformation.currencies
      ? Object.values(countryInformation.currencies)[0].symbol
      : "unknown"
  }) </span>
    </li>
  </ul>
</div>
`;
}

async function populateCountrySelector() {
  const countries = await getAllCountriesNames();

  $countrySelector.innerHTML = countries
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    .map(
      (country) =>
        `<option value="${country.name.official}">${country.name.common}</option>`
    )
    .join("");
}

// async function populateCountrySelector() {
//   const countries = await getAllCountriesNames();

//   let html = "";
//   for (country of countries) {
//     html += `<option value="${country.name.official}">${country.name.common}</option>`;
//   }
//   $countrySelector.innerHTML = html;
// }

// fetch(`${API_BASE}/all`)
//   .then((response) => response.json())
//   .then((countries) => {
//     // console.log(countries.filter((c) => c.capital.length === 0));
//     console.log(countries.filter((c) => !c.capital));
//   });
