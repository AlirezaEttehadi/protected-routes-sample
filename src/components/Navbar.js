import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "./Auth";

export default function Navbar() {
  const auth = useContext(Auth);
  return (
    <div>
      <nav style={{ marginBottom: 10 }}>
        <Link style={{ padding: 20 }} to="/">
          Home
        </Link>
        <Link style={{ padding: 20 }} to="/posts">
          Posts
        </Link>
        {auth.user && (
          <Link style={{ padding: 20 }} to="/profile">
            Profile
          </Link>
        )}
        {auth.user ? (
          <Link style={{ padding: 20 }} to="/logout">
            Logout
          </Link>
        ) : (
          <Link style={{ padding: 20 }} to="/login">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
}
