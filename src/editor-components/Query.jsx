import { useContext, useEffect, useState } from "react";
import { MainContext } from "../MainContext";

const Query = (props) => {
  const { setQuery, queryHistory } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(queryHistory[props.type]);

  useEffect(() => {
    setList(queryHistory[props.type]);
  }, [props, queryHistory]);

  useEffect(() => {
    setList(
      queryHistory[props.type].filter((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="query-wrapper">
      {/* Search Bar */}
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Query List */}
      {list.length > 0 ? (
        list.map((i, index) => (
          <div key={index} className="query-item" onClick={() => setQuery(i)}>
            <code>{i}</code>
          </div>
        ))
      ) : (
        <div className="placeholder-text">
          <span className="fa fa-exclamation-circle"></span>
          <p>No queries found.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
