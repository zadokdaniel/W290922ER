function wait(mili) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), mili);
  });
}

wait(2000)
  .then((num) => {
    console.log(num);
    return 1;
  })
  .then((num) => {
    console.log(num);
    return 2;
  })
  .then((num) => {
    console.log(num);
    return 3;
  })
  .then((num) => {
    console.log(num);
    return 4;
  })
  .then((num) => {
    console.log(num);
    return 5;
  })
  .then((num) => {
    console.log(num);
    return 6;
  })
  .catch((num) => {
    console.log("error", num);
    return 5;
  })
  .then((num) => {
    console.log("last .then", num);
  });

// one -- 10s --> two -- 3s --> three -- 5s --> four -- 3s --> six
// 				   \
// 				    -- 6s --> five -- 2s --> seven

// AMAZING WAY
console.log("one");
wait(10 * 1000).then(() => {
  console.log("two");

  return Promise.all([
    wait(3 * 1000)
      .then(() => {
        console.log("three");
        return wait(5 * 1000);
      })
      .then(() => {
        console.log("four");
        return wait(3 * 1000);
      })
      .then(() => {
        console.log("six");
      }),

    wait(6 * 1000)
      .then(() => {
        console.log("five");
        return wait(2 * 1000);
      })
      .then(() => {
        console.log("seven");
      }),
  ]);
});

// GOOD WAY
console.log("one");
wait(10 * 1000).then(() => {
  console.log("two");

  wait(3 * 1000)
    .then(() => {
      console.log("three");
      return wait(5 * 1000);
    })
    .then(() => {
      console.log("four");
      return wait(3 * 1000);
    })
    .then(() => {
      console.log("six");
    });

  wait(6 * 1000)
    .then(() => {
      console.log("five");
      return wait(2 * 1000);
    })
    .then(() => {
      console.log("seven");
    });
});

/// BAD WAY
console.log("one");
wait(10 * 1000).then(() => {
  console.log("two");

  wait(3 * 1000).then(() => {
    console.log("three");

    wait(5 * 1000).then(() => {
      console.log("four");

      wait(3 * 1000).then(() => {
        console.log("six");
      });
    });
  });

  wait(6 * 1000).then(() => {
    console.log("five");

    wait(2 * 1000).then(() => {
      console.log("seven");
    });
  });
});
