import React, { createContext, useContext, useState } from "react";

const RegStartupContext = createContext({});

export const RegStartupProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  return (
    <RegStartupContext.Provider value={{ page, setPage }}>
      {children}
    </RegStartupContext.Provider>
  );
};

export default RegStartupContext;

export const useRegStartupContext = () => {
  return useContext(RegStartupContext);
};
