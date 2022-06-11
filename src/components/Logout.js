import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "./Auth";

export default function Logout() {
  const auth = useContext(Auth);
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.login(null);
    navigate("/", { replace: true });
  };
  return (
    <>
      <h1>Logout</h1>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}
