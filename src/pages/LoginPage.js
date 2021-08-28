import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { loginWithGoogle } from "../adapter/user";
import { userContext } from "../App";

function LoginPage() {
  const location = useLocation();
  const history = useHistory();
  const { user } = useContext(userContext);
  let { from } = location.state || { from: { pathname: "/" } };

  if (user) {
    history.replace(from);
  }

  const handleGoogleLogin = () => {
    loginWithGoogle().then(() => {
      history.replace(from);
    });
  };

  return (
    <div className="login_page">
      <button onClick={handleGoogleLogin}>Login With Google</button>
    </div>
  );
}

export default LoginPage;
