import React, { useState } from "react";
import { Button, Card, Typography, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { EmployeeActions } from "../../../state/index";
import { IdActions } from "../../../state/index";
import { Route } from "react-router-dom";
import { Employee as EmployeeInterface } from "../../../interfaces/EmployeeInterface";
import { bindActionCreators } from "redux";

interface Props {
  employee: EmployeeInterface;
}

const Employee: React.FC<Props> = ({ employee }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { deleteEmployee } = bindActionCreators(EmployeeActions, dispatch);
  const { setId } = bindActionCreators(IdActions, dispatch);

  const handleClick = async () => {
    // setError(dispatch(deleteEmployee(employee.empId)).resolve);
    const payload = await deleteEmployee(employee.empId);
    dispatch(payload);
  };

  if (error) {
    throw error;
  }

  return (
    <Card>
      <Typography variant="h6" align="center">
        {employee.firstName} {employee.lastName}
      </Typography>
      <Typography variant="body2" align="center">
        {employee.empId}
      </Typography>
      <Typography variant="body2" align="center">
        {employee.email}
      </Typography>
      <Typography variant="body2" align="center">
        {employee.phoneNumber}
      </Typography>
      <Typography variant="body2" align="center">
        {/* {Props.employee.dateJoined.toLocaleString.slice(0, 10)} */}
        {employee.dateJoined.toLocaleString}
      </Typography>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "7vh" }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          id="delete"
          onClick={() => handleClick()}
        >
          <DeleteIcon fontSize="small" />
        </Button>
        <Route
          render={({ history }) => (
            <Button
              size="small"
              variant="contained"
              color="primary"
              id="edit"
              onClick={() => {
                dispatch(setId(employee.empId));
                history.push("/form");
              }}
            >
              <EditIcon fontSize="small" />
            </Button>
          )}
        />
      </Grid>
    </Card>
  );
};

export default Employee;
