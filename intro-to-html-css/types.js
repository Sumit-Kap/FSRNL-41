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

// types of function,scopes, variable shadowing, closures, prototypes.

//HTML + CSS + JS
// global scope
function a(){
  // outer scope
  (function(){
  // inner scope
  }())
  // b();
}

//currying - Maths

// function a(a){ 1
//   return (b)=>{ 2
//     return (c)=>{ 3
//       return a+b+c;
//     }
//   }
// }

// iterative approach - loops, recursive approach
for(let i=0; i<num; i++){

}
function sum(){
  if(){
    // some condition
  } // baseCondition
  sum();
}

// a(1)(2)(3)........() // 6
// a(1,2,3,4...)(5,6,7,8....)(9,10,11,12.....).........() // sum/multiplication
// sum(1,2)(3,4)(5,6)(7,8)(9,10)(11,12)(13,14)(15,16)()..........
// arr.map(i item *2)


console.log(this);