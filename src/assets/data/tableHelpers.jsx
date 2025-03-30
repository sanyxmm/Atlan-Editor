import React from "react";

const getTableRowsFromData = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null; // Handle empty or invalid array
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
  if (!Array.isArray(arr) || arr.length === 0) return null; // Handle empty or invalid array
  const keys = Object.keys(arr[0]);

  return (
    <tr>
      {keys.map((i, index) => (
        <th key={index}>{i}</th>
      ))}
    </tr>
  );
};

const getTableColumns = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null; // Handle empty or invalid array
  const keys = Object.keys(arr[0]);

  return keys.map((i, index) => (
    <tr key={index}>
      <td>{i}</td>
    </tr>
  ));
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
