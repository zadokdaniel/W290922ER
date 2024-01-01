const { v4: uuid_v4 } = require("uuid");

const messages = [];

function addMessage(message) {
  if (typeof message !== "string" || message.length < 2) {
    throw new Error("message must be at least 2 characters");
  }

  const newMessage = {
    id: uuid_v4(),
    message,
    createdAt: new Date(),
  };

  messages.push(newMessage);

  return newMessage;
}

function getMessages() {
  return messages;
}

function getById(id) {
  return messages.find((message) => message.id === id) ?? null;
}

function clear() {
  return messages.splice(0);
}

module.exports = {
  getMessages,
  getById,
  clear,
  addMessage,
};
