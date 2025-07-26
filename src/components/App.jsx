import { use, useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import "../App.css";

function App() {
  //this function is to generate 10 new dice with a random number 1-6
  const generateAllNewDice = () => {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  };

  const [allNewDice, setAllNewDice] = useState(generateAllNewDice());

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
    setAllNewDice(generateAllNewDice);
  };

  return (
    <>
      <main>
        <div className="container">{dices}</div>
        <button className="roll-btn" onClick={reRoll}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
