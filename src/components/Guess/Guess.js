import React from "react";
import { checkGuess } from "../../game-helpers.js";

function Guess({ answer, guess }) {
  const guessArray = guess ? checkGuess(guess, answer) : new Array(5).fill("");
  return (
    <span className="guess">
      {guessArray.map((e) => (
        <span
          key={crypto.randomUUID()}
          className={`cell ${e.letter ? e.status : ""}`}
        >
          {e.letter || e}
        </span>
      ))}
    </span>
  );
}

export default Guess;
