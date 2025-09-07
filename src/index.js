import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tabulator-tables/dist/css/tabulator.min.css';
import "tabulator-tables/dist/css/tabulator.min.css"; 
// or try different themes:
import "tabulator-tables/dist/css/tabulator_midnight.min.css";
import "tabulator-tables/dist/css/tabulator_simple.min.css";
import "tabulator-tables/dist/css/tabulator_modern.min.css";
import "tabulator-tables/dist/css/tabulator_site.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ModuleRegistry.registerModules([AllCommunityModule]);
