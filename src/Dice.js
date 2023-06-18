import React from "react";
import Die from "./Die"

function Dice() {
    const numberOfDie = 10
    const [dice, setDice] = React.useState(Array(10).fill({}))

    const dieElements = dice.map((die, index) => {
        return (<Die key={index} index={index}/>)
    })

    return(
        <div className="dice">
            {dieElements}
        </div>
    )
}

export default Dice