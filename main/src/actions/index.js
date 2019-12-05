const contentLoaded = (newContent) => {
  return {
    type: 'CONTENT_LOADED',
    payload: newContent
  }
};

const itemLoaded = (item) => {
  return {
    type: 'ITEM_LOADED',
    payload: item
  }
};

const contentRequested = () => {
  return {
    type: 'CONTENT_REQUESTED',
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


const shopServiceFailed = (error) => {
  return {
    type: 'SHOP_QUERY_FAILED',
    failed: error
  }
};

const doShowLongDescription = (long) => {
  return {
    type: 'LONG_DESCRIPTION',
    payload: long
  }
};

const filterByCountry = (country) => {
  return {
    type: 'FILTER_BY_COUNTRY',
    payload: country
  }
};

const filterBySearch = (search) => {
  return {
    type: 'FILTER_BY_SEARCH',
    payload: search
  }
};

const cartSave = () => {

  return {
    type: 'CART_SAVE'
  }
};


export {
  contentLoaded,
  itemLoaded,
  contentRequested,
  addedToCart,
  deleteFromCart,
  shopServiceFailed,
  cartSave,
  doShowLongDescription,
  filterByCountry,
  filterBySearch
}