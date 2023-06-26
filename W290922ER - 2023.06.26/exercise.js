function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const rockPaperScissorsOptions = ["paper", "rock", "scissors"];
/**
 * in 20% of the time it will reject
 * @returns Promise<"rock"|"scissors"|"paper">
 */
async function rockPaperScissors(rejectThreshold = 0.8) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = Math.random() > rejectThreshold;

      if (isError) {
        reject("could not draw");
        return;
      }

      resolve(
        rockPaperScissorsOptions[
          getRandomInt(0, rockPaperScissorsOptions.length)
        ]
      );
    }, 2000);
  });
}

function rockPaperScissorsWinnerCalculation(player1, player2) {
  if (player1 === player2) {
    return 0;
  }

  player1Index = rockPaperScissorsOptions.indexOf(player1);
  player2Index = rockPaperScissorsOptions.indexOf(player2);

  if (
    player1Index === rockPaperScissorsOptions.length - 1 &&
    player2Index === 0
  ) {
    return 1;
  } else if (
    player2Index === rockPaperScissorsOptions.length - 1 &&
    player1Index === 0
  ) {
    return 2;
  }

  if (player1Index > player2Index) {
    return 2;
  } else {
    return 1;
  }
}

/**
 *
 * use the rockPaperScissors function to receive two players hands
 * show player1/player2 win or tie based on the results
 *
 * in case of an error show a message
 *
 * 1. do the above request using .then
 * 2. do the above request using await
 */

// const checks = rockPaperScissorsOptions.reduce((acc, curr) => {
//   return [...acc, ...rockPaperScissorsOptions.map((v) => [v, curr])];
// }, []);

// checks.forEach(([player1, player2]) =>
//   console.log(
//     player1,
//     player2,
//     rockPaperScissorsWinnerCalculation(player1, player2)
//   )
// );

const messages = ["its a tie", "player1 won!", "player2 won!"];

const error = (error) => console.log(error);

function game() {
  rockPaperScissors()
    .then((player1) => {
      return rockPaperScissors()
        .then((player2) => {
          console.log(
            player1,
            player2,
            messages[rockPaperScissorsWinnerCalculation(player1, player2)]
          );
        })
        .catch(error);
    })
    .catch(error);
}

// game();

async function game2() {
  try {
    // .then(player1 => {})
    const player1 = await rockPaperScissors();
    const player2 = await rockPaperScissors();

    console.log(
      player1,
      player2,
      messages(rockPaperScissorsWinnerCalculation(player1, player2))
    );
  } catch (err) {
    console.log(err);
  }
}

game2();

// 1. do the exercise from class
// 2. wait exercise from last class convert to await
// 3. imdb movies project convert .then to await
