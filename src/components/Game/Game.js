import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import WordArea from "../WordArea/WordArea";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(guess.toUpperCase());
    const nextGuess = {
      id: Math.floor(Math.random() * 2000000),
      label: guess,
    };
    const nextGuesses = [...guesses, nextGuess];
    console.log(nextGuesses);
    setGuesses(nextGuesses);
    setGuess("");
  };

  return (
    <>
      <WordArea guesses={guesses} />
      <InputForm
        handleFormSubmit={handleFormSubmit}
        guess={guess}
        setGuess={setGuess}
      />
    </>
  );
}

export default Game;
