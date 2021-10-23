import * as api from "../../api";
import { EmployeeActionType } from "../action-types";
import { Dispatch } from "redux";
import { Employee } from "../../interfaces/EmployeeInterface";
import { EmployeeAction } from "./index";

// Action Creators
export const getEmployees =
  () => async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      const res = await api.fetchEmployees();

      dispatch({ type: EmployeeActionType.FETCH_ALL, payload: res.data });
    } catch (e) {
      console.log("Caught error in get action:\n", e);
    }
  };

export const createEmployee =
  (employee: Employee) => async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      const res = await api.createEmployee(employee);

      dispatch({ type: EmployeeActionType.CREATE, payload: res.data });
    } catch (e) {
      return e;
    }
  };

export const updateEmployee =
  (id: string, employee: Employee) =>
  async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      const res = await api.updateEmployee(id, employee);

      dispatch({ type: EmployeeActionType.CREATE, payload: res.data });
    } catch (e) {
      console.log("Caught error in update action:\n", e);
    }
  };

export const deleteEmployee =
  (id: string) => async (dispatch: Dispatch<EmployeeAction>) => {
    try {
      await api.deleteEmployee(id);

      dispatch({ type: EmployeeActionType.DELETE, payload: id });
    } catch (e) {
      console.log("Caught error in delete action:\n", e);
    }
  };
