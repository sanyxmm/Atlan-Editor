import React, { useState, useMemo } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

export const Table = ({ result = [] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (result.length === 0) {
    return <p style={{ textAlign: "center", padding: "20px" }}>No data available.</p>;
  }

  const columns = Object.keys(result[0]); // Extract column headers dynamically

  // Get paginated data
  const pageData = useMemo(
    () => result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [result, page, rowsPerPage]
  );

  return (
    <Paper style={{ width: "70vw", margin: "20px auto", borderRadius: "10px", overflow: "scroll" }}>
      <TableContainer style={{ maxHeight: 400 }}>
        <MuiTable stickyHeader>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} style={{ fontWeight: "bold", textTransform: "uppercase",padding:"0.2vw",textAlign:"center" }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {pageData.map((row, index) => (
              <TableRow key={index} hover>
                {columns.map((column) => (
                  <TableCell style={({padding:"0.2vw",textAlign:"center"})} key={column}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={result.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
      />
    </Paper>
  );
};

export default Table;
