import React from "react";
import allCountryScores from "./scores";
import ScoreCard from "./HighScoreTable";
import HighScoreTable from "./HighScoreTable";
function App() {
  return (
    <div className="content">
      <h1 className="title">High Scores Per Country</h1>
      {allCountryScores
        .sort((countryA, countryB) => {
          countryA = countryA.name.toUpperCase();
          countryB = countryB.name.toUpperCase();
          if (countryA < countryB) {
            return -1;
          }
          return 1;
        })
        .map((countryScore) => {
          return (
            <HighScoreTable name={countryScore.name} scores={countryScore.scores} />
          );
        })}
    </div>
  );
}
export default App;
