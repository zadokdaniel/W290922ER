function logger(req) {
  console.log(new Date().toLocaleTimeString(), req.method, req.path);
}

module.exports = {
  logger,
};
