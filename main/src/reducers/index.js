const initialState = {
  content:         [],
  item:            {},
  loading:         true,
  failed:          false,
  longDescription: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTENT_LOADED':
      return {
        ...state,
        content: action.payload,
        loading: false,
        failed:  false
      };
    case 'ITEM_LOADED':
      return {
        ...state,
        item:    action.payload,
        loading: false,
        failed:  false,
        longDescription: false
      };
    case 'CONTENT_REQUESTED':
      return {
        ...state,
        loading: true,
        failed:  false
      };

    case 'SHOP_QUERY_FAILED':
      return {
        ...state,
        loading: false,
        failed:  action.failed
      };

    case 'LONG_DESCRIPTION':

      return {
        ...state,
        longDescription: action.payload
      };

    case 'ITEM_DELETE_FROM_CART':
      const deleteId = action.payload;
      const deleteItemIndex = state.items.findIndex(item => item.id === deleteId);
      const deleteItem = state.items[deleteItemIndex];
      const qty = deleteItem.qty || 1;

      let items;
      if (qty <= 1) {
        items = removeItemByIndex(deleteItemIndex);
      } else {
        items = setItemQtyByIndex(deleteItemIndex, qty - 1);
      }
      return {
        ...state,
        items: items
      };

    case 'ITEM_ADD_TO_CART':
      const addedId = action.payload;
      const existedCartItemIndex = state.items.findIndex(item => item.id === addedId);
      let cartItem, newCartItems;

      if (existedCartItemIndex === -1) {
        const contentItem = state.content.find(item => item.id === addedId);
        cartItem = {
          ...contentItem,
        };
        newCartItems = [
          ...state.items,
          cartItem
        ];
      } else {
        const existedItem = state.items[existedCartItemIndex];
        const qty = existedItem.qty || 1;
        newCartItems = setItemQtyByIndex(existedCartItemIndex, qty + 1);
      }

      return {
        ...state,
        items: newCartItems
      };

    case 'CART_SAVE':

      return state;

    default:
      return state;
  }


  function removeItemByIndex(deleteItemIndex) {
    return [
      ...state.items.slice(0, deleteItemIndex),
      ...state.items.slice(deleteItemIndex + 1)
    ];
  }

  function setItemQtyByIndex(existedCartItemIndex, newQty) {
    const existedCartItem = state.items[existedCartItemIndex];
    const cartItem = {...existedCartItem, qty: newQty};

    return [
      ...state.items.slice(0, existedCartItemIndex),
      cartItem,
      ...state.items.slice(existedCartItemIndex + 1)
    ];
  }


};

export default reducer;