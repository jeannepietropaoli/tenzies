import React from "react";
import Die from "./Die"
import { nanoid } from "nanoid";

function App() {
  const numberOfDie = 10
  const [dice, setDice] = React.useState(getAllNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  function areAllDiceHeld() {
    return dice.every(die => die.isHeld)
  }

  function areAllDiceTheSame() {
    const firstDiceValue = dice[0].value
    return dice.every(die => die.value === firstDiceValue)
  }

  React.useEffect(() => {
    if(areAllDiceHeld() && areAllDiceTheSame()) {
      setTenzies(true)
    }
    else setTenzies(false)
  }, [dice])

  function getNewDie() {
    return ({
      isHeld : false,
      value : getRandomDieNumber(),
      id : nanoid()
  })
  }

  function getAllNewDice() {
    return Array(10).fill(0).map(() => {
      return getNewDie()
  })
  }

    function getRandomDieNumber() {
        return Math.floor(Math.random() * 6 ) + 1
    }

    function holdDie(id) {
      setDice(prevDice => {
        return prevDice.map(prevDie => {
          return prevDie.id === id 
            ? {...prevDie, isHeld : !prevDie.isHeld}
            : prevDie
        })
      })
    }
    console.log(dice)

    const dieElements = dice.map((die, index) => {
        return (<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDie={() => holdDie(die.id)}/>)
    })

    function rollDice() {
      setDice(prevDice => {
        return prevDice.map(prevDie => {
          return prevDie.isHeld 
            ? prevDie
            : getNewDie()
        })
      })
    }

    function playAgain() {
      setDice(getAllNewDice())
    }

  return (
    <div className="app">
      <h1 className="app--title">Tenzies</h1>
      <h3 className="app--description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      <div className="dice">
            {dieElements}
        </div>
      {!tenzies && <button onClick={rollDice} className="app--roll-button">Roll</button>}
      {tenzies && <button onClick={playAgain} className="app--roll-button">Play again</button>}
    </div>
  );
}

export default App;
