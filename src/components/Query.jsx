import React,{ useContext, useEffect, useState, useCallback } from "react";
import {QueryContext, QueryHistoryContext  } from "../MainContext";

const Query = (props) => {
  const {setQuery } = useContext(QueryContext);
const { queryHistory } = useContext(QueryHistoryContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type] || []);

  useEffect(() => {
    setList(queryHistory[props.type] || []);
  }, [queryHistory, props.type]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setList(queryHistory[props.type].filter((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }, 300);  // Debounce input

    return () => clearTimeout(timeoutId);
  }, [searchQuery, queryHistory, props.type]);

  const handleQuerySelection = useCallback((query) => {
    setQuery(query);
  }, [setQuery]);

  return (
    <div className="query-wrapper">
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {list.length > 0 ? (
        list.map((i, index) => (
          <div key={index} className="query-item" onClick={() => handleQuerySelection(i)}>
            <code>{i}</code>
          </div>
        ))
      ) : (
        <div>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
