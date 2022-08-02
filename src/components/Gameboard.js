//Gameboard.js
// Gameboard component for the random cards the user picks from

import React, {useState, useEffect} from 'react';

function Gameboard(props) {
        return (
            <div className="card" onClick={() => props.onClickBtn(props.name)}>{props.name}</div>
        )
}

export default Gameboard;