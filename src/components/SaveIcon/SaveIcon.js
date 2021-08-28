import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { saveNewMatch } from "../../adapter/db";
import { userContext } from "../../App";

function SaveIcon({ match }) {
  const { user } = useContext(userContext);
  const history = useHistory();

  const handleClick = () => {
    if (!user) {
      history.push("/login");
    } else {
      saveNewMatch({
        ...match,
        userId: user.uid,
      });
    }
  };

  return (
    <svg
      onClick={handleClick}
      viewBox="0 0 15 15"
      fill="#ff0000"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }}
    >
      <path
        d="M12.5 14.5l-.312.39A.5.5 0 0013 14.5h-.5zm0-14h.5V0h-.5v.5zm-10 0V0H2v.5h.5zm0 14H2a.5.5 0 00.812.39L2.5 14.5zm5-4l.312-.39a.5.5 0 00-.624 0l.312.39zm5.5 4V.5h-1v14h1zM2 .5v14h1V.5H2zm.812 14.39l5-4-.624-.78-5 4 .624.78zm4.376-4l5 4 .624-.78-5-4-.624.78zM12.5 0h-10v1h10V0z"
        fill="#fff"
        style={{ background: "red" }}
      ></path>
    </svg>
  );
}

export default SaveIcon;
