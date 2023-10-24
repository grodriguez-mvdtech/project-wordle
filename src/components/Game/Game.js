import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameOverBanner from "../GameOverBanner";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);
  const win = results.includes(answer);
  return (
    <>
      <GuessResults answer={answer} results={results} />
      <GuessForm setResults={setResults} />
      {results.length === NUM_OF_GUESSES_ALLOWED && (
        <GameOverBanner answer={answer} win={win} />
      )}
    </>
  );
}

export default Game;
