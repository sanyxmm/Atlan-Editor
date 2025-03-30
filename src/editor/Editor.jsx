import React from "react";
import SideBar from "../components/SideBar";
import QueryResults from "../components/QueryResults";
import QueryEditor from "../components/QueryEditor";
import { MainProvider } from "../MainContext"; 
import "../styles.css"; // External CSS file
import { ToastContainer} from 'react-toastify'
function Editor() {
  return (
    <div className="editor-containerr">
      <MainProvider>
        <div className="editor-content">
          <div className="editor-layout">
            <aside className="sidebar-container">
              <SideBar />
            </aside>
            <main className="main-content">
              <QueryEditor />
              <QueryResults />
            </main>
          </div>
        </div>
      </MainProvider>
      <ToastContainer />
    </div>
  );
}

export default Editor;
