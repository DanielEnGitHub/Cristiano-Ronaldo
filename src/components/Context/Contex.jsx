import React, { useState, useContext, createContext } from "react";

// toggle actions
const toggleContext = createContext();
const setToggleContext = createContext();

// error actions
const apiErrorContext = createContext();
const setApiErrorContext = createContext();

export const useToggleContext = () => {
  return useContext(toggleContext);
};

export const useSetToggleContext = () => {
  return useContext(setToggleContext);
};

export const useApiErrorContext = () => {
  return useContext(apiErrorContext);
};

export const useSetApiErrorContext = () => {
  return useContext(setApiErrorContext);
};

export const Context = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [apiError, setApiError] = useState(false);

  return (
    <apiErrorContext.Provider value={apiError}>
      <setApiErrorContext.Provider value={setApiError}>
        <toggleContext.Provider value={toggle}>
          <setToggleContext.Provider value={setToggle}>
            {children}
          </setToggleContext.Provider>
        </toggleContext.Provider>
      </setApiErrorContext.Provider>
    </apiErrorContext.Provider>
  );
};
