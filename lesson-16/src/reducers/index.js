const initialState = {
  menu: [],
  loading: true,
  failed: false
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
        loading: false,
        failed: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
        failed: false
      };

    case 'RESTO_QUERY_FAILED':
      return {
        ...state,
        loading: false,
        failed: action.failed
      };

    default:
      return state;
  }
};

export default reducer;