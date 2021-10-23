import { Employee } from "../../interfaces/EmployeeInterface";
import { EmployeeActionType, IdActionType } from "../action-types/index";

interface FetchAction {
  type: EmployeeActionType.FETCH_ALL;
  payload: Employee[];
}

interface CreateAction {
  type: EmployeeActionType.CREATE;
  payload: Employee;
}

interface UpdateAction {
  type: EmployeeActionType.UPDATE;
  payload: Employee;
}

interface DeleteAction {
  type: EmployeeActionType.DELETE;
  payload: string;
}

type EmployeeAction = FetchAction | CreateAction | UpdateAction | DeleteAction;
type IdAction = {
  type: IdActionType.SET;
  payload: string;
};

export type { EmployeeAction, IdAction };
