import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "./Auth";

export default function Login() {
  const [user, setUser] = useState("");
  const auth = useContext(Auth);
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginHandler = () => {
    auth.login(user);
    navigate(state?.path || "/profile", { replace: true });
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </>
  );
}
