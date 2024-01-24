import "./App.css";
// Images in the assets folder
import albumCover from "./assets/glass_beach_album.png";
// Hooks
import Count from "./components/Count";

function App() {
  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Advancing in React</h1>

        <h2>Images</h2>
        {/* Images in the public folder */}
        <img src="/cat.jpg" alt="Cat" width={500} />
        {/* Images in the assets folder */}
        <img src={albumCover} alt="glass beach album cover" width={500} />

        <h2>Hooks</h2>
        <h4>useState</h4>
        <Count />
      </div>
    </>
  );
}

export default App;
