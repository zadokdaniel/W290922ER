const BASE = "http://localhost:3000/api/cards";

const $name = document.getElementById("name");
const $description = document.getElementById("description");
const $address = document.getElementById("address");

const $cards = document.getElementById("cards");

document.getElementById("send").addEventListener("click", () => {
  add({
    name: $name.value,
    description: $description.value,
    address: $address.value,
  }).then((response) => {
    if (!response.errors) {
      getCards()
        .then(renderCards)
        .then((html) => {
          cards.innerHTML = html;
        });
    }
  });
});

// API
function getCards(id) {
  if (id) {
    return fetch(`${BASE}/${id}`).then((response) => response.json());
  }

  return fetch(`${BASE}/`).then((response) => response.json());
}

function removeCard(id) {
  return fetch(`${BASE}/${id}`, { method: "DELETE" }).then((response) =>
    response.json()
  );
}

function add(card) {
  return fetch(`${BASE}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  }).then((response) => response.json());
}

function renderCard({ id, name, description, address } = {}) {
  return `
    <div>${id} - ${name}, ${description}, ${address}</div>
    `;
}

function renderCards(cards) {
  let html = "";
  for (const card of cards) {
    html += renderCard(card);
  }

  return html;
}
