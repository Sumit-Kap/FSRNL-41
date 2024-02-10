const fs = require("fs"); // commonJS way
const path = require("path");
console.log(__filename, __dirname);
//
// fs.mkdir(path.join(__dirname, "./test"), (err, response) => {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(`response is ${response} and directory got created`);
// });

// fs.writeFile(
//   path.join(__dirname, "./test", "fsrnl-40"),
//   "Hello learners",
//   (err, response) => {
//     if (err) {
//       throw new Error(err);
//     }
//     console.log(`file got created and this is the response ${response}`);
//   }
// );

fs.readFile(path.join(__dirname, "./test", "fsrnl-40"), (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`read from the file ${data}`);
});
