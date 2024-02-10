const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    console.log(__dirname);
    fs.readFile(path.join(__dirname, "./public", "index.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, "Content-Type: text/html");
      res.end(data);
    });
  } else if (req.url === "/api/v1/getUserData") {
    const user = [
      { name: "John Doe", age: 24 },
      { name: "Mark Henry", age: 44 },
      { name: "Elon Musk", age: "50" },
    ];

    res.writeHead(200, "Content-Type: application/json");
    res.end(JSON.stringify(user));
  }
});
// HTTP status code
// 2xx - response is ok
// 3xx - response is not modified and is coming from cache
// 4xx - sending incorrect payload
// 5xx - internal server error

server.listen(3000, () => {
  console.log(`server is listening on PORT 3000`);
});
