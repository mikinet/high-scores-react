import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./scores";
import ScoresPerCountry from "./ScoresPerCountry";
import WorldwideScores from "./WorldwideScores";
import SortController from "./SortController";

function App() {
  const [sortOrder, setSortOrder] = useState(1);
  const [sortButtonCaption, setSortButtonCaption] = useState("Ascending");
  // scores sort order handler
  const handleChangeSortOrder = () => {
    setSortOrder(sortOrder * -1);
    if (sortButtonCaption === "Ascending") {
      setSortButtonCaption("Descending");
    } else {
      setSortButtonCaption("Ascending");
    }
  };
  return (
    <div className="App">
      <SortController
        label="Change scores sort order to: "
        caption={sortButtonCaption}
        onClick={handleChangeSortOrder}
      ></SortController>
      {/* Table displaying high scores of players worldwide */}
      <WorldwideScores scoresData={allCountryScores} sortOrder={sortOrder}>
        Worldwide High Scores
      </WorldwideScores>
      {/* Tables displaying dif counties' with their players' high scores */}
      <ScoresPerCountry scoresData={allCountryScores} sortOrder={sortOrder}>
        High Scores Per Country
      </ScoresPerCountry>
    </div>
  );
}
export default App;
