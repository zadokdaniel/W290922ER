const path = require("path");

const express = require("express");

const messages = require("./lib/messages");

const app = express();

app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString(), req.method, req.path);
  next();
});

app.use((req, res, next) => {
  if (req.query.password !== "1234") {
    res.status(400).send("unauthorized");
    return;
  }

  next();
});

app.use("/", require("./routes/pages.routes"));
app.use("/api/messages", require("./routes/messages.routes"));

app.use("/daniel", (req, res) => {
  console.log(req.path);
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/pageNotFound.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
