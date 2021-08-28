import React from "react";
import Moment from "react-moment";
import SaveIcon from "../SaveIcon/SaveIcon";

function MatchItem({ match }) {
  return (
    <div className="match_item">
      <div className="overlay"></div>
      <SaveIcon />

      <img src={match?.thumbnail} alt="" />
      <div className="content">
        <h1>{match?.title}</h1>
        <small>{match?.competition}</small>
        <Moment style={{ marginTop: "8px", display: "inline-block" }} date={match?.date} format="MMM Do YY" />
        <br />
        <a className="btn">Videos</a>
        <a className="btn btn-link" rel="noreferrer" href={match?.competitionUrl} target="_blank">
          Competition
        </a>
      </div>
    </div>
  );
}

export default MatchItem;
