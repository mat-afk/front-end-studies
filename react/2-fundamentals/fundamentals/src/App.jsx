import "./App.css";
// Importing components
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpression from "./components/TemplateExpression";
import Events from "./components/Events";

function App() {
  return (
    <>
      <h1>Fundamentals</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  );
}

export default App;
