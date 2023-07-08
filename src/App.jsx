import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyForm from "./MyForm";
import EmployeeList from "./EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <MyForm employees={employees} setEmployees={setEmployees} />
      <EmployeeList employees={employees} setEmployees={setEmployees} />
    </>
  );
}

export default App;
