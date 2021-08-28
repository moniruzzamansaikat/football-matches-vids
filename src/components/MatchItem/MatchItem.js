import React, { useState } from "react";
import Moment from "react-moment";
import Filled from "../SaveIcon/Filled";
import SaveIcon from "../SaveIcon/SaveIcon";

function MatchItem({ match, saved }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="match_item">
      <div className="overlay"></div>
      {saved ? <Filled match={match} /> : <SaveIcon match={match} />}

      <img src={match?.thumbnail} alt="" />
      <div className="content">
        <h1>{match?.title}</h1>
        <small>{match?.competition}</small>
        <Moment style={{ marginTop: "8px", display: "inline-block" }} date={match?.date} format="MMM Do YY" />
        <br />
        <a href={match?.matchviewUrl} className="btn">
          Videos
        </a>
        <a className="btn btn-link" rel="noreferrer" href={match?.competitionUrl} target="_blank">
          Competition
        </a>
      </div>
    </div>
  );
}

export default MatchItem;
