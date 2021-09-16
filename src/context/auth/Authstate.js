import React, { createContext, useReducer, useEffect } from "react";

import AuthReducer from "./AuthReducer";
//initial state(initial value of store)
const initialState = {
  isAuthenticated: false,
  user: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  loading: true,
};

//create context
export const AuthContext = createContext(initialState);

//we need a provider to access state to other components
export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.user));
  }, [state]);

  //actions
  const register = (user) => {
    dispatch({ type: "SIGN_UP_USER", payload: user });
    // localStorage.setItem("users", JSON.stringify(state.user));
  };

  const login = (user) => {
    // console.log(localStorage.users);
    // console.log(user);

    const users = JSON.parse(localStorage.getItem("users"));
    if (user.email === users.email && user.password === users.password) {
      dispatch({ type: "LOGIN_USER", payload: user });
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: "Authentication failed" });
    }
  };
  const logout = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        register: register,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
