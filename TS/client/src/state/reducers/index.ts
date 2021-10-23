import { combineReducers } from "redux";

import employeeReducer from "./employees";
import idReducer from "./ids";

const reducers = combineReducers({
  employees: employeeReducer,
  ids: idReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
