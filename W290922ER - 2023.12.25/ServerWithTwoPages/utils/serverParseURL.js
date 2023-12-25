function parseURL(req, res) {
  const url = new URL(req.url, `http://localhost:${req.socket.localPort}`);
  req.query = url.searchParams;
  req.path = url.pathname;
}

module.exports = { parseURL };
