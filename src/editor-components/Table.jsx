import { getTableHeadFromData, getTableRowsFromData } from "../assets/data/tableHelpers";

const Table = ({ result = [] }) => {
  if (result.length === 0) return null;

  return (
    <div className="query-table">
      <table>
        <thead>
          {getTableHeadFromData(result)}
        </thead>
        <tbody>
          {getTableRowsFromData(result)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
