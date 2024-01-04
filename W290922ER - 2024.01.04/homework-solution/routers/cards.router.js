const router = require("express").Router();

const {
  addController,
  deleteController,
  getController,
} = require("../controllers/cards.controller");

router.get("/", getController);
router.get("/:id", getController);
router.delete("/:id", deleteController);
router.post("/", addController);

module.exports = router;
