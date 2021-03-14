import React from "react";

const PlayerScore = (props) => {
  return (
    <div className="player-score">
      <span className="name">{props.name.toUpperCase()}</span>
      <span className="score">{props.score}</span>
    </div>
  )
}

export default PlayerScore;