const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const { logger, urlParser } = require("./utils");

const messages = require("./lib/messages");

const server = http.createServer();

server.on("request", urlParser);
server.on("request", logger);

const extension = {
  ".html": "text/html",
  ".css": "text/css",
};

function file(absolutePath) {
  return (req, res) => {
    const filePath = absolutePath;

    res.writeHead(200, {
      "Content-Type": extension[path.parse(absolutePath).ext] ?? "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
  };
}

const endpoints = {
  GET: {
    "/": file(path.resolve(__dirname, "./static/index.html")),
    "/home": file(path.resolve(__dirname, "./static/index.html")),
    "/about": file(path.resolve(__dirname, "./static/about.html")),
    "/contactUs": file(path.resolve(__dirname, "./static/contactUs.html")),
    "/store": file(path.resolve(__dirname, "./static/store.html")),
    "/static/styles.css": file(
      path.resolve(__dirname, "./static/styles/style.css")
    ),
    "/api/message": (req, res) => {
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(messages.getMessages()));
    },
  },
  DELETE: {
    "/api/message": (req, res) => {
      res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify(messages.clear()));
    },
  },
  POST: {
    "/api/message": (req, res) => {
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
    },
  },
  "*": (req, res) => {
    const filePath = path.resolve(__dirname, "./static/pageNotFound.html");

    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    fs.createReadStream(filePath).pipe(res);
  },
};

server.on("request", (req, res) => {
  const fn =
    endpoints?.[req.method]?.[req.path] ??
    endpoints?.[req.method]?.["*"] ??
    endpoints?.["*"];

  if (!fn) {
    res.writeHead(404).end("no such location");
    return;
  }

  fn(req, res);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
