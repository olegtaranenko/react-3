const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
};


const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
};


const deleteFromCart = (id) => {
  return {
    type: 'ITEM_DELETE_FROM_CART',
    payload: id
  }
};


const restoServiceFailed = (error) => {
  return {
    type: 'RESTO_QUERY_FAILED',
    failed: error
  }
};

const cartSave = () => {
  debugger;
  return {
    type: 'CART_SAVE'
  }
};


export {
  menuLoaded,
  menuRequested,
  addedToCart,
  deleteFromCart,
  restoServiceFailed,
  cartSave
}