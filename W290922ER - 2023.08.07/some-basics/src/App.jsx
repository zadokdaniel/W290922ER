import { Fragment } from "react";
import "./App.css";

function ListObjects() {
  const users = [
    { id: 1, name: "daniel", age: 29, email: "z@gmail" },
    { id: 2, name: "lora", age: 30, email: "l@gmail.com" },
    { id: 3, name: "yoram", age: 70, email: "y@gmail.com" },
  ];

  if (!users.length) {
    return <div>no users yet...</div>;
  }

  return (
    <div className="users">
      {users.map((user) => {
        return (
          <Fragment key={user.id}>
            <h1>
              {user.name} ({user.age})
            </h1>
            <h2>{user.email}</h2>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}

function List() {
  const names = ["daniel", "avi", "lora", "carmit", "haim"];

  // const lis = [];
  // for (const name of names) {
  //   lis.push(<li>{name}</li>);
  // }

  if (!names.length) {
    return <div>no names for now, come back later...</div>;
  }

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

function ConditionalRendering({ shouldShow }) {
  // if (!shouldShow) {
  //   return (
  //     <div>
  //       <span className="bg-success">not showing</span>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <span className="bg-danger">showing</span>
  //   </div>
  // );

  return (
    <div>
      <span className={`bg-${shouldShow ? "success" : "danger"}`}>
        {shouldShow ? "showing" : "not showing"}
      </span>
    </div>
  );
}

function Headers({ title, subTitle }) {
  return (
    <>
      <h1 className="display-3 m-0">{title}</h1>
      <h2 className="h5 m-0">{subTitle}</h2>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ListObjects />

      <hr />
      <List />

      <hr />
      <ConditionalRendering />

      <hr />

      <div className="page">
        <Headers title="hello" subTitle="again" />

        <button
          onClick={() => {
            console.log("hello");
          }}
          className="btn btn-primary"
        >
          click
        </button>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptas praesentium cum aliquid quasi itaque cumque molestiae, nihil,
          atque, natus inventore id. Provident perferendis inventore numquam
          accusantium quis nemo magnam.
        </p>
      </div>
    </div>
  );
}

export default App;
