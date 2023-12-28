const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const { logger, urlParser } = require("./utils");

const messages = require("./lib/messages");

const server = http.createServer();

server.on("request", urlParser);
server.on("request", logger);

server.on("request", (req, res) => {
  if (req.method === "GET" && ["/", "/home"].includes(req.path)) {
    const filePath = path.resolve(__dirname, "./static/index.html");

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === "GET" && req.path === "/about") {
    const filePath = path.resolve(__dirname, "./static/about.html");

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === "GET" && req.path === "/contactUs") {
    const filePath = path.resolve(__dirname, "./static/contactUs.html");

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === "GET" && req.path === "/store") {
    const filePath = path.resolve(__dirname, "./static/store.html");

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === "GET" && req.path === "/static/styles.css") {
    const filePath = path.resolve(__dirname, "./static/styles/style.css");

    res.writeHead(200, {
      "Content-Type": "text/css",
    });

    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === "POST" && req.path === "/api/message") {
    try {
      const message = messages.addMessage(req.query.message);

      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify(message));
    } catch (e) {
      res.writeHead(400, { "Content-Type": "application/json" }).end(
        JSON.stringify({
          error: {
            message: e.message,
          },
        })
      );
    }

    return;
  }

  if (req.method === "GET" && req.path === "/api/message") {
    res
      .writeHead(200, { "Content-Type": "application/json" })
      .end(JSON.stringify(messages.getMessages()));

    return;
  }

  if (req.method === "DELETE" && req.path === "/api/message") {
    res
      .writeHead(200, {
        "Content-Type": "application/json",
      })
      .end(JSON.stringify(messages.clear()));
    return;
  }

  const filePath = path.resolve(__dirname, "./static/pageNotFound.html");

  res.writeHead(404, {
    "Content-Type": "text/html",
  });

  fs.createReadStream(filePath).pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
