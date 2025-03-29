import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { sublime } from "@uiw/codemirror-theme-sublime";
import EditorPanel from "./EditorPanel";
import { MainContext } from "../MainContext"; 

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className="editor">
      <div className="editor__row">
        <div className="editor__code-column">
          <CodeMirror
            value={query}
            onChange={(value) => setQuery(value)}
            className="code-mirror-wrapper"
            extensions={[sql()]}
            theme={sublime}
            basicSetup={{
              lineNumbers: true,
              matchBrackets: true,
              autocompletion: true,
            }}
            aria-label="code-editor"
          />
          <p className="editor__note">
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className="editor__panel-column">
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
