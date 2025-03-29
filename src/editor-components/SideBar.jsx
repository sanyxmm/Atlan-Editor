import { useContext, useState } from "react";
import { MainContext } from "../MainContext";
import Query from "./Query";

const SideBar = () => {
  const { queryHistory } = useContext(MainContext);
  const [openSection, setOpenSection] = useState("saved");

  return (
    <div className="sidebar">
      <div className="sidebar-heading">SQL Editor</div>
      {/* Saved Queries Section */}
      <div className="sidebar-item">
        <h5 onClick={() => setOpenSection("saved")}>
          Queries Saved 
        </h5>
       <Query type="saved" />
      </div>

      {/* Query History Section */}
      <div className="sidebar-item">
        <h5 onClick={() => setOpenSection("history")}>
          Query History 
        </h5>
        <Query type="history" />
      </div>
    </div>
  );
};

export default SideBar;
