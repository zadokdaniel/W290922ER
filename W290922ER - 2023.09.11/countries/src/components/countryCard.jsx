const CountryCard = () => {
  return (
    <div className="card w-100">
      <img
        src="https://flagcdn.com/gt.svg"
        className="card-img-top"
        alt="Guatamala flag"
      />

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-clock"></i>
          <span className="fw-bold">Timezone: </span>
          <span className="flex-fill text-center">+08:00</span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-people-fill"></i>
          <span className="fw-bold">Population: </span>
          <span className="flex-fill text-center">16,858,333</span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-building"></i>
          <span className="fw-bold">Capital: </span>
          <span className="flex-fill text-center">Country Capital</span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-geo-fill"></i>
          <span className="fw-bold">Area: </span>
          <span className="flex-fill text-center">
            12,122,45 m<sup>2</sup>
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-translate"></i>
          <span className="fw-bold">Languages: </span>
          <span className="flex-fill text-center">EN, FR</span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-cash-coin"></i>
          <span className="fw-bold">Currencies: </span>
          <span className="flex-fill text-center">
            New Israeli Shekel (NIS)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
