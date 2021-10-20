import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Employee from "./Employee/Employee";

const Employees = ({ currentPage, employeesPerPage, loading }) => {
  const employees = useSelector((state) => state.employees);

  // Get current page and employees respectively
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "0vh" }}
    >
      <Grid container spacing={1}>
        {currentEmployees.map((employee) => (
          <Grid key={employee._id} item xs={12} sm={6}>
            <Employee employee={employee} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Employees;
