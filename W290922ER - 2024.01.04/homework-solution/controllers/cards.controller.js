const cards = require("../lib/cards");

function addController(req, res) {
  try {
    res.json(cards.add(req.body));
  } catch (err) {
    if (err.scope === "cards") {
      res.status(400).json({ error: err.errors });
    }
  }
}

function deleteController(req, res) {
  try {
    res.json(cards.remove(req.params.id));
  } catch (err) {
    if (err.scope === "cards") {
      res.status(400).json({ error: err.errors });
    }
  }
}

function getController(req, res) {
  try {
    res.json(cards.get(req.params.id));
  } catch (err) {
    if (err.scope === "cards") {
      res.status(400).json({ error: err.errors });
    }
  }
}

module.exports = {
  addController,
  deleteController,
  getController,
};
