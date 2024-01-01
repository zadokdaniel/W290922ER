const path = require("path");

const express = require("express");
const router = express.Router();

router.get(["/", "/home"], (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static/index.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static/about.html"));
});

router.get("/store", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static/store.html"));
});

router.get("/contactUs", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static/contactUs.html"));
});

router.get("/static/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static/styles/style.css"));
});

module.exports = router;
