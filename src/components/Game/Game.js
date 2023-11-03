import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    console.log("Received guess", tentativeGuess);
    const nextGuesses = [...guesses, tentativeGuess];
    console.log(nextGuesses);
    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <InputForm guesses={guesses} handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
