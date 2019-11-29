const initialState = {
  items: [],
  hideCompleted: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return state + 1;
    case 'DONE_TASK':
      return state - 1;
    case 'HIDE_COMPLETED':
      return 0;
    default:
      return state;
  }
};

export default reducer;