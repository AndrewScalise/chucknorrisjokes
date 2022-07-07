import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { blue, green } from "@mui/material/colors";

const JokeButton = ({ generateJoke, loading, success }) => {
  const buttonSx = {
    ...(success && {
      bgcolor: blue[500],
      "&:hover": {
        bgcolor: blue[700],
      },
    }),
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", alignSelf: "center" }}>
      <Box sx={{ m: 5, position: "relative" }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={generateJoke}
        >
          Chuck Norris Joke
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default JokeButton;
