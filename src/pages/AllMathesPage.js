import React, { useEffect, useState } from "react";
import { fetchAllMatches } from "../adapter/xhr";
import MatchItem from "../components/MatchItem/MatchItem";

function AllMathesPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllMatches().then((mschs) => {
      setLoading(false);
      setMatches(mschs);
    });
  }, []);

  return (
    <div className="grid">
      {loading && <h2>Loading...</h2>}

      {!loading &&
        matches.map((match, idx) => {
          return <MatchItem match={match} key={idx} />;
        })}
    </div>
  );
}

export default AllMathesPage;
