const getTableRowsFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return arr.map((i, index) => (
    <tr key={index}>
      {keys.map((a) => (
        <td key={a}>{i[a]}</td>
      ))}
    </tr>
  ));
};

const getTableHeadFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((i, index) => (
        <th key={index}>{i}</th> // Changed <td> to <th>
      ))}
    </tr>
  );
};

const getTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((i, index) => (
    <tr key={index}>
      <td>{i}</td>
    </tr>
  ));
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
