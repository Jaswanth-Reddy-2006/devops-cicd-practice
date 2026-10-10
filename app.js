const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    message: "Deployed automatically with Docker CI/CD!"
  }));
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on port 3000");
});