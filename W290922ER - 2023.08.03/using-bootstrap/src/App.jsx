import "./App.css";
import ColorPicker from "./components/colorPicker";
import SimpleCounter from "./components/simpleCounter";

function App() {
  return (
    <div className="App">
      <SimpleCounter />

      <hr />

      <ColorPicker initialColor="red" />
      <ColorPicker />
    </div>
  );
}

export default App;
