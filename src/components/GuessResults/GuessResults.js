import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results }) {
  const resultsAllowed = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {resultsAllowed.map((result, index) => (
        <Guess key={crypto.randomUUID()} guess={results[index] ?? null} />
      ))}
    </div>
  );
}

export default GuessResults;
