let header = ["id", "title", "author", "lender", "borrower", "action"];
let data = [
  {
    id: "1",
    title: "book 1",
    author: "author 1",
    lender: "userc",
    borrower: "user b",
    action: "request next",
  },
  {
    id: "2",
    title: "book 2",
    author: "author 2",
    lender: "userd",
    borrower: " - ",
    action: "borrow",
  },
  {
    id: "3",
    title: "book 3",
    author: "author 3",
    lender: "userd",
    borrower: "user c",
    action: "requested by user b",
  },
];

let table = document.createElement("table");
let head = document.createElement("thead");
let row = document.createElement("tr");

for (let i = 0; i < header.length; i++) {
  let heading = document.createElement("th");
  heading.innerText = header[i];
  row.appendChild(heading);
}

head.appendChild(row);
table.appendChild(head);

let body = document.createElement("tbody");

for (let j = 0; j < data.length; j++) {
  let row1 = document.createElement("tr");
  for (let k = 0; k < header.length; k++) {
    let cell = document.createElement("td");
    cell.innerText = data[j][header[k]];
    row1.appendChild(cell);
  }
  body.appendChild(row1);
}

table.appendChild(body);
table.style.border = "1px solid black";
document.body.appendChild(table);
