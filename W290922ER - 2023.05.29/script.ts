// interface starts with uppercase letter. set a name for an object structure type
interface User {
  name: string;
  email: string;
  address: {
    city: string;
    number: number;
  };
  role: "admin" | "editor" | "contributor";
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

let user: User = {
  role: "admin",
  address: {
    city: "tlv",
    number: 5,
  },
  email: "",
  name: "skfj",
};

let users: User[] = [];

let akdfjdsfj: { shalom: number; name?: string };
let kfdja2: number[];
let kfdja: { a: number }[] = [{ a: 55, b: 3 }];

let a: ({ a: string } | number)[];
let adfasd: Array<{ a: string } | number> = [43, 43, 43, 54, { a: "dsaf" }];
let adfasd1: Array<number | string | { a: number }>;

let arrayOfArrays: string[][];
arrayOfArrays = [];
arrayOfArrays = "";
arrayOfArrays = [[], []];
arrayOfArrays = [["adsfsd", "dsfdsafsdfs"], []];

let arrayOfArrays2: Array<Array<string>>;
let arrayOfArrays3: Array<string[]>;

let adsfsdf = kfdja[0].a;

// function dsfasdfasdf(a1: TYPE, a2: TYPE, a3?: TYPE): TYPE {}

let myFn: (num1: number, num2: number) => number;

myFn = (a: string, b: string) => 4;

let aaaa: any;
aaaa = 434;
aaaa = myFn


let a11: "hello"
a11 = "hello"


/***
 *
 * create variables which can receive only "hello", "hello" or "bye", 4, 4 or 5, string, number, boolean , undefined, null, or any explicitly
 * create variables which can receive only string, number, boolean , undefined, null, or any implicitly
 *
 * 
 * create interface which describes a Product
 * create interface which describes ProductsList (include properties for products and category)
 * create an array of product lists
 *
 *
 */


// {
//   category: "clothing", 
//   products: [
//     // PRODUCT,PRODUCT, PRODUCT
//   ]
// }

