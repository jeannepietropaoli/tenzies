import React from "react";

function Die(props) {
    const styles = {
        backgroundColor : props.isHeld ? "green" : "white"
    }

    return(
        <div onClick={props.holdDie} style={styles} className="die">
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die