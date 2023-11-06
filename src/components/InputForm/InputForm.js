import React from "react";

const InputForm = ({ handleSubmitGuess, gameResult }) => {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        required
        aria-disabled={!gameResult}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      ></input>
    </form>
  );
};

export default InputForm;
