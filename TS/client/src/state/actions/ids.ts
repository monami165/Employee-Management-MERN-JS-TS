import { IdActionType } from "../action-types";
import { Dispatch } from "redux";

// Action Creators
export const setId = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: IdActionType.SET, payload: id });
  } catch (e) {
    console.log("Caught an error while setting ID,", e);
  }
};
