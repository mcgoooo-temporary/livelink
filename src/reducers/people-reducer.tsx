export const peopleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INITIAL_STATE":
      return { ...action.state };
    case "SELECT_PERSON":
      return { ...state, selectedPerson: action.id };
    default:
      throw new Error();
  }
};
