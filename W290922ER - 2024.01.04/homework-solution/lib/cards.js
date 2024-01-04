const Joi = require("joi");
const { v4: uuid_v4 } = require("uuid");

const cards = [];

class CardsValidationError extends Error {
  constructor(errors) {
    super("cards validation error");

    this.scope = "cards";
    this.errors = errors;
  }
}

function add(card = {}) {
  const { error } = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(2).max(1000).required(),
    address: Joi.string().min(2).max(100).required(),
  })
    .required()
    .validate(card, { abortEarly: false });

  if (error) {
    const errors = {};

    for (const {
      message,
      path: [key],
    } of error.details) {
      errors[key] = message;
    }

    throw new CardsValidationError(errors);
  }

  const newCard = {
    id: uuid_v4(),
    ...card,
  };

  cards.push(newCard);

  return newCard;
}

function remove(id) {
  const found = cards.findIndex((card) => card.id === id);

  if (found === -1) {
    throw new CardsValidationError({
      id: "card not found",
    });
  }

  return cards.splice(found, 1)[0];
}

function get(id) {
  if (!id) {
    return cards;
  }

  const found = cards.find((card) => card.id === id);

  if (!found) {
    throw new CardsValidationError({
      id: "card not found",
    });
  }

  return found;
}

module.exports = {
  add,
  remove,
  get,
};
