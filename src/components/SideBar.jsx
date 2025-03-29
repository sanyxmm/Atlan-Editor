import Query from "./Query";

const SideBar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar-heading">SQL Editor</div>

      <div className="sidebar-item">
        <h5> Queries Saved </h5>
       <Query type="saved" />
      </div>

      <div className="sidebar-item">
        <h5> Query History </h5>
        <Query type="history" />
      </div>
    </div>
  );
};

export default SideBar;
