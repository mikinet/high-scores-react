import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  return (
    // <div className="score-table">
      <div className={props.className}>
        {props.scores
          .sort((playerA, playerB) => (playerB.s - playerA.s)*props.sortOrder)
          .map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
      </div>
    // </div>
  );
};

export default HighScoreTable;

