const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(messages.getMessages());
});

router.get("/:id", (req, res) => {
  res.json(messages.getById(req.params.id));
});

router.post("/", (req, res) => {
  try {
    res.json(messages.addMessage(req.query.message));
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.delete("/", (req, res) => {
  res.json(messages.clear());
});

module.exports = router;
