fetch("http://localhost:3001/api/messagesSQL")
  .then((resp) => resp.json())
  .then((body) => (document.body.innerHTML = JSON.stringify(body)));
