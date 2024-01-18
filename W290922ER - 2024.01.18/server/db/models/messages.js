const pool = require("../connect");

async function getMessages() {
  const conn = await pool.getConnection();
  const [values] = await conn.query(
    `
          SELECT * FROM messages
    `
  );

  return values;
}

async function deleteMessage(id) {
  const conn = await pool.getConnection();

  const [[messageValue]] = await conn.query(
    "SELECT * FROM messages WHERE id=?",
    [id]
  );

  if (!messageValue) {
    throw new Error(`message (id: ${id}) not found`);
  }

  await conn.query(
    `
        DELETE FROM messages 
        WHERE id = ?
    `,
    [id]
  );

  return messageValue;
}

async function addMessage({ to, title } = {}) {
  if (!to || !title) {
    throw new Error("to and title must be provided");
  }

  if (to.length < 2 || title.length < 2) {
    throw new Error("to and title must be at least two characters long");
  }

  const conn = await pool.getConnection();
  const [{ insertId }] = await conn.query(
    `
        INSERT INTO messages (\`to\`, \`title\`)
        VALUES 
            (?, ?)
    `,
    [to, title]
  );

  const [[messageValue]] = await conn.query(
    "SELECT * FROM messages WHERE id=?",
    [insertId]
  );

  return messageValue;
}

module.exports = {
  getMessages,
  addMessage,
  deleteMessage,
};
