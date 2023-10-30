import httpService from "./httpService";

// {
//   bizName: Joi.string().min(2).max(255).required(),
//   bizDescription: Joi.string().min(2).max(1024).required(),
//   bizAddress: Joi.string().min(2).max(400).required(),
//   bizPhone: Joi.string()
//     .min(9)
//     .max(10)
//     .required()
//     .regex(/^0[2-9]\d{7,8}$/),
//   bizImage: Joi.string().min(11).max(1024)
// }

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAll() {
  return httpService.get("/cards");
}

export function getCard(id) {
  return httpService.get(`/cards/${id}`);
}

export function deleteCard(id) {
  return httpService.delete(`/cards/${id}`);
}

export function updateCard(id, card) {
  return httpService.put(`/cards/${id}`, card);
}

const cardsService = {
  createCard,
  getAll,
  getCard,
  deleteCard,
  updateCard,
};

export default cardsService;
