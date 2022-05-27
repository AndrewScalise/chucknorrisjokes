import React, { useState } from "react";
import chucknorrispic from "./chuck-norris-cartoon.png";
import JokeButton from "../components/JokeButton";
import JokeText from "../components/JokeText";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((generatedJoke) => {
        console.log("generatedJoke", generatedJoke);
        setJoke(generatedJoke.value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <img
        src={chucknorrispic}
        className="Chuck-Pic"
        alt="Chuck Norris Cartoon"
      />
      <JokeButton generateJoke={generateJoke} />
      <JokeText joke={joke} />
    </div>
  );
};

export default App;
