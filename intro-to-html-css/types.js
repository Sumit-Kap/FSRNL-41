const num = 12345n;

console.log(typeof num); // number;

let str1 = "Hey";
let str2 = "this is full stack course";
let phrase1 = `${str2} in react and node`; // template string in javascript // after ES6

let phrase2 = str2 + "in react and node"; // before ES6

console.log(phrase1);
console.log(phrase2);

let value = null;

console.log(typeof value);

let age;

console.log(age, typeof undefined);

const user = {
  name: "Sumit",
  age: 25,
  address: null,
  name: "John Doe",
};

console.log(user.age, user["name"]);

const uniqueKey = Symbol("store");
const generateKey = Symbol.for("Sumit");

console.log(uniqueKey.toString(), generateKey.toString());
