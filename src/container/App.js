import React, { useState } from "react";
import chucknorrispic from "./chuck-norris-cartoon.png";
import JokeButton from "../components/JokeButton";
import JokeText from "../components/JokeText";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const generateJoke = () => {
    setSuccess(false);
    setLoading(true);
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((generatedJoke) => {
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
          setJoke(generatedJoke.value);
        }, 2000);
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
      <JokeButton
        generateJoke={generateJoke}
        loading={loading}
        success={success}
      />
      <JokeText joke={joke} />
    </div>
  );
};

export default App;
