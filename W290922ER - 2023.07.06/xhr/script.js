fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 3,
    title: "hello",
    body: "bye",
  }),
}).then((response) => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);

  // use only one!!
  //   response.text().then((bodyAsText) => console.log(bodyAsText));
  response.json().then((bodyAsObject) => console.log(bodyAsObject));
});
