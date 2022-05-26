import chucknorrispic from "./chuck-norris-cartoon.png";
import JokeButton from "../components/JokeButton";
import "./App.css";

function App() {
  return (
    <div className="App">
        <img
          src={chucknorrispic}
          className="Chuck-Pic"
          alt="Chuck Norris Cartoon"
        />
        <JokeButton />
    </div>
  );
}

export default App;
