const initialState = {
  menu: [],
  items: [],
  loading: true,
  failed: false
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
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
    case 'ITEM_DELETE_FROM_CART':
      const deleteId = action.payload;
      const deleteItemIndex = state.items.findIndex(item => item.id === deleteId);
      return {
        ...state,
        items: [
          ...state.items.slice(0, deleteItemIndex),
          ...state.items.slice(deleteItemIndex + 1)
        ]
      };
    case 'ITEM_ADD_TO_CART':
      const addedId = action.payload;
      const addedItem = state.menu.find(item => item.id === addedId);
      const newItem = {
        ...addedItem,
      };
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      };

    default:
      return state;
  }
};

export default reducer;