const http = require("node:http");
const { log } = require("./utils/serverLogs");
const { parseURL } = require("./utils/serverParseURL");
const { htmlTemplate } = require("./utils/htmlTemplate");
const path = require("path");
const fs = require("fs");

function endpoints(req, res) {
  if (req.method === "GET" && req.path === "/a/b/c/d/e/f/index.html") {
    res
      .writeHead(200, {
        "Content-Type": "text/html",
        header1: "value1",
        header2: "value2",
      })
      .end(
        htmlTemplate({
          title: "Daniel's Server",
          body: "<h1>hello</h1>",
          head: '<link rel="stylesheet" href="/styles.css">',
        })
      );

    return;
  }

  if (req.method === "GET" && req.path === "/users") {
    res
      .writeHead(200, {
        "Content-Type": "application/json",
      })
      .end(
        JSON.stringify({
          a: 5,
          b: 10,
        })
      );
    return;
  }

  if (req.method === "GET" && req.path === "/styles.css") {
    res.setHeader("Content-Type", "text/css");
    res.end("body {background-color: red;}");
    return;
  }

  if (req.method === "GET" && req.path === "/daniel") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const file = fs.createReadStream(
      path.resolve(__dirname, "./static/daniel.html")
    );
    file.pipe(res);
    return;
  }

  res
    .writeHead(404, {
      "Content-Type": "text/html",

      header1: "some value",
    })
    .end(
      htmlTemplate({
        title: "Page Not Found",
        body: "<h1>Page Not Found</h1>",
      })
    );
}

const server = http.createServer();

server.on("request", log);
server.on("request", parseURL);
server.on("request", endpoints);

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
