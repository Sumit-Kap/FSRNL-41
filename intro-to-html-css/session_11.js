// "use strict";

console.log(this); // ex

function User() {
  // register
  console.log(this.name);
}

var name = "Sumit Kapoor"; // register
// Macrotask
// window , Web APIs, window object
const id = setTimeout(() => {
  // It will push it into callback queue- Microtask and macrotask
  console.log("Timeout over");
}, 1000);
clearTimeout(id);
const id2 = setInterval(() => {
  console.log("Hello");
  clearInterval(id2);
}, 1000);

// Microtask
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 1000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log("error", err)); // pending, fulfilled

User(); // executing the user method

// JS - Synchronous in nature
// does the execution line by line
// asynchronous code setInterval, setTimeout, promises, callbacks, async-await - callback queue

// setTimeout(function(){
//   setTimeout((function))
// },1000);

// Amazon - orders -> payments -> notify -> invoice.

// const order = require("order");
// const payment = require("payment");

// order.create_order((err, response) => {
//   payment.capture_payment((err, response) => {
//     notify.notifyUser((err, response) => {
//       // We will not be able to come out of the callback.
//     });
//   });
// });

// callback hell + Inversion of control
// Promise way

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    response.json().then((results) => {
      // not readable
      console.log("printing", results);
    });
  })
  .catch((err) => console.log(err));

// Promise chaining
// window part of global
// node-fetch
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    console.log("printing 2nd ", results);
  })
  .catch();

// async + await

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    if (data.length > 100) {
      throw new Error("OOps sending more than 100 records");
    }
    console.log("printing 3rd", data);
  } catch (err) {
    console.log("logging the errors", err);
  }
}

getData();

function calculateSum(a, b) {
  if (typeof a !== number && typeof b !== number) {
    throw new Error("Please pass numbers");
  }
  return a + b;
}

// async function higherOrderSum(cb){
//   cb("John", "doe");
// }
// higherOrderSum(calculateSum);
