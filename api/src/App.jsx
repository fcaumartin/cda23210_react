import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link, Route, Routes } from "react-router-dom";
import List from "./List";
import Form from "./Form";

function App() {

 

 

  return (
    <div>
      <h1>Test Api</h1>
      <nav>
        <Link to="/list">Liste</Link>
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/form">Formulaire</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="list" element={<List />} />
        <Route path="form" element={<Form />} />
      </Routes>
      
    </div>
  );
}

export default App;
