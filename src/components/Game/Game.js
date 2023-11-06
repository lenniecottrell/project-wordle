import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import GuessResults from "../GuessResults/GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];

    if (gameResult !== "win" && nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lose");
    }

    console.log(nextGuesses);

    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameResult("win");
      return;
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <InputForm
        guesses={guesses}
        handleSubmitGuess={handleSubmitGuess}
        gameResult={gameResult}
      />
      {!!gameResult && gameResult === "win" ? (
        <HappyBanner guesses={guesses.length} />
      ) : (
        ""
      )}
      {!!gameResult && gameResult === "lose" ? (
        <SadBanner answer={answer} />
      ) : (
        ""
      )}
    </>
  );
}

export default Game;
