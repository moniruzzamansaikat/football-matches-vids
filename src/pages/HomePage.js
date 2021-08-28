import React, { useContext } from "react";
import MatchItem from "../components/MatchItem/MatchItem";
import { matchContext } from "../App";

function HomePage() {
  const { matches } = useContext(matchContext);

  return (
    <div className="grid home">
      {matches.length && matches.map((match, ind) => <MatchItem match={match} key={ind} />)}
    </div>
  );
}

export default HomePage;
