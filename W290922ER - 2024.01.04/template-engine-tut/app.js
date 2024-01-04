const express = require("express");

const app = express();

app.engine("handlebars", require("express-handlebars").engine());
app.set("view engine", "handlebars");

app.use(require("morgan")("dev"));

app.get("/hello", (req, res) => {
  res.render("hello", { name: "<h1>hello</h1>" });
});

app.get("/about", (req, res) => {
  res.render("about", { isTrue: false });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
