import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql"; // Install this if not available
import { MainContext } from "../MainContext"; 
import { queryDataAlt as queryData } from "../assets/data/data";
import { queryData2 } from "../assets/data/data";

const Editor = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);

  const runQuery = () => {
    if (query.trim() === "") {
      alert(
        "Oops, that was a Null Query. Please type another query, or select from the ones previously saved."
      );
      return;
    }
    if (query === "SELECT * FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    } 
    else if (query === "SELECT id, first_name, last_name FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData2,
      }));
    } 
    else {
      alert("Please try the test query.");
    }
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      alert("Query can't be null");
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
   <div >
     <div className="editor-container">
      <div className="editor-heading">Query Preview</div>
     <div className="codeEditor">
         <CodeMirror
            value={query}
            onChange={(value) => setQuery(value)}
            className="code-mirror-wrapper"
            extensions={[sql()]}
           
            basicSetup={{
              lineNumbers: true,
              matchBrackets: true,
              autocompletion: true,
            }}
            aria-label="code-editor"
          />
    </div>
     </div>
    <div className="panel-container">
    <div>What would u like to do next?</div>
    <div className='panel-button'>
      <button onClick={() => runQuery()}>Run Query</button>
      <button onClick={() => saveQuery()}>Save Query</button>
      <button onClick={() => clearQuery()}>Clear</button>
    </div> 
    </div>
     
   </div>
  );
};

export default Editor;
