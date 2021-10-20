import * as api from "../api";

// Action Creators
export const getEmployees = () => async (dispatch) => {
  try {
    const res = await api.fetchEmployees();

    dispatch({ type: "FETCH_ALL", payload: res.data });
  } catch (e) {
    console.log("Caught error in get action:\n", e);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const res = await api.createEmployee(employee);

    dispatch({ type: "CREATE", payload: res.data });
  } catch (e) {
    return e;
  }
};

export const updateEmployee = (id, employee) => async (dispatch) => {
  try {
    const res = await api.updateEmployee(id, employee);

    dispatch({ type: "UPDATE", payload: res.data });
  } catch (e) {
    console.log("Caught error in update action:\n", e);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (e) {
    console.log("Caught error in delete action:\n", e);
  }
};
