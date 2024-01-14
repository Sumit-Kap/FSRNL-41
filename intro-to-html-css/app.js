"use strict";
// alert("In app.js file"); // external linking of javascript
//
const container = document.querySelector(".items-cont");
container.style.display = "flex";
container.innerHTML = "<p>Inside the container</p>";
const element = document.createElement("div");
document.querySelectorAll;
element.innerText = "Created a brand new element";

element.color = "white";

container.appendChild(element);

console.log(container);

const idContainer = document.querySelector("#container");

const button = document.createElement("button");

button.innerText = "remove";
button.onclick = (event) => {
  console.log(event);
  idContainer.remove();
};
button.style.position = "absolute";
button.style.top = "200px";
button.style.right = "0px";

document.body.appendChild(button);
// Array of object
const data = [
  { id: 1, title: "Book1", author: "author1" },
  { id: 1, title: "Book2", author: "author2" },
  { id: 1, title: "Book3", author: "author3" },
  { id: 1, title: "Book4", author: "author4" },
];

const column = ["id", "title", "author"]; // columns

const table = document.createElement("table");
table.style.border = "2px solid black";
const tableHead = document.createElement("thead"); // <thead>
// <tr>
// <th><td>id</td></th>
// <th>
//   <td>title</td>
// </th>
// <th></th></tr>
// </thead>
const tableRow = document.createElement("tr");
tableRow.style.border = "2px solid black";
tableHead.appendChild(tableRow);

for (let i = 0; i < column.length; i++) {
  const tableHeader = document.createElement("th");
  const tableData = document.createElement("td");

  tableData.innerText = column[i];

  tableHeader.appendChild(tableData);
  tableRow.appendChild(tableHeader);
}
table.appendChild(tableHead);
const demo = document.getElementById("demo");
demo.appendChild(table);
const tableBody = document.createElement("tbody");
for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");
  let td;
  const keysData = Object.keys(data[i]); // keys in that
  for (let j = 0; j < keysData.length; j++) {
    td = document.createElement("td");
    td.innerText = data[i][keysData[j]];
    tr.appendChild(td);
  }
  // for (let k = 0; k < arrTd.length; k++) {
  //   tr.appendChild(arrTd[k]);
  // }
  tableBody.appendChild(tr);
}
table.appendChild(tableBody);

// parsing HTML
// ---------HTML parsing-----------------------<script>
//                                                     stopped _________+++++++++
// _ represents downloading, + - execution

const obj = {
  name: "John",
  age: "25",
};
console.log(Object.keys(obj));

//conditional statments

const flag = false;

// if (flag) {
//   alert("true");
// } else if (!flag) {
//   alert("not true");
// } else if (0) {
//   alert("not true");
// } else {
//   alert("false");
// }
// switch case
switch (flag) {
  case false:
    // alert("1");
    break;
  case false:
    // alert("2");
    break;
  default:
    // alert("default case-3");
    break;
}

// different types of loops in javscript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  // i =0
  arr[i] = arr[i] * 2; // 2, 4, 6,8
}

for (let i of arr) {
  // used with arrays
  console.log(i);
}

const obj1 = {
  name: "John",
  age: 75,
  city: "canada",
};
// object & arrays both
for (let i in arr) {
  console.log(i, arr[i]);
}

arr.forEach(function (item, index) {
  console.log(item, index);
});

const arr2 = arr.map((item) => item * 2);
console.log(arr2);

// while(condition)
let i = 0;
while (i < arr2.length) {
  // logic
  console.log(arr2[i]);
  i++;
}
i = 0;
// It will always execute once even if the condition resolves to false
do {
  console.log("Inside do-while loop");
} while (i < 0); // false
// for(initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++) {
  console.log("test exit");
  // exit(0);
}

// console.log("printing", firstName);
// const firstName = "raghav"; // declaration + initialization;

{
  let age = 27;
}

// getName(); // function invokation

// function getName() { // Noraml functions are hoisted
//   // function definition
//   let lastName = "kapoor";
//   console.log(lastName);
// }

const getName = function () {
  // anonymous functions
  let lastName = "kapoor";
  console.log(lastName);
};
// IIFE - Immediately invoked function execution.
(function () {
  let a = "123";
  console.log(123);
})();

console.log(this); // In global scope your this keyword points to the window object

function normal() {
  console.log(this);
}
const arrow = () => {
  console.log(this);
};

normal();
arrow();

const obj88 = {
  fullName: "Sumit Kapoor",
};

const getName12 = () => {
  // default binding
  console.log(this.fullName, this);
  // function a() {
  //   console.log(this, "In here");
  //   return this.fullName;
  // }
  // a();
  return this.fullName;
};
console.log("pre", getName12.call(obj88)); // bind returns a new method
// console.log("pre", newName()); // unde

// call, apply, bind - explicit binding
//1. Memory mapping, execution - EC
// console.log("test", firstName);
const getName123 = () => {
  let firstName = "Sonali";
  //-----------------------
  return function () {
    console.log(firstName); // error
  };
};

const firstName = getName123();

firstName();

var department = "HR";
console.log(department);
function employeeDetails() {
  department = "Tech";
  return function (employeeSalary) {
    return function (employeeAge) {
      console.log("print", department, employeeAge, employeeSalary);
    };
  };
}
// var can be changed let and const ie variable shadowing
// closure vs chaining
// In
console.log(department);

// Inner function - outer function + global scope

console.log(employeeDetails()(12000)(28));

var batchSize = 30;
var course = "FRSNL";
var duration = 2;

function gfgFunction() {
  // Right now this keyword is pointing to window object.
  // How can i change this reference??
  console.log(arguments);
  console.log(
    "Important info",
    this,
    this.batchSize,
    this.course,
    this.duration
  );
}
gfgFunction();
const courseInfo = {
  batchSize: 50,
  course: "Java backend",
  duration: 4,
};

const gfgInstance = gfgFunction.bind(courseInfo, "Narendra Modi", "PM"); // bind always returns us a new function
console.log(typeof gfgInstance);
gfgInstance();

const courseInfo2 = {
  batchSize: 30,
  course: "DSA",
  duration: 1,
};

gfgFunction.call(courseInfo2, "Sandeep Jain", "CEO"); // the function is immediately invoked

const courseInfo3 = {
  batchSize: 70,
  course: "AI/ML",
  duration: 6,
};
gfgFunction.apply(courseInfo3, ["Jaishankar", "EAM"]);
// constructor function
function User(name, age, gender) {
  // this.name = name;
  // this.age = age;
  // this.gender = gender;
}

const user = new User("John Doe", 45, "Male");
console.log(user);

function User() {
  console.log(this);
  console.log(this.user);
}

const userA = {
  user: "Sumit",
  getUser: User,
};

console.log(userA.getUser()); // Sumit​
const refFunc = userA.getUser;
refFunc(); // undefined

console.log("global scope", this);
