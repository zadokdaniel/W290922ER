import "./App.css";
import CompUseState from "./components/compUseState";
import ShortCircuit from "./components/shortCircuit";
import ShowImages from "./components/showImages";

function App() {
  return (
    <div className="App">
      <ShowImages />

      <hr />

      <ShortCircuit />

      <hr />
      <CompUseState />
    </div>
  );
}

export default App;
