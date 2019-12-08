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

const contentRequested = (url) => {
  return {
    type: 'CONTENT_REQUESTED',
    payload: url
  }
};

const shopServiceFailed = (error) => {
  return {
    type: 'SHOP_QUERY_FAILED',
    failed: error
  }
};

const shopServiceCleanup = () => {
  debugger;
  return {
    type: 'SHOP_QUERY_CLEANUP',
    failed: undefined
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

const messageSave = () => {

  return {
    type: 'MESSAGE_SAVE'
  }
};


export {
  contentLoaded,
  itemLoaded,
  contentRequested,
  shopServiceFailed,
  shopServiceCleanup,
  messageSave,
  doShowLongDescription,
  filterByCountry,
  filterBySearch
}