import { IdAction } from "../actions/index";
import { IdActionType } from "../action-types/index";

const idReducer = (id: string = "", action: IdAction) => {
  switch (action.type) {
    case IdActionType.SET:
      console.log("ID SET");
      return action.payload;
    default:
      return id;
  }
};

export default idReducer;
