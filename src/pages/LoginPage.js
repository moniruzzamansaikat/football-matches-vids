import React, { useState } from "react";
import { loginWithGoogle } from "../adapter/user";

function LoginPage() {
  const [loginPage, setLoginPage] = useState(true);
  const [registerPage, setRegister] = useState(false);

  const handleGoogleLogin = () => loginWithGoogle();

  return (
    <div className="login_page">
      <button onClick={handleGoogleLogin}>Login With Google</button>
    </div>
  );
}

export default LoginPage;
