const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload // setting current user value
      }
    default:
      return state;
  }
};

export default userReducer;

// payload - function that modifies state