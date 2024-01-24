import "./App.css";
// Images in the assets folder
import albumCover from "./assets/glass_beach_album.png";
// Hooks
import Count from "./components/Count";
// List render
import ListRender from "./components/ListRender";
// Conditional render
import ConditionalRender from "./components/ConditionalRender";
// Props
import ShowUserName from "./components/ShowUserName";

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

        <h2>List render</h2>
        <ListRender />

        <h2>Conditional render</h2>
        <ConditionalRender />

        <h2>Props</h2>
        <ShowUserName name="Markiplier" />
        <ShowUserName name="Jacksepticeye" />
      </div>
    </>
  );
}

export default App;
