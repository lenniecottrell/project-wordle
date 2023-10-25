import React from "react";

const InputForm = ({ guess, setGuess, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        minLength={5}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      ></input>
    </form>
  );
};

export default InputForm;
