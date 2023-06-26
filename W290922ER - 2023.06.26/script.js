function wait(mili) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), mili);
  });
}

// wait(2000)
//   .then((num) => {
//     console.log(num);
//     return 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return 3;
//   })
//   .then((num) => {
//     console.log(num);
//     return 4;
//   })
//   .then((num) => {
//     console.log(num);
//     return 5;
//   })
//   .then((num) => {
//     console.log(num);
//     return 6;
//   })
//   .catch((num) => {
//     console.log("error", num);
//     return 5;
//   })
//   .then((num) => {
//     console.log("last .then", num);
//   });

// one -- 10s --> two -- 3s --> three -- 5s --> four -- 3s --> six
// 				   \
// 				    -- 6s --> five -- 2s --> seven

async function thenToAsync(a) {
  const p = new Promise((resolve) => setTimeout(() => resolve(1)), 2000);
  const num1 = await p;
  // .then((num1) => {
  console.log(num1);
  //   return num1 + 1;
  // })

  const num2 = /*await*/ num1 + 1;
  // .then((num2) => {
  console.log(num2);

  // return num2 + 1;
  const num3 = /*await*/ num2 + 1;
  // })
  // .then((num3) => {

  console.log(num3);
  // });
}

async function ex1() {
  console.log("one");

  await wait(1 * 1000);
  console.log("two");

  async function wait2() {
    await wait(3 * 1000);
    console.log("three");
    await wait(5 * 1000);
    console.log("four");
    await wait(3 * 1000);
    console.log("six");
    // throw new Error("hello");
  }

  async function wait3() {
    await wait(6 * 1000);
    console.log("five");
    await wait(2 * 1000);
    console.log("seven");
  }

  // try {
  //   // wait2.then((a) => {});
  //   const a = await wait2();

  //   // wait2.catch(e => {})
  // } catch (e) {
  //   console.log(e);
  // }

  wait2();
  wait3();
}

ex1();

// AMAZING WAY
// console.log("one");
// wait(10 * 1000).then(() => {
//   console.log("two");

//   return Promise.all([
//     wait(3 * 1000)
//       .then(() => {
//         console.log("three");
//         return wait(5 * 1000);
//       })
//       .then(() => {
//         console.log("four");
//         return wait(3 * 1000);
//       })
//       .then(() => {
//         console.log("six");
//       }),

//     wait(6 * 1000)
//       .then(() => {
//         console.log("five");
//         return wait(2 * 1000);
//       })
//       .then(() => {
//         console.log("seven");
//       }),
//   ]);
// });

// // GOOD WAY
// console.log("one");
// wait(10 * 1000).then(() => {
//   console.log("two");

//   wait(3 * 1000)
//     .then(() => {
//       console.log("three");
//       return wait(5 * 1000);
//     })
//     .then(() => {
//       console.log("four");
//       return wait(3 * 1000);
//     })
//     .then(() => {
//       console.log("six");
//     });

//   wait(6 * 1000)
//     .then(() => {
//       console.log("five");
//       return wait(2 * 1000);
//     })
//     .then(() => {
//       console.log("seven");
//     });
// });

// /// BAD WAY
// console.log("one");
// wait(10 * 1000).then(() => {
//   console.log("two");

//   wait(3 * 1000).then(() => {
//     console.log("three");

//     wait(5 * 1000).then(() => {
//       console.log("four");

//       wait(3 * 1000).then(() => {
//         console.log("six");
//       });
//     });
//   });

//   wait(6 * 1000).then(() => {
//     console.log("five");

//     wait(2 * 1000).then(() => {
//       console.log("seven");
//     });
//   });
// });




