import "./App.css";
import Todo from "./components/todo";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { counter, decrement, increment } = useCounter();
  const {
    counter: counter2,
    decrement: decrement2,
    increment: increment2,
  } = useCounter();

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>

      <button onClick={decrement2}>-</button>
      {counter2}
      <button onClick={increment2}>+</button>

      <div className="container-sm mt-2">
        <Todo />
      </div>
    </div>
  );
}

export default App;
