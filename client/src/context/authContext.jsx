import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const api = axios.create({
    baseURL: "/api", // Relative URL for the proxy
  });

  const login = async (inputs) => {
    try {
      const res = await api.post("https://fortunato-api.onrender.com/auth/login", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      // Handle login error
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await api.post("https://fortunato-api.onrender.com/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      // Handle logout error
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
