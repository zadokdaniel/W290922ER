const moviesContainer = document.getElementById("movies-container");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchYearBtn = document.getElementById("search-year");
const searchInputByYear = document.getElementById("search-input-year");

searchInput.addEventListener("input", () => {
  const input = searchInput.value;
  showMoviesBySearch(input);
});

searchYearBtn.addEventListener("click", () => {
  const year = Number(searchInputByYear.value);
  showMoviesByYear(year);
});
showAllMovies();

// mini process

function showMoviesByYear(year) {
  imdb
    .getAll()
    .then((movies) => movies.filter((movie) => Number(movie.year) === year))
    .then((found) => {
      if (!found.length) {
        showError(`no movies in ${year}`);
        return;
      }

      return found;
    })
    .then(renderMovies)
    .then((moviesAsHTML) => (moviesContainer.innerHTML = moviesAsHTML))
    .catch((err) => {
      if (err.code === 1) {
        showError(err.message);
      }
    });
}

searchBtn.addEventListener("click", () => {
  const input = searchInput.value;
  showMoviesBySearch(input);
});

function showMoviesBySearch(searchTerm) {
  imdb
    .searchByTitle(searchTerm)
    .then(renderMovies)
    .then((moviesAsHtml) => {
      moviesContainer.innerHTML = moviesAsHtml;
    })
    .catch((err) => {
      if (err.code === 1) {
        showError(err.message);
      }
    });
}

function showError(err) {
  moviesContainer.innerHTML = `
    <div class="text-danger">${err}</div>`;
}

function showAllMovies() {
  imdb
    .getAll()
    .then(renderMovies)
    .then((moviesAsHtml) => {
      moviesContainer.innerHTML = moviesAsHtml;
    });
}

function renderMovies(movies) {
  let html = "";
  for (let movie of movies) {
    html += renderMovie(movie);
  }

  return html;
}

function renderMovie(movie) {
  return `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card" style="width: 18rem">
      <img
        src="${movie.image}"
        class="card-img-top"
        alt="${movie.title}"
      />
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.fullTitle}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="bi bi-activity me-2"></i>
          <span>${movie.rank}</span>
        </li>
        <li class="list-group-item">
          <i class="bi bi-people-fill me-2"></i>
          <span>${movie.crew}</span>
        </li>
        <li class="list-group-item">
          <i class="bi bi-tv me-2"></i>
          <span>${movie.imDbRating}</span>
        </li>
      </ul>
    </div>
  </div>`;
}
