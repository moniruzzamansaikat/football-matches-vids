import React, { createContext, useContext, useEffect, useState } from "react";
import { clearAll, getSavedMatches } from "../adapter/db";
import { userContext } from "../App";
import MatchItem from "../components/MatchItem/MatchItem";
import { NotificationManager } from "react-notifications";

export const savedItemsContext = createContext();

function PersonalPage() {
  const { user } = useContext(userContext);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClearAll = () => {
    const ids = matches?.map((match) => match.id);
    clearAll(ids).then(() => {
      NotificationManager.success("Items cleared!");
      setMatches([]);
    });
  };

  useEffect(() => {
    getSavedMatches(user?.uid)
      .then((docs) => {
        setMatches(docs);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <savedItemsContext.Provider value={{ matches, setMatches }}>
      <div>
        <div className="profile_card">
          <div className="img_n_name">
            <img src={user?.photoURL} alt="" />
            <div className="right">
              <h2>{user?.displayName}</h2>
              <h5>{user?.email}</h5>
              <button onClick={handleClearAll}>Clear all</button>
            </div>
          </div>
        </div>

        {loading && <h2>Loading...</h2>}
        <div className="grid">
          {!loading && matches.map((match, idx) => <MatchItem saved match={match} key={idx} />)}
        </div>
      </div>
    </savedItemsContext.Provider>
  );
}

export default PersonalPage;
