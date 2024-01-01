const express = require("express");

const morgan = require("morgan");

const app = express();

// function jsonBodyMW(req, res, next) {
//   if (req.get("content-type") !== "application/json") {
//     next();
//     return;
//   }

//   const body = [];

//   req.on("data", (chunk) => body.push(chunk));
//   req.on("end", () => {
//     req.body = JSON.parse(body.join(""));
//     next();
//   });
// }

app.use(morgan("dev"));

app.use(express.json(), express.urlencoded({ extended: true }));

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
