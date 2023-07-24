const root = ReactDOM.createRoot(document.getElementById("root"));

function MyComponent() {
  const [counter, setCounter] = React.useState(5);
  //   const a = React.useState(5);
  //   const counter = a[0]
  //   const setCounter = a[1]

  console.log("render");

  return React.createElement(
    "h1",
    {
      id: "a",
      //   onClick: () => alert("clicked"),
    },
    counter,
    React.createElement("br"),
    "hello",
    "bye",
    React.createElement(
      "button",
      { onClick: () => setCounter(counter + 1) },
      "btn"
    ),
    React.createElement("hr")
  );
}

function SimpleComponent(props) {
  console.log(props);

  return React.createElement(
    "div",
    { style: { border: `${props.size}px solid blue` } },
    "my div"
  );
}

const myElementsTree = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "My Site"),
  React.createElement("h2", null, "Some Components"),
  React.createElement(SimpleComponent, { a: 5, b: 7, size: 20 }),
  React.createElement(SimpleComponent, { size: 10 }),
  React.createElement(SimpleComponent, { size: 5 }),
  React.createElement(SimpleComponent, { size: 8 }),
  React.createElement(MyComponent)
  //   React.createElement(MyComponent),
  //   React.createElement(MyComponent),
  //   React.createElement(MyComponent)
);

console.log(myElementsTree);
root.render(myElementsTree);
