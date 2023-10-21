import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((result) => (
        <Guess key={crypto.randomUUID()} guess={result} />
      ))}
    </div>
  );
}

export default GuessResults;
