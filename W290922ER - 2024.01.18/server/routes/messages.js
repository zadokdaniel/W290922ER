const messagesManager = require("../lib/messages");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json(messagesManager.getMessages());
});

router.post("/", (req, res) => {
  try {
    res.json(messagesManager.addMessage(req.body));
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.json(messagesManager.deleteMessage(req.params.id));
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
