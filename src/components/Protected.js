import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "./Auth";

export default function Protected({ children }) {
  const auth = useContext(Auth);
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
  return children;
}
