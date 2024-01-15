const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send("Access denied. No token provided.");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = {
  authorize,
};
