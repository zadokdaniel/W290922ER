const path = require("node:path");

const express = require("express");

const app = express();

app.use(require("morgan")("dev"));

app.use("/static", express.static(path.resolve(__dirname, "./public")));

app.use(express.json());

app.use("/api/cards", require("./routers/cards.router"));

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
