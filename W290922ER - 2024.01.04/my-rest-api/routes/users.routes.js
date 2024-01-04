const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("works!");
});

module.exports = router;
