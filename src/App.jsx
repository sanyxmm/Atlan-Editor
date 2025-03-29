import React from "react";
import { MainProvider } from "./MainContext"; // Correct import
import "./App.css";
import Editor from "./editor/Editor";

const App = () => {
  return (
    <MainProvider>
     <Editor/>
    </MainProvider>
  );
};
export default App;