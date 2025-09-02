import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const Demo=()=>{
  const[rowData]=useState([
    {studentname:"Yasir Mehmood",Course:"Web Development",institute:"Expert_b_Computer_college"},
        {studentname:"Adeel Ahmed",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Faizan Ali",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Asad Asif",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:" Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Asif Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Yaseen Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Rehman Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Arif Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"Hussain Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"ali Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"ghulam  Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},
    {studentname:"M Asghar",Course:"Web Development",institute:"Expert_b_Computer_college"},

  ])
  const[colDefs]=useState([
    {field:"studentname"},{field:"Course"},{field:"institute"}
  ])
  return(
    <div className="ag-theme-alpine" 
          style={{ height: 400, width: 700, margin: "auto", marginTop: "50px" }} // IMPORTANT: add height and width
    >
     <AgGridReact 
     rowData={rowData}
     columnDefs={colDefs}
     pagination={true}
     paginationPageSize={5}
     />
    </div>
  )
}
export default Demo