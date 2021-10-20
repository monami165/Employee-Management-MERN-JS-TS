const idReducer = (id = "", action) => {
  switch (action.type) {
    case "SET":
      console.log("ID SET");
      return action.payload;
    default:
      return id;
  }
};

export default idReducer;
