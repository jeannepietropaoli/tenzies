import React from "react";
import die1 from "./assets/die1.png"
import die2 from "./assets/die2.png"
import die3 from "./assets/die3.png"
import die4 from "./assets/die4.png"
import die5 from "./assets/die5.png"
import die6 from "./assets/die6.png"

const dieImages = [die1, die2, die3, die4, die5, die6]

function Die(props) {
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }

    return(
        <div onClick={props.holdDie} style={styles} className="die">
            <img alt="die-value" src={dieImages[props.value - 1]} />
        </div>
    )
}

export default Die