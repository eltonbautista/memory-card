import React from "react";

// Scoreboard component used to display scores.

const Scoreboard = (props) => {
  return (
    <div id="scoreboard">
      <div>Current Score: {props.currentScore}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  )
}

export default Scoreboard;