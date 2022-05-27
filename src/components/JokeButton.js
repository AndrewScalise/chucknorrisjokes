import React from 'react';

const JokeButton = ({generateJoke}) => {
    return (
        <button className="JokeButton" type="button" onClick={generateJoke}>Chuck Norris Joke</button>
    );
}

export default JokeButton;