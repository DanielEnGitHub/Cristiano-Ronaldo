import React, { useState, useContext, createContext } from "react";

const toggleContext = createContext();
const setToggleContext = createContext();

export const useToggleContext = () => {
  return useContext(toggleContext);
};

export const useSetToggleContext = () => {
  return useContext(setToggleContext);
};

export const Context = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <toggleContext.Provider value={toggle}>
      <setToggleContext.Provider value={setToggle}>
        {children}
      </setToggleContext.Provider>
    </toggleContext.Provider>
  );
};
