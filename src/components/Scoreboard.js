import React from "react";

// Scoreboard component used to display scores.
// When Scoreboard is mounted, scores should be "0".
// As the game progresses and the user increases their score, it should increment by 1 per correct guess.


const Scoreboard = (props) => {
  
  return (
    <div id="scoreboard">
      <div>Current Score: {props.currentScore}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  )
}

export default Scoreboard;