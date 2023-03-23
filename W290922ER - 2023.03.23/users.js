const users = [
  {
    isActive: true,
    balance: "$3,584.77",
    age: 28,
    eyeColor: "blue",
    name: "Fran Sullivan",
    gender: "female",
    tags: ["nulla", "laboris", "quis", "incididunt", "irure", "pariatur"],
    friends: [
      {
        id: 0,
        name: "Katheryn Sheppard",
      },
      {
        id: 1,
        name: "Mathews Gonzalez",
      },
      {
        id: 2,
        name: "Jeanette Cantu",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,710.40",
    age: 18,
    eyeColor: "green",
    name: "Alba Dennis",
    gender: "female",
    tags: ["nisi", "officia", "ut", "fugiat", "velit"],
    friends: [
      {
        id: 0,
        name: "Valencia Ewing",
      },
      {
        id: 1,
        name: "Leona Workman",
      },
      {
        id: 2,
        name: "Ada West",
      },
      {
        id: 3,
        name: "Duncan Merritt",
      },
      {
        id: 4,
        name: "Sondra Torres",
      },
      {
        id: 5,
        name: "Tran Holder",
      },
      {
        id: 6,
        name: "Alyson Bennett",
      },
      {
        id: 7,
        name: "Kristina Dillard",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,316.31",
    age: 12,
    eyeColor: "green",
    name: "Conley Cooper",
    gender: "male",
    tags: [
      "culpa",
      "exercitation",
      "velit",
      "voluptate",
      "est",
      "ea",
      "nostrud",
    ],
    friends: [
      {
        id: 0,
        name: "Sweeney Hopkins",
      },
      {
        id: 1,
        name: "Matthews Harrington",
      },
      {
        id: 2,
        name: "Hester Chase",
      },
      {
        id: 3,
        name: "Monica Whitley",
      },
      {
        id: 4,
        name: "Richmond Mcclure",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,850.55",
    age: 26,
    eyeColor: "blue",
    name: "Chapman Suarez",
    gender: "male",
    tags: ["laboris", "enim", "Lorem", "occaecat", "fugiat", "est", "laborum"],
    friends: [
      {
        id: 0,
        name: "Guerrero Salazar",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,994.80",
    age: 22,
    eyeColor: "brown",
    name: "Shari Bullock",
    gender: "female",
    tags: [
      "incididunt",
      "nostrud",
      "labore",
      "ullamco",
      "anim",
      "veniam",
      "sunt",
    ],
    friends: [
      {
        id: 0,
        name: "Byers Flynn",
      },
      {
        id: 1,
        name: "Terry Velasquez",
      },
      {
        id: 2,
        name: "Araceli Beasley",
      },
      {
        id: 3,
        name: "Earlene Valenzuela",
      },
      {
        id: 4,
        name: "Bates Fischer",
      },
      {
        id: 5,
        name: "Celia Mccray",
      },
      {
        id: 6,
        name: "Hernandez Goff",
      },
      {
        id: 7,
        name: "Charmaine Levy",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,940.72",
    age: 26,
    eyeColor: "brown",
    name: "Paulette Macias",
    gender: "female",
    tags: ["amet", "exercitation", "nulla", "eu", "exercitation"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$3,127.32",
    age: 19,
    eyeColor: "blue",
    name: "Spence Macdonald",
    gender: "male",
    tags: [
      "culpa",
      "ad",
      "duis",
      "esse",
      "proident",
      "adipisicing",
      "pariatur",
    ],
    friends: [
      {
        id: 0,
        name: "Miranda Chen",
      },
      {
        id: 1,
        name: "Quinn Boyd",
      },
      {
        id: 2,
        name: "Ericka Holman",
      },
      {
        id: 3,
        name: "Knight Taylor",
      },
      {
        id: 4,
        name: "Zelma Gates",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,856.95",
    age: 29,
    eyeColor: "blue",
    name: "Patton Nelson",
    gender: "male",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Frost Bartlett",
      },
      {
        id: 1,
        name: "Lilia Carpenter",
      },
      {
        id: 2,
        name: "Morrow Mason",
      },
      {
        id: 3,
        name: "King Blackwell",
      },
      {
        id: 4,
        name: "Lorie Whitaker",
      },
      {
        id: 5,
        name: "Cleveland Dickson",
      },
      {
        id: 6,
        name: "Susana Parks",
      },
      {
        id: 7,
        name: "Eleanor Wheeler",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,807.75",
    age: 20,
    eyeColor: "brown",
    name: "Vickie Monroe",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Cooke Trevino",
      },
      {
        id: 1,
        name: "Jewel Waller",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,863.13",
    age: 16,
    eyeColor: "brown",
    name: "Terrie Cardenas",
    gender: "female",
    tags: ["irure", "velit", "cillum", "adipisicing", "dolor"],
    friends: [
      {
        id: 0,
        name: "Brown Benton",
      },
      {
        id: 1,
        name: "Lesa Kline",
      },
      {
        id: 2,
        name: "Mayra Webb",
      },
      {
        id: 3,
        name: "Hancock Duran",
      },
      {
        id: 4,
        name: "Clarissa Lindsey",
      },
      {
        id: 5,
        name: "Ray Miranda",
      },
      {
        id: 6,
        name: "Lauren Douglas",
      },
      {
        id: 7,
        name: "Steele Ayers",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,698.63",
    age: 14,
    eyeColor: "brown",
    name: "Vazquez Petty",
    gender: "male",
    tags: ["excepteur", "do"],
    friends: [
      {
        id: 0,
        name: "Henderson Woodard",
      },
      {
        id: 1,
        name: "Gallagher Wilcox",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,606.57",
    age: 24,
    eyeColor: "blue",
    name: "Patricia Hyde",
    gender: "female",
    tags: ["et", "quis", "consectetur", "nisi", "deserunt"],
    friends: [
      {
        id: 0,
        name: "Bishop Parker",
      },
      {
        id: 1,
        name: "Edna Whitehead",
      },
      {
        id: 2,
        name: "Jerri Cole",
      },
      {
        id: 3,
        name: "Lesley Quinn",
      },
      {
        id: 4,
        name: "Ingram Avila",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,822.01",
    age: 22,
    eyeColor: "blue",
    name: "Stevens Ellis",
    gender: "male",
    tags: [],
    friends: [],
  },
  {
    isActive: false,
    balance: "$1,422.26",
    age: 12,
    eyeColor: "brown",
    name: "Howard Reid",
    gender: "male",
    tags: ["mollit"],
    friends: [
      {
        id: 0,
        name: "Nolan Skinner",
      },
      {
        id: 1,
        name: "Alta Gomez",
      },
      {
        id: 2,
        name: "Mooney Mcgee",
      },
      {
        id: 3,
        name: "Casey Hickman",
      },
      {
        id: 4,
        name: "Coleen Vaughn",
      },
      {
        id: 5,
        name: "Dee Best",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,169.74",
    age: 25,
    eyeColor: "blue",
    name: "Everett Horn",
    gender: "male",
    tags: [],
    friends: [],
  },
  {
    isActive: true,
    balance: "$2,994.82",
    age: 19,
    eyeColor: "brown",
    name: "Ayers Case",
    gender: "male",
    tags: ["tempor", "aliqua", "velit"],
    friends: [
      {
        id: 0,
        name: "Erma Sherman",
      },
      {
        id: 1,
        name: "Polly Emerson",
      },
      {
        id: 2,
        name: "Phyllis Bryant",
      },
      {
        id: 3,
        name: "Schultz Joyner",
      },
      {
        id: 4,
        name: "Little Dodson",
      },
      {
        id: 5,
        name: "Vera Noel",
      },
      {
        id: 6,
        name: "Hammond Bishop",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,551.78",
    age: 23,
    eyeColor: "blue",
    name: "Duran Mcconnell",
    gender: "male",
    tags: ["esse", "dolore", "cupidatat", "dolor"],
    friends: [
      {
        id: 0,
        name: "Miranda Blanchard",
      },
      {
        id: 1,
        name: "Alexander Crane",
      },
      {
        id: 2,
        name: "Ila Schmidt",
      },
      {
        id: 3,
        name: "Mindy Nichols",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,063.93",
    age: 24,
    eyeColor: "brown",
    name: "Powell Downs",
    gender: "male",
    tags: ["culpa"],
    friends: [
      {
        id: 0,
        name: "Barrera Carson",
      },
      {
        id: 1,
        name: "Reilly Kidd",
      },
      {
        id: 2,
        name: "Kerry Walker",
      },
      {
        id: 3,
        name: "Elisabeth Lynch",
      },
      {
        id: 4,
        name: "Deana Ballard",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,385.12",
    age: 26,
    eyeColor: "green",
    name: "Monroe Lowe",
    gender: "male",
    tags: ["eiusmod"],
    friends: [
      {
        id: 0,
        name: "Kerr David",
      },
      {
        id: 1,
        name: "Brenda Lawrence",
      },
      {
        id: 2,
        name: "Dyer Mckinney",
      },
      {
        id: 3,
        name: "Mavis Valdez",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,568.55",
    age: 19,
    eyeColor: "brown",
    name: "Deann Morales",
    gender: "female",
    tags: ["minim", "adipisicing"],
    friends: [
      {
        id: 0,
        name: "Clare Watts",
      },
      {
        id: 1,
        name: "Eloise Harris",
      },
      {
        id: 2,
        name: "Glenda Rose",
      },
      {
        id: 3,
        name: "Simpson Ashley",
      },
      {
        id: 4,
        name: "Betsy Turner",
      },
      {
        id: 5,
        name: "Davis Owens",
      },
      {
        id: 6,
        name: "Jenny Ross",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,166.31",
    age: 17,
    eyeColor: "brown",
    name: "Jackie Banks",
    gender: "female",
    tags: ["officia"],
    friends: [
      {
        id: 0,
        name: "Katelyn Heath",
      },
      {
        id: 1,
        name: "Watson Henderson",
      },
      {
        id: 2,
        name: "Earnestine Sears",
      },
      {
        id: 3,
        name: "Small Murphy",
      },
      {
        id: 4,
        name: "Franks Salas",
      },
      {
        id: 5,
        name: "Gay Mcpherson",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,170.25",
    age: 22,
    eyeColor: "brown",
    name: "Copeland Lee",
    gender: "male",
    tags: ["consectetur", "irure", "officia", "ex", "Lorem", "nulla"],
    friends: [
      {
        id: 0,
        name: "Lindsay Sims",
      },
      {
        id: 1,
        name: "Hillary Mann",
      },
      {
        id: 2,
        name: "Trisha Hardin",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,093.78",
    age: 14,
    eyeColor: "blue",
    name: "Jessie Lucas",
    gender: "female",
    tags: ["incididunt", "ea", "cillum", "sit"],
    friends: [
      {
        id: 0,
        name: "Olivia Wall",
      },
      {
        id: 1,
        name: "Rivas Clayton",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,758.52",
    age: 20,
    eyeColor: "blue",
    name: "Marietta Talley",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Janna Rivers",
      },
      {
        id: 1,
        name: "Leigh Humphrey",
      },
      {
        id: 2,
        name: "Roseann Pruitt",
      },
      {
        id: 3,
        name: "Ramos Bates",
      },
      {
        id: 4,
        name: "Romero Luna",
      },
      {
        id: 5,
        name: "Hobbs Mclaughlin",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,447.10",
    age: 17,
    eyeColor: "blue",
    name: "Tamara Frost",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Roslyn Morris",
      },
      {
        id: 1,
        name: "Merle Mccoy",
      },
      {
        id: 2,
        name: "Reese Meyer",
      },
      {
        id: 3,
        name: "Esther Murray",
      },
      {
        id: 4,
        name: "Wilma Fitzgerald",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,249.04",
    age: 29,
    eyeColor: "blue",
    name: "Randi Peck",
    gender: "female",
    tags: ["officia", "non", "anim", "consectetur", "duis", "labore"],
    friends: [
      {
        id: 0,
        name: "Corinne Patrick",
      },
      {
        id: 1,
        name: "Acosta Cross",
      },
      {
        id: 2,
        name: "Manning Potter",
      },
      {
        id: 3,
        name: "Madeleine Everett",
      },
      {
        id: 4,
        name: "Mia Wallace",
      },
      {
        id: 5,
        name: "Mcdowell York",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,509.58",
    age: 20,
    eyeColor: "green",
    name: "Latisha Miller",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Jean Baldwin",
      },
      {
        id: 1,
        name: "Simone Shaffer",
      },
      {
        id: 2,
        name: "Lancaster Ortiz",
      },
      {
        id: 3,
        name: "Sonja Mayo",
      },
      {
        id: 4,
        name: "Lou Barlow",
      },
      {
        id: 5,
        name: "Burris Francis",
      },
      {
        id: 6,
        name: "Liz Ruiz",
      },
      {
        id: 7,
        name: "Margret Strickland",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,493.19",
    age: 26,
    eyeColor: "blue",
    name: "Crystal Duke",
    gender: "female",
    tags: ["consectetur"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$2,514.17",
    age: 22,
    eyeColor: "brown",
    name: "Foley Phelps",
    gender: "male",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Knox Kim",
      },
      {
        id: 1,
        name: "Snow Reilly",
      },
      {
        id: 2,
        name: "Paige Stevenson",
      },
      {
        id: 3,
        name: "Castro Kent",
      },
      {
        id: 4,
        name: "Tyler Molina",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,120.11",
    age: 23,
    eyeColor: "green",
    name: "Concepcion Gilliam",
    gender: "female",
    tags: ["velit", "nostrud", "incididunt", "nisi", "velit", "cillum", "duis"],
    friends: [
      {
        id: 0,
        name: "Nadine Farmer",
      },
      {
        id: 1,
        name: "Leonard Wagner",
      },
      {
        id: 2,
        name: "Henson Pierce",
      },
      {
        id: 3,
        name: "Casey Baird",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,931.02",
    age: 12,
    eyeColor: "green",
    name: "Mara Clark",
    gender: "female",
    tags: [
      "deserunt",
      "excepteur",
      "nisi",
      "deserunt",
      "veniam",
      "qui",
      "fugiat",
    ],
    friends: [
      {
        id: 0,
        name: "Lauri Serrano",
      },
      {
        id: 1,
        name: "Hoffman Floyd",
      },
      {
        id: 2,
        name: "Beverly Walton",
      },
      {
        id: 3,
        name: "Langley Lott",
      },
      {
        id: 4,
        name: "Pansy Richards",
      },
      {
        id: 5,
        name: "Sosa Hendricks",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,112.20",
    age: 30,
    eyeColor: "brown",
    name: "Stokes Bird",
    gender: "male",
    tags: ["officia"],
    friends: [
      {
        id: 0,
        name: "Bowen Dillon",
      },
      {
        id: 1,
        name: "Susanne Hahn",
      },
      {
        id: 2,
        name: "Reba Hinton",
      },
      {
        id: 3,
        name: "Lucas Alford",
      },
      {
        id: 4,
        name: "Leon Lester",
      },
      {
        id: 5,
        name: "Melton Arnold",
      },
      {
        id: 6,
        name: "Shannon Albert",
      },
      {
        id: 7,
        name: "Allie Calderon",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,704.53",
    age: 18,
    eyeColor: "blue",
    name: "Dawson Cote",
    gender: "male",
    tags: ["enim", "consequat", "officia", "consectetur", "enim", "dolor"],
    friends: [
      {
        id: 0,
        name: "White Key",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,622.37",
    age: 26,
    eyeColor: "blue",
    name: "Annette Estes",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Hunter Richmond",
      },
      {
        id: 1,
        name: "Perkins Bonner",
      },
      {
        id: 2,
        name: "Odom Gay",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,719.38",
    age: 22,
    eyeColor: "blue",
    name: "Madden Manning",
    gender: "male",
    tags: ["aliqua", "incididunt", "sint", "ex", "ullamco"],
    friends: [
      {
        id: 0,
        name: "Willis Wolfe",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,691.45",
    age: 20,
    eyeColor: "blue",
    name: "Sanford Hopper",
    gender: "male",
    tags: ["commodo"],
    friends: [
      {
        id: 0,
        name: "Christie Kelley",
      },
      {
        id: 1,
        name: "Durham Warner",
      },
      {
        id: 2,
        name: "Santos Thomas",
      },
      {
        id: 3,
        name: "Hattie Whitfield",
      },
      {
        id: 4,
        name: "Reed Blake",
      },
      {
        id: 5,
        name: "Melisa Rowland",
      },
      {
        id: 6,
        name: "Martin Greene",
      },
      {
        id: 7,
        name: "Travis Dotson",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,275.72",
    age: 16,
    eyeColor: "blue",
    name: "Moore Zimmerman",
    gender: "male",
    tags: ["amet", "pariatur", "laboris", "eiusmod", "irure", "non", "aliqua"],
    friends: [
      {
        id: 0,
        name: "Rosalyn Oneil",
      },
      {
        id: 1,
        name: "Bass Rutledge",
      },
      {
        id: 2,
        name: "Carol Byers",
      },
      {
        id: 3,
        name: "Mcconnell Tyson",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,051.04",
    age: 18,
    eyeColor: "brown",
    name: "Claudette Berger",
    gender: "female",
    tags: ["sit", "laborum", "non", "quis", "ad"],
    friends: [],
  },
  {
    isActive: false,
    balance: "$3,776.00",
    age: 16,
    eyeColor: "blue",
    name: "Glover Hayes",
    gender: "male",
    tags: ["proident", "consectetur", "ut", "anim"],
    friends: [
      {
        id: 0,
        name: "Farmer Mejia",
      },
      {
        id: 1,
        name: "Alvarez Bush",
      },
      {
        id: 2,
        name: "Burnett Mercer",
      },
      {
        id: 3,
        name: "Osborne Prince",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,359.33",
    age: 30,
    eyeColor: "brown",
    name: "Augusta Sargent",
    gender: "female",
    tags: ["eu", "fugiat", "ipsum", "mollit"],
    friends: [
      {
        id: 0,
        name: "Alyce Norris",
      },
      {
        id: 1,
        name: "Benita Hunt",
      },
      {
        id: 2,
        name: "Huffman Kerr",
      },
      {
        id: 3,
        name: "Hodges Garrett",
      },
      {
        id: 4,
        name: "Tracie Young",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,155.47",
    age: 16,
    eyeColor: "blue",
    name: "Bobbi Wilkerson",
    gender: "female",
    tags: [
      "fugiat",
      "aute",
      "exercitation",
      "consequat",
      "enim",
      "exercitation",
      "occaecat",
    ],
    friends: [
      {
        id: 0,
        name: "Koch Goodman",
      },
      {
        id: 1,
        name: "Frieda Dunn",
      },
      {
        id: 2,
        name: "Shepherd Stephens",
      },
      {
        id: 3,
        name: "Latoya Padilla",
      },
      {
        id: 4,
        name: "Angie Mendoza",
      },
      {
        id: 5,
        name: "Hooper Pena",
      },
      {
        id: 6,
        name: "Ivy Moss",
      },
      {
        id: 7,
        name: "Sallie Martin",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,053.76",
    age: 13,
    eyeColor: "brown",
    name: "Coleman Pugh",
    gender: "male",
    tags: ["consequat"],
    friends: [
      {
        id: 0,
        name: "Armstrong Medina",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,589.76",
    age: 14,
    eyeColor: "green",
    name: "Eddie Donaldson",
    gender: "female",
    tags: ["eu", "voluptate", "magna", "est", "nostrud", "ullamco", "sint"],
    friends: [
      {
        id: 0,
        name: "Rosalinda Snow",
      },
      {
        id: 1,
        name: "Angelita Baker",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,374.98",
    age: 26,
    eyeColor: "green",
    name: "Cruz Mills",
    gender: "male",
    tags: ["reprehenderit", "dolore", "minim", "voluptate", "mollit"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$2,206.27",
    age: 15,
    eyeColor: "green",
    name: "Herman Dawson",
    gender: "male",
    tags: ["voluptate", "cillum", "irure", "non", "velit", "do", "commodo"],
    friends: [
      {
        id: 0,
        name: "Dixon Nieves",
      },
      {
        id: 1,
        name: "Cecilia Leon",
      },
      {
        id: 2,
        name: "Austin Lara",
      },
      {
        id: 3,
        name: "Freida Harding",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,281.60",
    age: 23,
    eyeColor: "blue",
    name: "Vang Abbott",
    gender: "male",
    tags: ["ipsum"],
    friends: [
      {
        id: 0,
        name: "Diaz Shields",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,910.54",
    age: 29,
    eyeColor: "green",
    name: "April Bauer",
    gender: "female",
    tags: ["nulla", "aliquip", "ad"],
    friends: [
      {
        id: 0,
        name: "Walters Erickson",
      },
      {
        id: 1,
        name: "Glenn Walter",
      },
      {
        id: 2,
        name: "Leonor Carey",
      },
      {
        id: 3,
        name: "Herring Hess",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,916.45",
    age: 17,
    eyeColor: "green",
    name: "Camille Nielsen",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Gamble Galloway",
      },
      {
        id: 1,
        name: "Christi Faulkner",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,758.60",
    age: 13,
    eyeColor: "blue",
    name: "Ramirez Burgess",
    gender: "male",
    tags: ["nisi", "sit", "magna", "fugiat", "do", "laborum", "proident"],
    friends: [
      {
        id: 0,
        name: "Michael Blevins",
      },
      {
        id: 1,
        name: "Christian Weiss",
      },
      {
        id: 2,
        name: "Sonia Camacho",
      },
      {
        id: 3,
        name: "Adela Frank",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,201.89",
    age: 24,
    eyeColor: "brown",
    name: "Roach Woods",
    gender: "male",
    tags: ["anim", "do", "eiusmod"],
    friends: [
      {
        id: 0,
        name: "Waters Mckay",
      },
      {
        id: 1,
        name: "Roy Morse",
      },
      {
        id: 2,
        name: "Tommie Kinney",
      },
      {
        id: 3,
        name: "Reyes Booker",
      },
      {
        id: 4,
        name: "Danielle Powell",
      },
      {
        id: 5,
        name: "Cathryn Walters",
      },
      {
        id: 6,
        name: "Stella Solomon",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,638.63",
    age: 29,
    eyeColor: "green",
    name: "Flora Pennington",
    gender: "female",
    tags: ["do", "quis", "cupidatat", "ex", "culpa"],
    friends: [
      {
        id: 0,
        name: "Harrington Neal",
      },
      {
        id: 1,
        name: "Odonnell Anthony",
      },
      {
        id: 2,
        name: "Sheree Cobb",
      },
      {
        id: 3,
        name: "Hughes Foreman",
      },
      {
        id: 4,
        name: "Janell Browning",
      },
      {
        id: 5,
        name: "Caitlin Santana",
      },
      {
        id: 6,
        name: "Winters Mosley",
      },
      {
        id: 7,
        name: "Tabitha Hensley",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,536.27",
    age: 30,
    eyeColor: "green",
    name: "Gail James",
    gender: "female",
    tags: ["exercitation"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$2,343.64",
    age: 22,
    eyeColor: "green",
    name: "Connie Harmon",
    gender: "female",
    tags: ["cupidatat", "officia", "cillum", "esse"],
    friends: [
      {
        id: 0,
        name: "Roman Pollard",
      },
      {
        id: 1,
        name: "Josephine Sharp",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,111.03",
    age: 18,
    eyeColor: "blue",
    name: "Shannon Cabrera",
    gender: "female",
    tags: ["mollit", "laboris", "ex"],
    friends: [
      {
        id: 0,
        name: "Leanne Schwartz",
      },
      {
        id: 1,
        name: "Brewer Atkins",
      },
      {
        id: 2,
        name: "Amie Burnett",
      },
      {
        id: 3,
        name: "Imelda Chang",
      },
      {
        id: 4,
        name: "Delores Langley",
      },
      {
        id: 5,
        name: "Kathleen Hampton",
      },
      {
        id: 6,
        name: "Tracey Battle",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,242.52",
    age: 24,
    eyeColor: "brown",
    name: "Tonya Alvarado",
    gender: "female",
    tags: ["pariatur", "incididunt", "irure", "officia", "id", "dolor", "ex"],
    friends: [
      {
        id: 0,
        name: "Christa Hoover",
      },
      {
        id: 1,
        name: "Geneva Livingston",
      },
      {
        id: 2,
        name: "Mckenzie Benjamin",
      },
      {
        id: 3,
        name: "Ryan Stephenson",
      },
      {
        id: 4,
        name: "Leanna Ayala",
      },
      {
        id: 5,
        name: "Atkinson Roberson",
      },
      {
        id: 6,
        name: "Rasmussen Hays",
      },
      {
        id: 7,
        name: "Keisha Daniel",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,728.92",
    age: 12,
    eyeColor: "brown",
    name: "Carla Warren",
    gender: "female",
    tags: ["dolore"],
    friends: [
      {
        id: 0,
        name: "Vicki Watson",
      },
      {
        id: 1,
        name: "Frederick Koch",
      },
      {
        id: 2,
        name: "Burks Hodges",
      },
      {
        id: 3,
        name: "Agnes Dalton",
      },
      {
        id: 4,
        name: "Marcie Bridges",
      },
      {
        id: 5,
        name: "Duke Norman",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,148.61",
    age: 17,
    eyeColor: "brown",
    name: "Morris Cruz",
    gender: "male",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Laverne Dean",
      },
      {
        id: 1,
        name: "Tami Stokes",
      },
      {
        id: 2,
        name: "Madge Snyder",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,637.04",
    age: 12,
    eyeColor: "blue",
    name: "Angelique Guthrie",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Mitchell Goodwin",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,503.31",
    age: 15,
    eyeColor: "blue",
    name: "Bernice Barnett",
    gender: "female",
    tags: ["officia", "nisi"],
    friends: [
      {
        id: 0,
        name: "Louisa Vance",
      },
      {
        id: 1,
        name: "Puckett Jensen",
      },
      {
        id: 2,
        name: "May Harrell",
      },
      {
        id: 3,
        name: "Elliott Sanchez",
      },
      {
        id: 4,
        name: "Moses Gutierrez",
      },
      {
        id: 5,
        name: "Moon Sweeney",
      },
      {
        id: 6,
        name: "Cooper Burke",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,643.13",
    age: 12,
    eyeColor: "blue",
    name: "Lenora Combs",
    gender: "female",
    tags: ["Lorem", "cupidatat", "exercitation", "culpa"],
    friends: [
      {
        id: 0,
        name: "Carson Stout",
      },
      {
        id: 1,
        name: "Houston Cantrell",
      },
      {
        id: 2,
        name: "Antonia Tucker",
      },
      {
        id: 3,
        name: "Rene Hill",
      },
      {
        id: 4,
        name: "Bernadette Farley",
      },
      {
        id: 5,
        name: "Sampson Randall",
      },
      {
        id: 6,
        name: "English Hurst",
      },
      {
        id: 7,
        name: "Josie Spears",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,096.36",
    age: 18,
    eyeColor: "green",
    name: "Ruby Brady",
    gender: "female",
    tags: ["et", "do", "amet"],
    friends: [
      {
        id: 0,
        name: "Roth Conway",
      },
      {
        id: 1,
        name: "Bette Hancock",
      },
      {
        id: 2,
        name: "Swanson Chapman",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,158.84",
    age: 16,
    eyeColor: "green",
    name: "Figueroa Cox",
    gender: "male",
    tags: ["ut", "commodo", "ut"],
    friends: [
      {
        id: 0,
        name: "Lynda Eaton",
      },
      {
        id: 1,
        name: "Ingrid Head",
      },
      {
        id: 2,
        name: "Powers Dickerson",
      },
      {
        id: 3,
        name: "Peck Chambers",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,684.29",
    age: 18,
    eyeColor: "green",
    name: "Elsa Bailey",
    gender: "female",
    tags: ["pariatur", "irure", "sunt"],
    friends: [
      {
        id: 0,
        name: "Etta Bernard",
      },
      {
        id: 1,
        name: "Brandi Walls",
      },
      {
        id: 2,
        name: "Buck Rosario",
      },
      {
        id: 3,
        name: "Goodwin Ramsey",
      },
      {
        id: 4,
        name: "Lora Gill",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,413.98",
    age: 22,
    eyeColor: "brown",
    name: "Dollie Castillo",
    gender: "female",
    tags: ["excepteur", "incididunt", "occaecat", "labore", "aliqua", "do"],
    friends: [
      {
        id: 0,
        name: "Veronica Pickett",
      },
      {
        id: 1,
        name: "Rosales Patton",
      },
      {
        id: 2,
        name: "Stephenson Graves",
      },
      {
        id: 3,
        name: "Claire Henson",
      },
      {
        id: 4,
        name: "Rodgers Anderson",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,098.44",
    age: 21,
    eyeColor: "green",
    name: "Gena Keller",
    gender: "female",
    tags: ["nisi", "velit", "consequat", "nulla"],
    friends: [
      {
        id: 0,
        name: "Yang Davenport",
      },
      {
        id: 1,
        name: "Rosanne Dyer",
      },
      {
        id: 2,
        name: "Keith Briggs",
      },
      {
        id: 3,
        name: "Marta Adams",
      },
      {
        id: 4,
        name: "Jacquelyn Hewitt",
      },
      {
        id: 5,
        name: "Williamson Glass",
      },
      {
        id: 6,
        name: "Hartman Perry",
      },
      {
        id: 7,
        name: "Andrews Soto",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,856.55",
    age: 22,
    eyeColor: "green",
    name: "Mckinney Schroeder",
    gender: "male",
    tags: ["minim", "incididunt", "laborum"],
    friends: [
      {
        id: 0,
        name: "Jo Gonzales",
      },
      {
        id: 1,
        name: "Hubbard Howard",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,146.88",
    age: 28,
    eyeColor: "brown",
    name: "Joan Salinas",
    gender: "female",
    tags: ["Lorem"],
    friends: [
      {
        id: 0,
        name: "Jimmie Meyers",
      },
      {
        id: 1,
        name: "Lindsey Barry",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,649.05",
    age: 24,
    eyeColor: "blue",
    name: "Downs Mccormick",
    gender: "male",
    tags: ["nulla", "anim", "cupidatat", "aliqua"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$3,633.35",
    age: 15,
    eyeColor: "blue",
    name: "Vega Acevedo",
    gender: "male",
    tags: ["cupidatat", "aliquip", "sit"],
    friends: [
      {
        id: 0,
        name: "Carver Foster",
      },
      {
        id: 1,
        name: "Alberta Mcneil",
      },
      {
        id: 2,
        name: "Cannon Myers",
      },
      {
        id: 3,
        name: "Hewitt Pacheco",
      },
      {
        id: 4,
        name: "Heather Yang",
      },
      {
        id: 5,
        name: "Ellis Alston",
      },
      {
        id: 6,
        name: "Sheila Bradley",
      },
      {
        id: 7,
        name: "Yates Sharpe",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,662.61",
    age: 28,
    eyeColor: "blue",
    name: "Rachael Dejesus",
    gender: "female",
    tags: ["do", "deserunt", "elit", "dolore", "dolore", "incididunt"],
    friends: [
      {
        id: 0,
        name: "Shelby Justice",
      },
      {
        id: 1,
        name: "Jerry Roman",
      },
      {
        id: 2,
        name: "Ruiz Ryan",
      },
      {
        id: 3,
        name: "Deanna Barber",
      },
      {
        id: 4,
        name: "Collins Sosa",
      },
      {
        id: 5,
        name: "Rosalie Spencer",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,958.56",
    age: 15,
    eyeColor: "brown",
    name: "Sophie Franklin",
    gender: "female",
    tags: ["consectetur", "dolor", "ea", "veniam", "et", "ut"],
    friends: [],
  },
  {
    isActive: true,
    balance: "$2,596.22",
    age: 27,
    eyeColor: "brown",
    name: "Annabelle Gibbs",
    gender: "female",
    tags: ["elit", "amet", "nisi", "magna", "nulla"],
    friends: [
      {
        id: 0,
        name: "Ratliff Kane",
      },
      {
        id: 1,
        name: "Deborah Hartman",
      },
      {
        id: 2,
        name: "Crosby Marshall",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,847.28",
    age: 30,
    eyeColor: "green",
    name: "Riddle Ward",
    gender: "male",
    tags: ["irure", "consectetur", "nisi"],
    friends: [],
  },
  {
    isActive: false,
    balance: "$1,900.34",
    age: 27,
    eyeColor: "green",
    name: "Gentry Velez",
    gender: "male",
    tags: ["quis", "cupidatat", "commodo"],
    friends: [
      {
        id: 0,
        name: "Ashley Burt",
      },
      {
        id: 1,
        name: "Brooks Chan",
      },
      {
        id: 2,
        name: "Lowe Sanders",
      },
      {
        id: 3,
        name: "Laurel England",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,224.12",
    age: 17,
    eyeColor: "blue",
    name: "Kasey Riddle",
    gender: "female",
    tags: [
      "reprehenderit",
      "est",
      "excepteur",
      "veniam",
      "nisi",
      "tempor",
      "velit",
    ],
    friends: [
      {
        id: 0,
        name: "Carpenter Gibson",
      },
      {
        id: 1,
        name: "Maddox Wells",
      },
      {
        id: 2,
        name: "Matilda Robinson",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,524.02",
    age: 19,
    eyeColor: "green",
    name: "Briana Page",
    gender: "female",
    tags: ["dolore", "commodo"],
    friends: [
      {
        id: 0,
        name: "Hull Love",
      },
      {
        id: 1,
        name: "Medina Horne",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,829.21",
    age: 21,
    eyeColor: "blue",
    name: "Lea Flores",
    gender: "female",
    tags: ["ad", "exercitation", "magna"],
    friends: [
      {
        id: 0,
        name: "Pope Morton",
      },
      {
        id: 1,
        name: "Elva Price",
      },
      {
        id: 2,
        name: "Abigail Vargas",
      },
      {
        id: 3,
        name: "Dianna Klein",
      },
      {
        id: 4,
        name: "Moran Knapp",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,660.28",
    age: 24,
    eyeColor: "blue",
    name: "Hayden Jarvis",
    gender: "male",
    tags: ["anim", "aute", "ex", "incididunt", "Lorem"],
    friends: [
      {
        id: 0,
        name: "Rowe Ramos",
      },
      {
        id: 1,
        name: "Lyons Russell",
      },
      {
        id: 2,
        name: "Gillespie Kramer",
      },
      {
        id: 3,
        name: "Sue Blackburn",
      },
      {
        id: 4,
        name: "Eugenia Petersen",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,317.60",
    age: 18,
    eyeColor: "green",
    name: "Chasity Garner",
    gender: "female",
    tags: ["in", "esse", "deserunt", "dolor", "labore", "irure"],
    friends: [
      {
        id: 0,
        name: "Leach Baxter",
      },
      {
        id: 1,
        name: "Carly Mercado",
      },
      {
        id: 2,
        name: "Francine Welch",
      },
      {
        id: 3,
        name: "Cantrell Nguyen",
      },
      {
        id: 4,
        name: "Pennington Durham",
      },
      {
        id: 5,
        name: "Valerie Dale",
      },
      {
        id: 6,
        name: "Murphy Benson",
      },
      {
        id: 7,
        name: "Sherri Lamb",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,745.55",
    age: 27,
    eyeColor: "blue",
    name: "Ophelia Rhodes",
    gender: "female",
    tags: ["fugiat", "do"],
    friends: [
      {
        id: 0,
        name: "Anna Whitney",
      },
      {
        id: 1,
        name: "Knapp Forbes",
      },
      {
        id: 2,
        name: "Alice Church",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,668.53",
    age: 26,
    eyeColor: "green",
    name: "Watkins Tate",
    gender: "male",
    tags: [],
    friends: [],
  },
  {
    isActive: false,
    balance: "$3,398.15",
    age: 23,
    eyeColor: "green",
    name: "Woodward Maddox",
    gender: "male",
    tags: ["ut", "aute", "aute", "et", "irure", "aliquip", "ea"],
    friends: [
      {
        id: 0,
        name: "Courtney Jennings",
      },
      {
        id: 1,
        name: "Nelda Rice",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,093.44",
    age: 30,
    eyeColor: "brown",
    name: "Maria Clemons",
    gender: "female",
    tags: [],
    friends: [],
  },
  {
    isActive: true,
    balance: "$3,431.93",
    age: 27,
    eyeColor: "blue",
    name: "Evans Casey",
    gender: "male",
    tags: ["irure", "voluptate", "culpa", "sunt", "proident"],
    friends: [
      {
        id: 0,
        name: "Mollie Shepard",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,985.60",
    age: 19,
    eyeColor: "brown",
    name: "Constance Marsh",
    gender: "female",
    tags: ["enim", "consequat", "fugiat", "anim"],
    friends: [
      {
        id: 0,
        name: "Fischer Roach",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,153.16",
    age: 23,
    eyeColor: "green",
    name: "Doreen Spence",
    gender: "female",
    tags: ["et", "ea", "sunt", "minim", "dolore"],
    friends: [
      {
        id: 0,
        name: "Berg Butler",
      },
      {
        id: 1,
        name: "Wendy Frazier",
      },
      {
        id: 2,
        name: "Santana Sparks",
      },
      {
        id: 3,
        name: "Hope Witt",
      },
      {
        id: 4,
        name: "Christina Mcintyre",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,302.97",
    age: 21,
    eyeColor: "brown",
    name: "Maritza Joseph",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Katherine Willis",
      },
      {
        id: 1,
        name: "Luna Evans",
      },
      {
        id: 2,
        name: "Navarro Caldwell",
      },
      {
        id: 3,
        name: "Cote Valencia",
      },
      {
        id: 4,
        name: "Townsend Carlson",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,468.00",
    age: 26,
    eyeColor: "brown",
    name: "Holmes Richardson",
    gender: "male",
    tags: ["duis", "non", "sint", "ea", "consectetur", "fugiat"],
    friends: [
      {
        id: 0,
        name: "Cardenas Lowery",
      },
      {
        id: 1,
        name: "Cox Delgado",
      },
      {
        id: 2,
        name: "Kemp Duffy",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,462.66",
    age: 17,
    eyeColor: "blue",
    name: "Juliette Bell",
    gender: "female",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Combs Irwin",
      },
      {
        id: 1,
        name: "Brooke Daniels",
      },
      {
        id: 2,
        name: "Jennie Stanton",
      },
      {
        id: 3,
        name: "Craft Summers",
      },
      {
        id: 4,
        name: "Ida Holt",
      },
      {
        id: 5,
        name: "Howell Patterson",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,270.08",
    age: 15,
    eyeColor: "blue",
    name: "Ware Lane",
    gender: "male",
    tags: ["amet", "labore", "eiusmod", "qui", "reprehenderit"],
    friends: [
      {
        id: 0,
        name: "Gates Atkinson",
      },
      {
        id: 1,
        name: "Hodge Sawyer",
      },
      {
        id: 2,
        name: "Mona Vazquez",
      },
      {
        id: 3,
        name: "Lorene Olsen",
      },
      {
        id: 4,
        name: "Carr Dominguez",
      },
      {
        id: 5,
        name: "Hebert Carter",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,100.26",
    age: 19,
    eyeColor: "brown",
    name: "Hanson Pate",
    gender: "male",
    tags: ["adipisicing", "pariatur", "excepteur", "occaecat", "ut"],
    friends: [
      {
        id: 0,
        name: "Madeline Barker",
      },
      {
        id: 1,
        name: "Garcia Gregory",
      },
      {
        id: 2,
        name: "Berta Gilmore",
      },
      {
        id: 3,
        name: "Maryann Saunders",
      },
      {
        id: 4,
        name: "Susie Herring",
      },
      {
        id: 5,
        name: "Bush Mcmahon",
      },
    ],
  },
  {
    isActive: false,
    balance: "$1,415.43",
    age: 13,
    eyeColor: "brown",
    name: "Vargas Harper",
    gender: "male",
    tags: ["aliquip", "commodo", "ex", "in", "ea", "id", "laboris"],
    friends: [
      {
        id: 0,
        name: "Marcia Marquez",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,984.73",
    age: 24,
    eyeColor: "brown",
    name: "Garza Rivas",
    gender: "male",
    tags: ["occaecat", "officia", "ad", "dolore"],
    friends: [
      {
        id: 0,
        name: "House Finley",
      },
      {
        id: 1,
        name: "Blanchard Lynn",
      },
      {
        id: 2,
        name: "Ortiz Potts",
      },
      {
        id: 3,
        name: "Florine Hayden",
      },
      {
        id: 4,
        name: "Jami Cherry",
      },
    ],
  },
  {
    isActive: false,
    balance: "$3,275.28",
    age: 24,
    eyeColor: "green",
    name: "Bray Robbins",
    gender: "male",
    tags: ["ullamco", "eiusmod", "quis"],
    friends: [
      {
        id: 0,
        name: "Nicole Newman",
      },
      {
        id: 1,
        name: "Vaughan Figueroa",
      },
      {
        id: 2,
        name: "Helene Pratt",
      },
      {
        id: 3,
        name: "Harper Velazquez",
      },
      {
        id: 4,
        name: "Buckley Sampson",
      },
      {
        id: 5,
        name: "Patrice Guerrero",
      },
      {
        id: 6,
        name: "Ethel Merrill",
      },
      {
        id: 7,
        name: "Calhoun George",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,978.76",
    age: 12,
    eyeColor: "green",
    name: "Mueller Jefferson",
    gender: "male",
    tags: [],
    friends: [
      {
        id: 0,
        name: "Tammie Vincent",
      },
      {
        id: 1,
        name: "Workman Rosales",
      },
      {
        id: 2,
        name: "Cora Roth",
      },
      {
        id: 3,
        name: "Rebecca Flowers",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,526.40",
    age: 29,
    eyeColor: "brown",
    name: "Stafford Duncan",
    gender: "male",
    tags: ["Lorem", "velit", "non", "commodo"],
    friends: [
      {
        id: 0,
        name: "Victoria Delacruz",
      },
      {
        id: 1,
        name: "Trina Mayer",
      },
      {
        id: 2,
        name: "Judy Knox",
      },
      {
        id: 3,
        name: "Mai Rosa",
      },
      {
        id: 4,
        name: "Farrell Wolf",
      },
      {
        id: 5,
        name: "Gilda Hogan",
      },
      {
        id: 6,
        name: "Krista Reed",
      },
      {
        id: 7,
        name: "Hall Chaney",
      },
    ],
  },
  {
    isActive: true,
    balance: "$2,992.89",
    age: 28,
    eyeColor: "brown",
    name: "Isabel Morgan",
    gender: "female",
    tags: ["pariatur", "consequat", "ad", "quis", "Lorem", "sit"],
    friends: [
      {
        id: 0,
        name: "Natalie Gaines",
      },
      {
        id: 1,
        name: "Brittany Moses",
      },
    ],
  },
  {
    isActive: true,
    balance: "$1,456.84",
    age: 24,
    eyeColor: "green",
    name: "Henrietta Clarke",
    gender: "female",
    tags: ["do", "qui"],
    friends: [
      {
        id: 0,
        name: "Valarie Dixon",
      },
      {
        id: 1,
        name: "Hinton Wilkins",
      },
    ],
  },
  {
    isActive: false,
    balance: "$2,954.07",
    age: 30,
    eyeColor: "brown",
    name: "Harriett Stevens",
    gender: "female",
    tags: ["elit"],
    friends: [
      {
        id: 0,
        name: "Tina Dunlap",
      },
      {
        id: 1,
        name: "Natalia Williams",
      },
      {
        id: 2,
        name: "Sheppard Barnes",
      },
    ],
  },
  {
    isActive: true,
    balance: "$3,146.59",
    age: 21,
    eyeColor: "green",
    name: "Nichols Navarro",
    gender: "male",
    tags: ["est", "ex", "aute", "amet"],
    friends: [
      {
        id: 0,
        name: "Perez Odom",
      },
      {
        id: 1,
        name: "Nelson Jenkins",
      },
      {
        id: 2,
        name: "Mcfadden Palmer",
      },
      {
        id: 3,
        name: "Carmella Rocha",
      },
      {
        id: 4,
        name: "Acevedo Pace",
      },
      {
        id: 5,
        name: "Kirk Gallagher",
      },
      {
        id: 6,
        name: "Carter Travis",
      },
      {
        id: 7,
        name: "Bridges Stark",
      },
    ],
  },
];
