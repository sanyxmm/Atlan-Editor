import { createContext, useState, useMemo } from "react";

//(Manages the current query)
const QueryContext = createContext(null);

const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("SELECT * FROM AtlanData;");
  
  const contextValue = useMemo(() => ({ query, setQuery }), [query]);

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
};

// (Manages query history)
const QueryHistoryContext = createContext(null);

const QueryHistoryProvider = ({ children }) => {
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM AtlanData;", "SELECT id, first_name, last_name FROM AtlanData;"],
    history: ["SELECT * FROM AtlanData;"],
    outputData: [],
  });

  const contextValue = useMemo(() => ({ queryHistory, setQueryHistory }), [queryHistory]);

  return (
    <QueryHistoryContext.Provider value={contextValue}>
      {children}
    </QueryHistoryContext.Provider>
  );
};

//Wrap your App with both providers
const MainProvider = ({ children }) => (
  <QueryProvider>
    <QueryHistoryProvider>{children}</QueryHistoryProvider>
  </QueryProvider>
);

export { MainProvider, QueryContext, QueryHistoryContext };
