
import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer 
export const StateContext = createContext();

//Wrap our app and provide data layer to every component
export const StateProvider = ({ reducer,initialState,children}) => (<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>
);


// Pull information fro the  data layer
export const useStateValue = () => useContext 
(StateContext);