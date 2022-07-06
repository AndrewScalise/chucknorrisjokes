import React from "react";
import Button from "@material-ui/core/Button";

const JokeButton = ({ generateJoke }) => {
  return (
    <div className="JokeButton">
      <Button
        align="center"
        variant="contained"
        color="primary"
        onClick={generateJoke}
      >
        Chuck Norris Joke
      </Button>
    </div>
  );
};

export default JokeButton;
