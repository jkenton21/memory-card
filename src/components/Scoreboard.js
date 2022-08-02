//Scoreboard.js
// Scoreboard component for incrementing/resetting the score count

import React, {useState, useEffect} from 'react';
import Gameboard from './Gameboard';

const randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

function Scoreboard() {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clicked, setClicked] = useState({})

    randomize(cards)

    const onClickBtn = (name) => {
        randomize(cards)
        setScore(score + 1)
        if (clicked[name]) {
            setScore(0)
            setClicked({})
            return
        }
        if (bestScore < score +1) {
            setBestScore(score + 1)
        }
        clicked[name] = true
    }

    return (
        <div>
            <h1>Scoreboard</h1>
            <div className="scores">
                <div>Current Score: {score}</div>
                <div>Best Score: {bestScore}</div>
            </div>
            <div className="gameBoard">
                {cards.map(card => <Gameboard key={card} name={card} onClickBtn={onClickBtn} />)}
            </div>
        </div>
    )

}

export default Scoreboard;