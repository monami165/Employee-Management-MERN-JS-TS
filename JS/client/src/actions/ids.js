// Action Creators
export const setId = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SET", payload: id });
  } catch (e) {
    console.log(e.message);
  }
};
