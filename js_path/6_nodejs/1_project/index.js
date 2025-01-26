let http = require("http");
let fs = require("fs");

const PORT = 8000||process.env

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(__dirname + "/index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(__dirname + "/about.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact-me") {
    fs.readFile(__dirname + "/contact-me.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else {
    fs.readFile(__dirname + "/404.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
