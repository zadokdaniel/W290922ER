import "./App.css";
import NamesList from "./components/namesList";
import UsersTable from "./components/usersTable";
import UsersData from "./data/usersInformation";

function App() {
  return (
    <div className="App">
      <NamesList />
      <NamesList names={["danile", "yoram"]} />

      <UsersTable users={UsersData} />
    </div>
  );
}

export default App;
