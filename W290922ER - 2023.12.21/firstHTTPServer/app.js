const http = require("node:http");

const server = http.createServer((req, res) => {
  // request
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  // response
  res.statusCode = 500;
  res.setHeader("server-name", "daniel's server");
  res.setHeader("server-name1", "daniel's server");
  res.setHeader("server-name2", "daniel's server");
  res.setHeader("server-name3", "daniel's server");

  res.write("hello");

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));


