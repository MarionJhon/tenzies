import { useState } from "react";
import Die from "./Die";
import "../App.css";

function App() {

  const generateAllNewDice = () => {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  };

  const [allNewDice, setAllNewDice] = useState(generateAllNewDice);

  const dice = allNewDice.map(newDice => (
    <Die value={newDice}/>
  ))

  return (
    <>
      <main>
        <div className="container">
          {dice}
        </div>
      </main>
    </>
  );
}

export default App;
