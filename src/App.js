import React from "react";
import Dice from "./Dice"

function App() {
  return (
    <div className="app">
      <h1 className="app--title">Tenzies</h1>
      <h3 className="app--description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      <Dice />
      <button className="app--roll-button">Roll</button>
    </div>
  );
}

export default App;
