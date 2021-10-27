import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { EmployeeActions } from "../../state/index";
import { IdActions } from "../../state/index";
import { State } from "../../state/reducers";
import { Employee } from "../../interfaces/EmployeeInterface";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { createEmployee, updateEmployee } = bindActionCreators(
    EmployeeActions,
    dispatch
  );
  const { setId } = bindActionCreators(IdActions, dispatch);

  const currEmployee = useSelector((state: State) =>
    state.ids
      ? state.employees.find((e: Employee) => e.empId === state.ids)
      : null
  );
  const [employee, setEmployee] = useState({
    empId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
  });
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  const currId = useSelector((state: State) => (state.ids ? state.ids : null));

  useEffect(() => {
    if (currEmployee) setEmployee(currEmployee);
  }, [currEmployee, dispatch]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (
      !employee.empId ||
      !employee.firstName ||
      !employee.lastName ||
      !employee.email ||
      !employee.phoneNumber ||
      !employee.dateJoined
    ) {
      alert("None of the fields can be left empty!");
      return;
    }

    if (currId) {
      //   setError(dispatch(updateEmployee(currId, employee)));
      dispatch(updateEmployee(currId, employee));
    } else {
      //   setError(dispatch(createEmployee(employee)));
      dispatch(createEmployee(employee));
    }

    clear();
  };

  const clear = () => {
    dispatch(setId(""));
    setEmployee({
      empId: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateJoined: "",
    });
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={() => handleSubmit}>
        <Typography variant="h6" align="center" style={{ minHeight: "5vh" }}>
          {currId ? "Edit" : "Create"} an Employee
        </Typography>
        <TextField
          name="empId"
          variant="outlined"
          label="Employee Id"
          fullWidth
          value={employee.empId}
          onChange={(e) => setEmployee({ ...employee, empId: e.target.value })}
        ></TextField>
        <TextField
          name="firstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        ></TextField>
        <TextField
          name="lastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        ></TextField>
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        ></TextField>
        <TextField
          name="phoneNumber"
          variant="outlined"
          label="Phone Number"
          fullWidth
          value={employee.phoneNumber}
          onChange={(e) =>
            setEmployee({ ...employee, phoneNumber: e.target.value })
          }
        ></TextField>
        <TextField
          name="dateJoined"
          variant="outlined"
          label="Date Joined (YYYY-MM-DD)"
          fullWidth
          value={employee.dateJoined}
          onChange={(e) =>
            setEmployee({ ...employee, dateJoined: e.target.value })
          }
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
