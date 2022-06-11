import React, { useContext } from "react";
import { Auth } from "./Auth";

export default function Profile() {
  const auth = useContext(Auth);
  return (
    <>
      <h1>Profile</h1>
      <h2>hello {auth.user}</h2>
    </>
  );
}
