const messages = [];

function addMessage(message) {
  if (typeof message !== "string" || message.length < 2) {
    throw new Error("message must be at least 2 characters");
  }

  const newMessage = {
    message,
    createdAt: new Date(),
  };

  messages.push(newMessage);

  return newMessage;
}

function getMessages() {
  return messages;
}

function clear() {
  return messages.splice(0);
}

module.exports = {
  getMessages,
  clear,
  addMessage,
};
