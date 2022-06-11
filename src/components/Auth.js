import { createContext, useState } from "react";

export const Auth = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (_user) => {
    setUser(_user);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <Auth.Provider value={{ user, login, logout }}>{children}</Auth.Provider>
  );
};
