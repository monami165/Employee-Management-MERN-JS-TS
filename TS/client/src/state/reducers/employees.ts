import { EmployeeAction } from "../actions/index";
import { EmployeeActionType } from "../action-types";
import { Employee } from "../../interfaces/EmployeeInterface";

const employeeReducer = (
  employees: Employee[] = [],
  action: EmployeeAction
) => {
  switch (action.type) {
    case EmployeeActionType.FETCH_ALL:
      return action.payload;
    // case EmployeeActionType.CREATE:
    //   return [...employees, action.payload];
    //   //TODO FIX THIS PART
    // case EmployeeActionType.UPDATE:
    //   return employees.map((employee) =>
    //     employee.empId === action.payload.empId ? action.payload : employee
    //   );
    //   //TODO FIX THIS PART
    // case EmployeeActionType.DELETE:
    //   return employees.filter((employee) => employee._id !== action.payload);
    default:
      return employees;
  }
};

export default employeeReducer;
