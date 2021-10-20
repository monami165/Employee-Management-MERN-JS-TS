import { combineReducers } from "redux";

import employees from "./employees";
import ids from "./ids";

export default combineReducers({
  employees,
  ids,
});
