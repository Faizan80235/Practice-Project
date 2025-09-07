// import React from "react";
// import { ReactTabulator } from "react-tabulator";
// import "tabulator-tables/dist/css/tabulator_modern.min.css"; // choose theme

// function App() {
//   // 🔸 Manual dataset
//   const data = [
//     { id: 1, name: "John Doe", email: "john@example.com", city: "New York", company: "TechCorp" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", city: "Los Angeles", company: "MediaWorks" },
//     { id: 3, name: "Alice Johnson", email: "alice@example.com", city: "Chicago", company: "HealthPlus" },
//     { id: 4, name: "Bob Brown", email: "bob@example.com", city: "Miami", company: "FinServe" },
//     { id: 5, name: "Charlie White", email: "charlie@example.com", city: "Seattle", company: "EduWorld" },
//     { id: 6, name: "Diana King", email: "diana@example.com", city: "Boston", company: "GreenTech" },
//     { id: 7, name: "Evan Scott", email: "evan@example.com", city: "Dallas", company: "AutoPro" },
//   ];

//   // 🔸 Table columns
//   const columns = [
//     { title: "ID", field: "id", width: 80, sorter: "number" },
//     { title: "Name", field: "name", editor: "input" },
//     { title: "Email", field: "email", sorter: "string" },
//     { title: "City", field: "city", sorter: "string" },
//     { title: "Company", field: "company" },
//   ];

//   // 🔸 Table options
//   const options = {
//     layout: "fitDataStretch", // auto fit columns
//     pagination: "local", // enable pagination
//     paginationSize: 5, // show 5 rows per page
//     selectable: true, // allow row selection
//   };

//   return (
//     <div>
//       <h1>High-Level Tabulator (Manual Data)</h1>
//       <ReactTabulator
//         data={data}
//         columns={columns}
//         options={options}
//         cellEdited={(cell) => console.log("Edited:", cell.getData())}
//         rowClick={(e, row) => console.log("Row clicked:", row.getData())}
//       />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator_midnight.min.css";


function App() {
  // 🔸 Manual dataset
 const rowdata=[
 { id: 1, name: "John Doe", email: "john@example.com", city: "New York", company: "TechCorp" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", city: "Los Angeles", company: "MediaWorks" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", city: "Chicago", company: "HealthPlus" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", city: "Miami", company: "FinServe" },
    { id: 5, name: "Charlie White", email: "charlie@example.com", city: "Seattle", company: "EduWorld" },
    { id: 6, name: "Diana King", email: "diana@example.com", city: "Boston", company: "GreenTech" },
    { id: 7, name: "Evan Scott", email: "evan@example.com", city: "Dallas", company: "AutoPro" },
  ];
const columns=[
  {title:"Name", field:'name' , editor:'input'},
      { title: "ID", field: "id", width: 80, sorter: "number" },
    { title: "Name", field: "name", editor: "input" },
    { title: "Email", field: "email", sorter: "string" },
    { title: "City", field: "city", sorter: "string" },
    { title: "Company", field: "company" },]
const options={
  layout: "fitDataStretch", // auto fit columns
    pagination: "local", // enable pagination
    paginationSize: 5, // show 5 rows per page
    selectable: true, // allow row selection
}
  return (
    <div>
<ReactTabulator 
data={rowdata}
columns={columns}
options={options}
/>
    </div>
  );
}

export default App;

