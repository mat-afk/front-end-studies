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

        {/* Inline styles */}
        <h3 style={{ color: "blue", border: "none", padding: "25px" }}>
          Inline styles
        </h3>
      </div>
    </>
  );
}

export default App;
