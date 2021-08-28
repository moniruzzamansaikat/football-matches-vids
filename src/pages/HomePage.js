import React, { useEffect, useState } from "react";
import { fetchAllMatches } from "../adapter/xhr";
import MatchItem from "../components/MatchItem/MatchItem";

function HomePage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchAllMatches(4).then((mchs) => {
      setMatches(mchs);
    });
  }, []);

  return (
    <div className="grid home">
      {matches.length && matches.map((match, ind) => <MatchItem match={match} key={ind} />)}
    </div>
  );
}

export default HomePage;
