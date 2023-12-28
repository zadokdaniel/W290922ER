const path = require("node:path");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString(), req.method, req.path);
  next();
});

app.post("/d", (req, res) => {
  console.log(req.method);
  console.log(req.originalUrl);
  console.log(req.path);
  console.log(req.query);
  console.log(req.headers);
  console.log(req.header("hello"));
  console.log(req.body);

  res.status(201);
  res.set({
    header1: "value1",
    header2: "value2",
  });

  res.set("header3", "value3");

  //   res.write("first chunk");
  //   res.end("last chunk");

  // content type application/json -> JSON.stringify -> write -> end
  //   res.json({
  //     a: 5,
  //     b: 10,
  //   });

  // incase of string: content type text/html -> write -> end
  //   res.send("daniel");

  // incase of object: runs res.json
  //   res.send({ a: 5, b: 10 });

  // reads the file -> set content type based on file extension -> pipe to client -> end
  res.sendFile(path.resolve(__dirname, "./static/about.html"));
});

app.get("/a/b", (req, res) => {
  res.end("you called GET /a/b 1");
});
app.get("/a/b", (req, res) => {
  res.end("you called POST /a/b 2");
});
app.get("/a/b/c", (req, res) => {
  res.end("you called GET /a/b/c");
});
app.get("/a", (req, res) => {
  res.end("you called GET /a");
});

app.all("*", (req, res) => {
  res.end("daniel");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
