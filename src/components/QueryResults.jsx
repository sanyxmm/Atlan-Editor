import React, { useContext, useState, useEffect, useMemo } from "react";
import { QueryHistoryContext } from "../MainContext";
import VirtualizedTable from "./Table";
import { CSVLink } from "react-csv";

const QueryResults = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(QueryHistoryContext);
  const [getTableColumns, setGetTableColumns] = useState(null);

  useEffect(() => {
    import("../assets/data/tableHelpers").then((module) => {
      setGetTableColumns(() => module.getTableColumns);
    });
  }, []);

  const memoizedTableColumns = useMemo(() => {
    if (!getTableColumns || queryHistory.outputData.length === 0) return null;
    return getTableColumns(queryHistory.outputData);
  }, [getTableColumns, queryHistory.outputData]);

  const exportData = () => {
    console.log("Data to be exported");
  };

  return (
    <div className="query-results">
      <div className="query-results-heading">Recent Results</div>
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className="output-tab">
            <div className="tab-bar">
              <span className={`tabs ${tab === 0 ? "active" : ""}`} onClick={() => setTab(0)}>Output</span>
              <span className={`tabs ${tab === 1 ? "active" : ""}`} onClick={() => setTab(1)}>Table Data</span>
            </div>
            <div className="export-btn">
              <CSVLink data={queryHistory.outputData} filename={"dataOutput.csv"}>
                <button onClick={exportData}>
                  Export <span className="fa fa-download"></span>
                </button>
              </CSVLink>
            </div>
          </div>

          <div className="query-details">
            <p className="query-info">
              <span>{tab === 0 ? queryHistory.outputData.length : Object.keys(queryHistory.outputData[0]).length}</span> rows in Set
              <span className="execution-time"> (0.03 sec)</span>
            </p>
          </div>

          {tab === 0 ? (
            <VirtualizedTable result={queryHistory.outputData} />
          ) : (
            <div>{memoizedTableColumns ? <table>{memoizedTableColumns}</table> : "Loading Table Data..."}</div>
          )}
        </>
      ) : (
        <div className="placeholder-text">
          <p>Run Something &#38; Your Output Shall Appear!</p>
        </div>
      )}
    </div>
  );
};

export default QueryResults;
