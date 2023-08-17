import "./App.css";
import Counter from "./components/counter";
import Immutability from "./components/immutability";

function App() {
  return (
    <div className="App">
      <Counter
        max={10}
        min={-10}
        step={2}
        start={0}
        onChange={(e) => console.log("changed", e)}
        onReachedRange={console.log}
      />
      {/* <Immutability /> */}
      {/* <Inputs /> */}
    </div>
  );
}

export default App;
