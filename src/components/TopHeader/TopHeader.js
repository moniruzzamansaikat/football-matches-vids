import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../adapter/user";
import { userContext } from "../../App";

function TopHeader() {
  const { user, setUser } = useContext(userContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    setUser(null);
  };

  return (
    <div className="top_header">
      <img src="/img/logo.svg" alt="" />
      {user ? (
        <Link to="/" id="login_link" onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <Link to="/login" id="login_link">
          Login
        </Link>
      )}
    </div>
  );
}

export default TopHeader;
