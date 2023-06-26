/**
 *
 * @param {any function} successData Data for resolve in case of success, in case of function will resolve with function's returned value, in case of function throw it will be rejected
 * @param {any function} errorData Data for reject in case of error, in case of function will reject with function's returned value
 * @param {number} errorChance The error change, -1 no chance, 1 always
 * @returns {Promise} A promise which resolves with successData or rejects with errorData according to chance parameter
 */
function createDataPromise({
  successData,
  errorData,
  errorChance = -1,
  delay = 200,
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isError = Math.random() < errorChance;

      if (isError) {
        reject(typeof errorData === "function" ? errorData() : errorData);
        return;
      }

      try {
        resolve(
          typeof successData === "function" ? successData() : successData
        );
      } catch (err) {
        reject(err);
      }
    });
  }, delay);
}

const imdb = {
  getAll() {
    return createDataPromise({
      successData: movies,
      delay: 1000,
    });
  },
  searchByTitle(query) {
    return createDataPromise({
      successData: () => {
        const found = movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

        if (!found.length) {
          throw { code: 1, message: "no movies" };
        }

        return found;
      },
      delay: 100,
    });
  },

  searchByYear(year) {
    return createDataPromise({
      successData: () => {
        const found = movies.filter((movie) => Number(movie.year) === year);

        if (!found.length) {
          throw { code: 1, message: "no movies" };
        }

        return found;
      },
      delay: 100,
    });
  },
};
