import React from "react";
import HighScoreTable from "./HighScoreTable";

const WorldwideScores = (props) => {
  let allCountryScores = [];
  props.scoresData.forEach((country) => {
    allCountryScores = allCountryScores.concat(country.scores);
    console.log(country.scores);
  });
  // console.log(allCountryScores)
  return (
    <div className="score-table worldwide-scores">
      <h1 className="title">{props.children}</h1>
      <HighScoreTable
        className="entries"
        scores={allCountryScores}
        sortOrder={props.sortOrder}
      />
    </div>
  );
};
export default WorldwideScores;
