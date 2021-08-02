import React, { createContext, useContext, useReducer } from "react";

//prepers the data layer
export const StateContext = createContext();
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
/*After the build move to index.js : 
import reducer, { initialState } from "./Header/ComponentAPI/reducer";
import { StateProvider } from "./Header/ComponentAPI/StateProvider";
 <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>,
*/
