const http = require("node:http");

const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");

  let counter = 0;
  const intervalId = setInterval(() => {
    socket.emit("message", `hello ${counter++}`);
  }, 1000);

  socket.on("disconnect", () => {
    clearInterval(intervalId);
  });
});

app.use(require("morgan")("dev"));

app.use(express.static(require("node:path").resolve(__dirname, "./static")));

app.use(require("cors")());
app.use(express.json());

// const storage = require("multer").diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, require("node:path").resolve(__dirname, "./photos"));
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       "upload_at_" +
//         Date.now() +
//         require("node:path").extname(file.originalname)
//     );
//   },
// });

// app.post(
//   "/profile",
//   require("multer")({ storage }).single("avatar"),
//   (req, res) => {
//     console.log(req.file);
//     console.log(req.body);
//   }
// );

app.use("/api/messages", require("./routes/messages"));
app.use("/api/messagesSQL", require("./routes/messagesSQL"));

const PORT = 3001;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
