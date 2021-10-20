import React, { useState } from "react";
import { Button, Card, Typography, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../../actions/employees";
import { setId } from "../../../actions/ids";
import { Route } from "react-router-dom";

const Employee = ({ employee }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleClick = () => {
    setError(dispatch(deleteEmployee(employee._id)).resolve);
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
        {employee.dateJoined.slice(0, 10)}
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
                dispatch(setId(employee._id));
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
