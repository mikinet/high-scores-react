import React, { useState } from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
function App() {
  const [sortOrder, setSortOrder] = useState(1);
  const [sortButtonCaption, setSortButtonCaption] = useState("Ascending");
  const changeSortOrder = () => {
    setSortOrder(sortOrder * -1);
    if (sortButtonCaption === "Ascending") {
      setSortButtonCaption("Descending");
    } else {
      setSortButtonCaption("Ascending");
    }      
  };
  return (
    <div className="content">
      <label for={sortButtonCaption}>Set scores sort order: </label>
      <button className="button" onClick={changeSortOrder}>
        {sortButtonCaption}
      </button>
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
        .map((countryScore, index) => {
          return (
            <HighScoreTable
              key={index}
              name={countryScore.name}
              scores={countryScore.scores}
              sortOrder={sortOrder}
            />
          );
        })}
    </div>
  );
}
export default App;
