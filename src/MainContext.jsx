import { createContext, useState, useMemo } from "react";

const MainContext = createContext(null);

const MainProvider = ({ children }) => {
  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM internetData;", "SELECT id, first_name, last_name FROM internetData;"],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>;
};

export { MainProvider, MainContext };
