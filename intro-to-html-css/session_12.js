const fs = require("fs"); // older way to install modules - common JS
// import fs from 'fs' - // ESM
const demo = require("./demo");

console.log(demo());
try {
  //
  fs.readFile("./app2.js", (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(data);
    }
  });
} catch (err) {
  console.log(err);
}
// npm vs yarn
// npm is mature
// yarn - is not that mature.
// ni -
console.log("In here");
// IOC + callback hell

const p1 = new Promise.resolve(12);

p1.then(() => {}).catch();
