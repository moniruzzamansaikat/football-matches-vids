import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { removeDocById } from "../../adapter/db";
import { userContext } from "../../App";
import { savedItemsContext } from "../../pages/PersonalPage";

function Filled({ match }) {
  const { user } = useContext(userContext);
  const { setMatches } = useContext(savedItemsContext);
  const history = useHistory();

  const handleClick = () => {
    const id = match?.id;

    removeDocById(id).then((result) => {
      setMatches((prevMatches) => prevMatches.filter((mtch) => mtch.id !== id));
    });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      fill="#fff"
      width="30"
      height="30"
      style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }}
      onClick={handleClick}
    >
      <title>Bookmark</title>
      <path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z" />
    </svg>
  );
}

export default Filled;
