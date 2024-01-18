const messagesManager = require("../db/models/messages");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json(await messagesManager.getMessages());
});

router.post("/", async (req, res) => {
  try {
    res.json(await messagesManager.addMessage(req.body));
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await messagesManager.deleteMessage(req.params.id));
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
