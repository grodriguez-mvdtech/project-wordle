import React from "react";

function Guess({ guess }) {
  const guessArray = guess ? guess.split("") : new Array(5).fill("");
  return (
    <span className="guess">
      {guessArray.map((e) => (
        <span key={crypto.randomUUID()} className="cell">
          {e}
        </span>
      ))}
    </span>
  );
}

export default Guess;
