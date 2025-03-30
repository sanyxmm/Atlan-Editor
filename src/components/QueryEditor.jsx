import React, { useContext, useCallback, useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import {QueryContext, QueryHistoryContext  } from "../MainContext";
import { queryDataAlt as queryData, queryData2 } from "../assets/data/data";
import { toast } from "react-toastify";
import { debounce } from "lodash";

const QueryEditor = () => {
  const { query, setQuery } = useContext(QueryContext);
  const { setQueryHistory } = useContext(QueryHistoryContext);
  const [isRunning, setIsRunning] = useState(false);

  // Use useRef to store debounced function reference
  const debouncedRunQueryRef = useRef(
    debounce((query, setQueryHistory) => {
      if (!query.trim()) {
        toast.error("Oops, that was a Null Query. Please type another query.");
        return;
      }

      let outputData = [];
      if (query === "SELECT * FROM internetData;") {
        outputData = queryData;
      } else if (query === "SELECT id, first_name, last_name FROM internetData;") {
        outputData = queryData2;
      } else {
        toast.error("Please try the test query.");
        return;
      }

      setQueryHistory((prev) => ({
        ...prev,
        outputData,
        history: [...prev.history, query],
      }));
    }, 1000)
  );
  const debouncedSaveQueryRef = useRef(
    debounce((query, setQueryHistory) => {
      if (!query.trim()) {
        toast.error("Query can't be null");
        return;
      }
  
      setQueryHistory((prev) => ({
        ...prev,
        saved: [...prev.saved, query],
      }));
      toast.success("Query Saved");
    }, 1000)
  );

  const runQuery = useCallback(() => {
    setIsRunning(true);
    debouncedRunQueryRef.current(query, setQueryHistory);
    setTimeout(() => setIsRunning(false), 1100); // Ensures `isRunning` resets after debounce
  }, [query, setQueryHistory]);

  const saveQuery = useCallback(() => {
    debouncedSaveQueryRef.current(query, setQueryHistory);
  }, [query, setQueryHistory]);

  const clearQuery = useCallback(
    debounce(() => {
      setQuery("");
    }, 1000),
    [setQuery]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
        if (event.key === "s") saveQuery();
        else if (event.key === "r") runQuery();
        else if (event.key === "d") clearQuery();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [saveQuery, clearQuery, runQuery]);

  return (
    <div>
      <div className="editor-container">
        <div className="editor-heading">Query Preview</div>
        <div className="codeEditor">
          <CodeMirror
            value={query}
            onChange={(value) => setQuery(value)}
            className="code-mirror-wrapper"
            extensions={[sql()]}
            basicSetup={{ lineNumbers: true, matchBrackets: true, autocompletion: true }}
            aria-label="code-editor"
          />
        </div>
      </div>
      <div className="panel-container">
        <div>What would you like to do next?</div>
        <div className="panel-button">
          <button onClick={runQuery}>{isRunning ? "Running..." : "Run Query"}</button>
          <button onClick={saveQuery}>Save Query</button>
          <button onClick={clearQuery}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default QueryEditor;
