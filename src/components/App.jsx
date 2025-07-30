import { use, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Die from "./Die";
import "../App.css";

function App() {
  const [allNewDice, setAllNewDice] = useState(() => generateAllNewDice());

  //this function is to generate 10 new dice with a random number 1-6
  function generateAllNewDice() {
    console.log("Generate another dice")
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const hold = (id) => {
    setAllNewDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const dices = allNewDice.map((newDiceObj) => (
    <Die
      key={newDiceObj.id}
      value={newDiceObj.value}
      isHeld={newDiceObj.isHeld}
      click={() => hold(newDiceObj.id)}
    />
  ));

  //this function is to update the setAllNewDice state, it re-roll new dice
  const reRoll = () => {
    setAllNewDice((prevRoll) =>
      prevRoll.map((roll) =>
        roll.isHeld ? roll : { ...roll, value: Math.ceil(Math.random() * 6) }
      )
    );
  };

  const gameWon =
    allNewDice.every((die) => die.isHeld) &&
    allNewDice.every((die) => die.value === allNewDice[0].value)
      ? true
      : false;

  const restart = () => {
    gameWon && setAllNewDice(generateAllNewDice())
  }

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <div aria-live="polite" className="sr-only">
          {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instruction">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls
        </p>
        <div className="container">{dices}</div>
        <button className="roll-btn" onClick={gameWon ? restart : reRoll}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
