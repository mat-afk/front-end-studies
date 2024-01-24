import "./App.css";
// Images in the assets folder
import albumCover from "./assets/glass_beach_album.png";

function App() {
  return (
    <>
      <div className="App">
        <h1>Advancing in React</h1>
        {/* Images in the public folder */}
        <img src="/cat.jpg" alt="Cat" width={500} />
        {/* Images in the assets folder */}
        <img src={albumCover} alt="glass beach album cover" width={500} />
      </div>
    </>
  );
}

export default App;
