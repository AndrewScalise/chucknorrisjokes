import React from "react";
import { Typography } from "@material-ui/core";

const JokeText = ({ joke }) => {
  return (
    <div className="JokeText">
      <Typography variant="h2" align="center">
        {joke}
      </Typography>
    </div>
  );
};

export default JokeText;
