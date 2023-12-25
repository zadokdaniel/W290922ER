function log(req, res) {
  console.log(new Date().toLocaleTimeString(), req.method, req.url);
}

module.exports = { log };
