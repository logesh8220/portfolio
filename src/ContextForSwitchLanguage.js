import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [languageState, setLangaugeState] = useState("JP");

  return (
    <AppContext.Provider value={{ languageState, setLangaugeState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};