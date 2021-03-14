import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  return (
    <div className="score-table">
      <h2 className="label">HIGH SCORES: {props.name} </h2>
      <div className="entries">
        {props.scores
          .sort((playerA, playerB) => playerB.s - playerA.s)
          .map((score) => (
            <PlayerScore name={score.n} score={score.s} />
          ))}
      </div>
    </div>
  );
};

export default HighScoreTable;
