import React from "react";
import HighScoreTable from "./HighScoreTable";

const ScoresPerCountry = (props) => {
  return (
    <div className="country-scores">
      <h1 className="title">{props.children}</h1>
      {
        // sort allCountryScores by country name (ascending)
        sortScoresByCountryName(props.scoresData).map((countryScore, index) => {
          return (
            <div key={index} className="score-table">
              <h2 className="label">HIGH SCORES: {countryScore.name} </h2>
              <HighScoreTable
                className="entries"
                scores={countryScore.scores}
                sortOrder={props.sortOrder}
              />
            </div>
          );
        })
      }
    </div>
  );
};
export default ScoresPerCountry;

function sortScoresByCountryName(scoresData) {
  return scoresData.sort((countryA, countryB) => {
    countryA = countryA.name.toUpperCase();
    countryB = countryB.name.toUpperCase();
    if (countryA < countryB) {
      return -1;
    }
    return 1;
  });
}