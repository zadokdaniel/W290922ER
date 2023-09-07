import "./App.css";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
