import React, { useState, createContext } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    if (result.token) {
      setToken(result.token);
      setIsAuthenticated(true);
      setEmail(email);
    }
  };

  const register = async (email, password, firstName, lastName) => {
    const result = await signup(email, password, firstName, lastName);
    setId(result.id)
    localStorage.setItem("id", result.id);
    return result.code == 201 ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        email,
        id
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
