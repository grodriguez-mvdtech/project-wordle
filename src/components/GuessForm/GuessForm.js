import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    const upperCasedValue = value.toUpperCase();
    setGuess(upperCasedValue);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern="^[A-Z]{5}$"
        required
        type="text"
        value={guess}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default GuessForm;
