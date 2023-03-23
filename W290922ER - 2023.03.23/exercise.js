function runExercise(exercise) {
  for (const categoryIndex in exercise) {
    const categoryTasks = exercise[categoryIndex].tasks;

    const categoryGroupName = `${Number(categoryIndex) + 1}. ${
      exercise[categoryIndex].title
    }`;

    console.groupCollapsed(categoryGroupName);

    for (let i = 0; i < categoryTasks.questions.length; i++) {
      const question = categoryTasks.questions[i];

      const questionGroupName = `${i + 1}. ${question.title}`;
      console.groupCollapsed(questionGroupName);

      categoryTasks.arr.forEach((arr, index) => {
        console.log(`--------------- ${index + 1}`);
        console.log("original:", arr);
        console.log("result:", question.answer(arr));
      });

      console.groupEnd(questionGroupName);
    }

    console.groupEnd(categoryGroupName);
  }
}

const exercise = [
  {
    title: "with the following arrays answers the following questions",
    tasks: {
      arr: [
        [
          "buy milk",
          "go to school",
          "study",
          "build project",
          "right song",
          "draw",
        ],
      ],
      questions: [
        {
          title: "sort the following array",
          answer: (arr) => arr.sort(),
        },
      ],
    },
  },
  {
    title: "with the following arrays answers the following questions",
    tasks: {
      arr: [
        [
          23,
          5,
          6,
          22,
          "a",
          true,
          3,
          5,
          7,
          3,
          "hello",
          "daniel",
          "five",
          "apple",
        ],
        [3, 4, 5, 6, 0, 7],
        [true, {}, []],
        [3, 4, 5, -23, true, 45, {}, [1, 2, 3, 4, 5]],
      ],
      questions: [
        {
          title: "do they contain only numbers?",
          answer: (arr) => arr.every((x) => typeof x === "number"),
        },
        {
          title: "do they contain only truthy values?",
          answer: (arr) => arr.every((x) => Boolean(x)),
          //   answer: (arr) => arr.every(Boolean), // same thing as Boolean is already a function which receives a value and returns a boolean
        },
        {
          title: "do they have an element with the value 3?",
          answer: (arr) => arr.some((x) => x === 3),
        },
        {
          title: "do they have an element with a value less than 0?",
          answer: (arr) => arr.some((x) => x < 0),
        },
        {
          title: "find the first string value with 5 letters",
          answer: (arr) =>
            arr.find((x) => typeof x === "string" && x.length === 5), // .length exists also in arrays and array likes (might be in any object), the requirement is only for strings that is why I'll check it is a string first
          //   answer: (arr) => arr.find((x) => x.length === 5), // try this for prove (result 4)
        },
        {
          title: "find all string values with 5 letters",
          answer: (arr) =>
            arr.filter((x) => typeof x === "string" && x.length === 5),
        },
        {
          title: "find only numeric values and multiply by 3",
          answer: (arr) =>
            arr.filter((x) => typeof x === "number").map((x) => x * 3),
        },
      ],
    },
  },

  {
    title: "from the following array do as follows",
    tasks: {
      arr: [users],
      questions: [
        {
          title: "find only males",
          answer: (users) => users.filter((user) => user.gender === "male"),
        },
        {
          title: "sort all users by name",
          answer: (users) =>
            users.sort((user1, user2) => (user1.name > user2.name ? 1 : -1)),
        },
        {
          title: "sort all users by age",
          answer: (users) =>
            users.sort((user1, user2) => user1.age - user2.age),
        },
        {
          title: "sort all users by isActive",
          answer: (users) => users.sort((user1) => (user1.isActive ? -1 : 1)),
        },
        {
          title: "find only users over 18",
          answer: (users) => users.filter((user) => user.age > 18),
        },
        {
          title: "are some of the users with green eyes?",
          answer: (users) => users.some((user) => user.eyeColor === "green"),
        },
        {
          title: "create array only with the users names",
          answer: (users) => users.map((user) => user.name),
        },
        {
          title:
            'create an array with all the original data and two more properties "numberOfFriends" and "numberOfTags"',
          answer: (users) =>
            // to auto return object in arrow function parenthesis must be used to indicate it is not the normal meaning of code block
            // users.map((user) => ({})),
            users.map((user) => {
              return {
                ...user,
                // isActive: users.isActive,
                // balance: users.balance,
                // age: users.age,
                // eyeColor: users.eyeColor,
                // name: users.name,
                // gender: users.gender,
                // tags: users.tags,
                // friends: users.friends,

                numberOfTags: user.tags.length,
                numberOfFriends: user.friends.length,
              };
            }),
        },
        {
          title:
            'find all users over 22 years old and create elements stating the following "welcome, Daniel (28)" ordered by name',
          answer: (users) => {
            document.body.innerHTML = users
              .filter((user) => user.age > 22)
              .sort((user1, user2) => (user1.name > user2.name ? 1 : -1))
              .map((user) => `<div>${user.name} (${user.age})</div>`)
              .join("");

            // uncomment one step at a time and check the logs
            // return users;
            //   .filter((user) => user.age > 22)
            //   .sort((user1, user2) => (user1.name > user2.name ? 1 : -1))
            //   .map((user) => `<div>${user.name} (${user.age})</div>`)
            //   .join("");
          },
        },
      ],
    },
  },
];

runExercise(exercise);
