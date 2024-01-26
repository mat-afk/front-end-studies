import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <div className="App">
        <h1>CSS in React</h1>

        {/* Global CSS */}
        <h3>Global CSS</h3>

        {/* Component based CSS */}
        <MyComponent />
      </div>
    </>
  );
}

export default App;
