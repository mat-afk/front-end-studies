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
// Props destructuring
import Greeting from "./components/Greeting";
// Fragment
import MyFragment from "./components/MyFragment";
// Children
import Container from "./components/Container";

const greeteds = [
  {
    user: "Python fella",
    email: "python@gmail.com",
    verificationToken: "789012",
  },
  { user: "C boy", email: "c@outlook.com", verificationToken: "GHIJKL" },
  { user: "Rust lad", email: "rust@icloud.com", verificationToken: "MNOPQR" },
];

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
        <h4>Reuse of components</h4>
        <ShowUserName name="Jacksepticeye" />

        <h2>Props destructuring</h2>
        <Greeting
          user="Gopher guy"
          email="gopher@hotmail.com"
          verificationToken="123456"
        />
        <h4>Reuse of components</h4>
        <Greeting
          user="Java pal"
          email="java@yahoo.com"
          verificationToken="ABCDEF"
        />

        <h2>List rendering with components</h2>
        {greeteds.map((greeted) => (
          <Greeting
            key={greeted.verificationToken}
            user={greeted.user}
            email={greeted.email}
            verificationToken={greeted.verificationToken}
          />
        ))}

        <h2>Fragment</h2>
        <MyFragment />

        <h2>Children</h2>
        <Container>
          <p>Children JSX passed by props</p>
        </Container>
      </div>
    </>
  );
}

export default App;
