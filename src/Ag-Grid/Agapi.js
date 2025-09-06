import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required CSS for AG Grid
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // You can switch to material, balham, etc.

const Agapi = () => {
  const [rowdata, setrowdata] = useState([]);

  const [colDefs] = useState([
    { field: "title", headerName: "Title" },
    { field: "body", headerName: "Body" },
    { field: "id", headerName: "ID" },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setrowdata(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div
      className="ag-theme-alpine-dark" // 👈 Required class for styling
      style={{
        height: "500px",
        width: "50%",
        margin: "40px auto",
      }}
    >
      <AgGridReact
        rowData={rowdata}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={5}
        
      />
    </div>
  );
};

export default Agapi;
