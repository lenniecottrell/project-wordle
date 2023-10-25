import React from "react";

function WordArea({ guesses }) {
  return (
    <div className="guess-result">
      {guesses.map(({ id, label }) => (
        <p className="guess" key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default WordArea;
