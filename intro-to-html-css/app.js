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
