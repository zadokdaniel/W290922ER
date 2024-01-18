const { v4: uuid_v4 } = require("uuid");

let messages = [];

function getMessages() {
  return messages;
}

function addMessage({ to, title } = {}) {
  if (!to || !title) {
    throw new Error("to and title must be provided");
  }

  if (to.length < 2 || title.length < 2) {
    throw new Error("to and title must be at least two characters long");
  }

  const newMessage = {
    id: uuid_v4(),
    title,
    to,
    createdAt: new Date(),
  };

  messages.push(newMessage);
  return newMessage;
}

function deleteMessage(id) {
  const messageIndex = messages.findIndex((message) => message.id === id);

  if (messageIndex === -1) {
    throw new Error(`message id (${id}) not found`);
  }

  return messages.splice(messageIndex, 1)[0];
}

module.exports = {
  getMessages,
  addMessage,
  deleteMessage,
};
