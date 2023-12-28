function urlParser(req) {
  const parsed = new URL(req.url, `http://localhost:${req.socket.localPort}`);
  req.path = parsed.pathname;
  req.query = Object.fromEntries(parsed.searchParams.entries());
}

module.exports = { urlParser };
