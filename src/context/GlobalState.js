import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state(initial value of store)
const initialState = {
  likedCountry: localStorage.getItem("likedCountry")
    ? JSON.parse(localStorage.getItem("likedCountry"))
    : [],
  visited: [],
};

//create context
export const GlobalContext = createContext(initialState);

//we need a provider to access state to other components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("likedCountry", JSON.stringify(state.likedCountry));
  }, [state]);
  //actions
  const addLikedCountry = (country) => {
    dispatch({ type: "ADD_COUNTRY", payload: country });
  };

  const removeLikedCountry = (name) => {
    dispatch({ type: "REMOVE_COUNTRY", payload: name });
  };

  return (
    <GlobalContext.Provider
      value={{
        likedCountry: state.likedCountry,
        visited: state.visited,
        addLikedCountry: addLikedCountry,
        removeLikedCountry: removeLikedCountry,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
