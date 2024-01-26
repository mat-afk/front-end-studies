import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const isUserAuthenticated = true;
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

        {/* Dynamic inline CSS */}
        <h3 style={isUserAuthenticated ? { color: "green" } : { color: "red" }}>
          Dynamic inline CSS
        </h3>

        {/* Dynamcic CSS classes */}
        <h3 className={isUserAuthenticated ? "authenticated" : ""}>
          Dynamic CSS classes
        </h3>
      </div>
    </>
  );
}

export default App;
